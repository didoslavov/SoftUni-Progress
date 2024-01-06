CREATE DATABASE buhtig;
USE buhtig;

CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(30) NOT NULL,
	password VARCHAR(30) NOT NULL,
	email VARCHAR(50) NOT NULL
);

CREATE TABLE repositories(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE repositories_contributors(
	repository_id INT,
	contributor_id INT,
	CONSTRAINT pk_repositories_contributors PRIMARY KEY (repository_id,
contributor_id),
	CONSTRAINT fk_repositories_contributors_repository FOREIGN KEY(repository_id)
	REFERENCES repositories(id),
	CONSTRAINT fk_repositories_contributors_contributor FOREIGN KEY(contributor_id)
	REFERENCES users(id)
);

CREATE TABLE issues(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255) NOT NULL,
	issue_status VARCHAR(6) NOT NULL,
	repository_id INT,
	assignee_id INT,
	CONSTRAINT fk_issues_repository FOREIGN KEY(repository_id)
	REFERENCES repositories(id),
	CONSTRAINT fk_issues_assignee FOREIGN KEY(assignee_id)
	REFERENCES users(id)
);

CREATE TABLE commits(
	id INT PRIMARY KEY AUTO_INCREMENT,
	message VARCHAR(255) NOT NULL,
	issue_id INT NULL,
	repository_id INT,
	contributor_id INT,
	CONSTRAINT fk_commits_issue FOREIGN KEY(issue_id)
	REFERENCES issues(id),
	CONSTRAINT fk_commits_repository FOREIGN KEY(repository_id)
	REFERENCES repositories(id),
	CONSTRAINT fk_commits_contributor FOREIGN KEY(contributor_id)
	REFERENCES users(id)
);

CREATE TABLE files(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	size DECIMAL(10,2) NOT NULL,
	parent_id INT NULL,
	commit_id INT,
	CONSTRAINT fk_files_parent FOREIGN KEY(parent_id)
	REFERENCES files(id),
	CONSTRAINT fk_files_commit FOREIGN KEY(commit_id)
	REFERENCES commits(id)
);

INSERT
	INTO
	issues (
	title,
	issue_status,
	repository_id,
	assignee_id)
SELECT
	CONCAT('Critical Problem With ', f.name, '!'),
	'open' AS issue_status,
	CEIL(f.id * 2 / 3) as repository_id,
	c.contributor_id AS assignee_id
FROM
	files f
JOIN commits c ON
	f.commit_id = c.id
WHERE
	f.id BETWEEN 46 AND 50;

SELECT * FROM issues;

UPDATE
	`repositories_contributors` AS rc
JOIN
    (
	SELECT
		r.id AS 'repo'
	FROM
		`repositories` AS r
	WHERE
		r.id NOT IN (
		SELECT
			repository_id
		FROM
			`repositories_contributors`)
	ORDER BY
		r.id
	LIMIT 1) AS d 
SET
	rc.repository_id = d.repo
WHERE
	rc.contributor_id = rc.repository_id;

DELETE
	r
FROM
	`repositories` AS r
LEFT JOIN
    `issues` AS i ON
	r.id = i.repository_id
WHERE
	i.id IS NULL;

DELIMITER $$
CREATE PROCEDURE udp_commit(
username VARCHAR(30),
password VARCHAR(30),
message VARCHAR(255),
issue_id INT
)
BEGIN
	START TRANSACTION;

	IF ((
SELECT
	COUNT(u.id)
FROM
	users u
WHERE
	u.username = username) = 0) 
		THEN SIGNAL SQLSTATE '45000'
SET
MESSAGE_TEXT = 'No such user!';
ROLLBACK;

ELSEIF ((
SELECT
	u.password
FROM
	`users` u
WHERE
	u.username = username) <> password)
		THEN SIGNAL SQLSTATE '45000' SET
MESSAGE_TEXT = 'Password is incorrect!';
ROLLBACK;
ELSEIF ((
SELECT
	COUNT(i.id)
FROM
	issues i
WHERE
	i.id = issue_id) = 0)
THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'The issue does not exist!';
ROLLBACK;


ELSE
INSERT
	INTO
	commits (message,
	issue_id,
	repository_id,
	contributor_id)
VALUES
	(
			message,
			issue_id,
	(SELECT
		i.repository_id
	FROM
		issues i
	WHERE
		i.id = issue_id),
		(SELECT
			u.id
		FROM
			users u
		WHERE
			u.username = username)
);
UPDATE
	issues i
SET
	issue_status = 'closed'
WHERE
	i.id = issue_id;
COMMIT;
END IF;
	
END$$

DELIMITER ;

CALL udp_commit('WhoDenoteBel', 'ajmISQi*', 'Fixed issue: blah', 2);

DELIMITER $$
CREATE PROCEDURE udp_findbyextension(extension VARCHAR(100))
BEGIN 
	SELECT
	f.id,
	f.name AS caption,
	CONCAT(f.size, 'KB') AS user
FROM
	files f
WHERE
	f.name LIKE (CONCAT('%', extension)) 
ORDER BY
	f.id;
END$$

DELIMITER ;

CALL udp_findbyextension('html');