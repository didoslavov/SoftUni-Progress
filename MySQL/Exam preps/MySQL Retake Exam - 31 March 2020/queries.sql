 
CREATE SCHEMA instd;

USE instd;

CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(30) NOT NULL UNIQUE,
	`password` VARCHAR(30) NOT NULL,
	email VARCHAR(50) NOT NULL,
	gender CHAR(1) NOT NULL,
	age INT NOT NULL,
	job_title VARCHAR(40) NOT NULL,
	ip VARCHAR(30) NOT NULL
);

CREATE TABLE addresses(
	id INT PRIMARY KEY AUTO_INCREMENT,
	address VARCHAR(30) NOT NULl,
	town VARCHAR(30) NOT NULL,
	country VARCHAR(30) NOT NULL,
	user_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE photos(
	id INT PRIMARY KEY AUTO_INCREMENT,
	description TEXT NOT NULL,
	`date` DATETIME NOT NULL,
	views INT DEFAULT 0
);

CREATE TABLE comments(
	id INT PRIMARY KEY AUTO_INCREMENT,
	comment VARCHAR(255) NOT NULL,
	`date` DATETIME NOT NULL,
	photo_id INT NOT NULL,
	FOREIGN KEY (photo_id) REFERENCES photos(id)
);

CREATE TABLE users_photos(
	user_id INT NOT NULL,
	photo_id INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (photo_id) REFERENCES photos(id)
);

CREATE TABLE likes(
	id INT PRIMARY KEY AUTO_INCREMENT,
	photo_id INT,
	user_id INT,
	FOREIGN KEY (photo_id) REFERENCES photos(id),
	FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO addresses (address, town, country, user_id)
(
	SELECT
		u.username,
		u.password,
		u.ip,
		u.age
	FROM
		users u
	WHERE
		u.gender = "M"
);

UPDATE
	addresses a
SET
	a.country = (
	CASE
		WHEN LEFT(a.country, 1) = "B" THEN "Blocked"
		WHEN LEFT(a.country, 1) = "T" THEN "Test"
		WHEN LEFT(a.country, 1) = "P" THEN "In Progress"
	END
)
WHERE LEFT(a.country, 1) IN ("B", "T", "P");

DELETE FROM addresses
WHERE id % 3 = 0;

SELECT
	u.username,
	u.gender,
	u.age
FROM users u
ORDER BY u.age DESC, u.username;

SELECT
	p.id,
	p.date AS date_and_time,
	p.description,
	COUNT(c.photo_id) AS commentsCount
FROM photos p
LEFT JOIN
	comments c
ON c.photo_id = p.id
GROUP BY p.id, date_and_time, p.description
ORDER BY commentsCount DESC, p.id
LIMIT 5;

SELECT
	CONCAT_WS(" ", u.id, u.username) AS id_username,
	u.email
FROM
	users u
LEFT JOIN
	users_photos up
ON
	up.user_id = u.id
WHERE
	u.id = up.photo_id
ORDER BY
	u.id;

SELECT
	p.id AS photo_id,
	COUNT(DISTINCT l.id) AS likes_count,
	COUNT(DISTINCT c.id) AS comments_count
FROM photos p
LEFT JOIN
	likes l
ON
	l.photo_id = p.id
LEFT JOIN
	comments c
ON
	c.photo_id = p.id
GROUP BY
	p.id
ORDER BY
	likes_count DESC,
	comments_count DESC,
	p.id;

SELECT
	CONCAT(SUBSTR(p.description, 1, 30), '...') AS summary,
	p.date
FROM
	photos p
WHERE
	DAY(p.`date`) = 10
ORDER BY p.date DESC;

DELIMITER $$
CREATE FUNCTION udf_users_photos_count(username VARCHAR(30))
RETURNS INT
DETERMINISTIC
BEGIN
	RETURN (
		SELECT
			COUNT(up.photo_id)
		FROM
			photos p
		LEFT JOIN
			users_photos up
		ON
			up.photo_id = p.id
		LEFT JOIN
			users u
		ON
			u.id = up.user_id
		WHERE
			u.username = username
	);
END$$

DELIMITER ;

DELIMITER $$
CREATE PROCEDURE udp_modify_user(address VARCHAR(30), town VARCHAR(30))
BEGIN
UPDATE
	users u
JOIN
	addresses a
ON
	a.user_id = u.id
SET
	u.age = u.age + 10
WHERE
	a.town = town
AND
	a.address = address;
END$$

DELIMITER ;
