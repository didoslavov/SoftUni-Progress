CREATE SCHEMA instagraph;
USE instagraph;

CREATE TABLE pictures(
	id INT PRIMARY KEY AUTO_INCREMENT,
	path VARCHAR(255) NOT NULL,
	size DECIMAL(10,2) NOT NULL
);

CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(30) NOT NULL,
	profile_picture_id INT NULL,
	CONSTRAINT fk_users_profile_picture_id FOREIGN KEY (profile_picture_id)
	REFERENCES pictures(id)
);

CREATE TABLE posts(
	id INT PRIMARY KEY AUTO_INCREMENT,
	caption VARCHAR(255) NOT NULL,
	user_id INT,
	picture_id INT,
	CONSTRAINT fk_posts_user_id FOREIGN KEY (user_id)
	REFERENCES users(id),
	CONSTRAINT fk_posts_picture_id FOREIGN KEY (picture_id)
	REFERENCES pictures(id)
);


CREATE TABLE comments(
	id INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(255) NOT NULL,
	user_id INT NOT NULL,
	post_id INT NOT NULL,
	CONSTRAINT fk_comments_user_id FOREIGN KEY (user_id)
	REFERENCES users(id),
	CONSTRAINT fk_comments_post_id FOREIGN KEY (post_id)
	REFERENCES posts(id)
);

CREATE TABLE users_followers(
	user_id INT,
	follower_id INT,
 	CONSTRAINT fk_users_followers_user_id FOREIGN KEY (user_id)
 	REFERENCES users(id),
 	CONSTRAINT fk_users_followers_follower_id FOREIGN KEY (follower_id)
 	REFERENCES users(id)
);

INSERT
	INTO
	comments(content,
	user_id,
	post_id)
SELECT
	CONCAT('Omg!', u.username, '!This is so cool!') AS content,
	CEIL((p.id * 3) / 2),
	p.id
FROM
	posts p
JOIN users u ON
	u.id = p.user_id
WHERE
	p.id BETWEEN 1 AND 10;

UPDATE
	users u
SET
	u.profile_picture_id =
		IF(
			(
	SELECT
		COUNT(*)
	FROM
		users_followers uf
	WHERE
		uf.user_id = u.id) = 0, 
			u.id,
			(
	SELECT
		COUNT(*)
	FROM
		users_followers uf
	WHERE
		uf.user_id = u.id
		)
WHERE
	u.profile_picture_id IS NULL;

DELETE
FROM
	users u
WHERE
	(
	SELECT
		COUNT(*)
	FROM
		users_followers uf
	WHERE
		uf.user_id = u.id) = 0
	AND (
	SELECT
		COUNT(*)
	FROM
		users_followers uf
	WHERE
		uf.user_id = u.id) = 0;
