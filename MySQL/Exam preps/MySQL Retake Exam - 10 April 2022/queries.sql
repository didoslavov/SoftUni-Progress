 
CREATE SCHEMA softuni_imdb;

USE softuni_imdb;

CREATE TABLE countries(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL UNIQUE,
	continent VARCHAR(30) NOT NULL,
	currency VARCHAR(5) NOT NULL
);

CREATE TABLE genres(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE actors(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	birthdate DATE NOT NULL,
	height INT,
	awards INT,
	country_id INT NOT NULL,
	FOREIGN KEY (country_id) REFERENCES countries(id)
);

CREATE TABLE movies_additional_info(
	id INT PRIMARY KEY AUTO_INCREMENT,
	rating DECIMAL(10, 2) NOT NULL,
	runtime INT NOT NULL,
	picture_url VARCHAR(80) NOT NULL,
	budget DECIMAL(10, 2),
	release_date DATE NOT NULL,
	has_subtitles TINYINT(1),
	description TEXT
);

CREATE TABLE movies(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(70) NOT NULL UNIQUE,
	country_id INT NOT NULL,
	FOREIGN KEY (country_id) REFERENCES countries(id),
	movie_info_id INT NOT NULL UNIQUE,
	FOREIGN KEY (movie_info_id) REFERENCES movies_additional_info(id)
);

CREATE TABLE movies_actors(
	movie_id INT,
	actor_id INT,
	FOREIGN KEY (movie_id) REFERENCES movies(id),
	FOREIGN KEY (actor_id) REFERENCES actors(id)
);

CREATE TABLE genres_movies(
	genre_id INT,
	movie_id INT,
	FOREIGN KEY (genre_id) REFERENCES genres(id),
	FOREIGN KEY (movie_id) REFERENCES movies(id)
);

INSERT INTO actors(first_name, last_name, birthdate, height, awards, country_id)
SELECT
REVERSE(a.first_name),
REVERSE(a.last_name),
DATE_SUB(a.birthdate, INTERVAL 2 DAY),
a.height + 10,
a.country_id,
(SELECT id FROM countries WHERE name = "Armenia")
FROM actors a
WHERE a.id <= 10;

UPDATE movies_additional_info
SET runtime = runtime - 10
WHERE id BETWEEN 15 AND 25;

DELETE FROM countries c
WHERE c.id NOT IN (SELECT m.country_id FROM movies m);

SELECT * FROM countries c
ORDER BY c.currency DESC, c.id;

SELECT mai.id, m.title, mai.runtime, mai.budget, mai.release_date  FROM movies_additional_info mai
JOIN movies m on m.movie_info_id  = mai.id
WHERE YEAR(mai.release_date) BETWEEN 1996 AND 1999
ORDER BY mai.runtime, mai.id
LIMIT 20;


SELECT CONCAT_WS(" ", a.first_name, a.last_name) AS full_name,
	   CONCAT(REVERSE(a.last_name), LENGTH(a.last_name), "@cast.com") AS email,
	   (2022 - YEAR(a.birthdate)) AS age,
	   a.height FROM actors a
LEFT JOIN movies_actors ma ON ma.actor_id = a.id
WHERE ma.movie_id IS NULL
ORDER BY a.height;

SELECT c.name, COUNT(m.country_id) AS movies_count FROM countries c
LEFT JOIN movies m ON m.country_id = c.id
GROUP BY c.id
HAVING movies_count >= 7
ORDER BY c.name DESC;

SELECT
	m.title,
	CASE
		WHEN mai.rating <= 4 THEN "poor"
		WHEN mai.rating <= 7 THEN "good"
		ELSE "excellent"
	END AS rating,
	CASE
		WHEN mai.has_subtitles IS TRUE THEN "english"
		ELSE "-"
	END AS subtitles,
	mai.budget
FROM movies m
LEFT JOIN movies_additional_info mai ON mai.id = m.movie_info_id
ORDER BY mai.budget DESC;

DELIMITER $$

CREATE FUNCTION udf_actor_history_movies_count(full_name VARCHAR(50))
RETURNS INT
DETERMINISTIC
	BEGIN
		RETURN (SELECT COUNT(*) FROM actors a
		LEFT JOIN movies_actors ma ON ma.actor_id = a.id
		LEFT JOIN movies m ON m.id = ma.movie_id
		LEFT JOIN genres_movies gm ON gm.movie_id = m.id
		LEFT JOIN genres g ON g.id = gm.genre_id
		WHERE CONCAT_WS(" ", a.first_name, a.last_name) = full_name AND g.name = 'History');
	END$$

DELIMITER ;









DELIMITER $$
CREATE PROCEDURE udp_award_movie(IN movie_title VARCHAR(50))
BEGIN
    UPDATE actors a
    JOIN movies_actors ma ON a.id = ma.actor_id
    JOIN movies m ON m.id = ma.movie_id
    SET a.awards = a.awards + 1
    WHERE m.title = movie_title;
END$$

DELIMITER ;

CALL udp_award_movie('Tea For Two');

SELECT a.awards FROM actors a
JOIN movies_actors ma on a.id = ma.actor_id
join movies m on m.id = ma.movie_id
WHERE m.title = 'Tea For Two';












