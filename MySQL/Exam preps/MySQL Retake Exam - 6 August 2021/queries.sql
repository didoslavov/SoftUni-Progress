 
CREATE SCHEMA sgd;

USE sgd;

CREATE TABLE addresses(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE categories(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(10) NOT NULL
);

CREATE TABLE offices(
	id INT PRIMARY KEY AUTO_INCREMENT,
	workspace_capacity INT NOT NULL,
	website VARCHAR(50),
	address_id INT NOT NULL,
	FOREIGN KEY (address_id) REFERENCES addresses(id)
);

CREATE TABLE employees(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	age INT NOT NULL,
	salary DECIMAL(10, 2) NOT NULL,
	job_title VARCHAR(20) NOT NULL,
	happiness_level CHAR(1)
);

CREATE TABLE teams(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40) NOT NULL,
	office_id INT NOT NULL,
	FOREIGN KEY (office_id) REFERENCES offices(id),
	leader_id INT NOT NULL UNIQUE,
	FOREIGN KEY (leader_id) REFERENCES employees(id)
);

CREATE TABLE games(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL UNIQUE,
	description TEXT,
	rating FLOAT DEFAULT 5.5 NOT NULL,
	budget DECIMAL(10, 2) NOT NULL,
	release_date DATE,
	team_id INT NOT NULL,
	FOREIGN KEY (team_id) REFERENCES teams(id)
);

CREATE TABLE games_categories(
	game_id INT NOT NULL,
	category_id INT NOT NULL,
	PRIMARY KEY (game_id, category_id),
	FOREIGN KEY (game_id) REFERENCES games(id),
	FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO games(name, rating, budget, team_id)
(
	SELECT
		REVERSE(LOWER(SUBSTRING(name, 2, LENGTH(name)))),
		id,
		leader_id * 1000,
		id
	FROM teams
	WHERE id BETWEEN 1 AND 9
);

UPDATE employees e
JOIN teams t ON e.id = t.leader_id
SET e.salary = e.salary + 1000
WHERE e.age < 40 AND e.salary < 5000;

DELETE g FROM games g
LEFT JOIN games_categories gc ON gc.game_id = g.id
WHERE g.release_date IS NULL AND gc.category_id IS NULL;

SELECT
	first_name,
	last_name,
	age,
	salary,
	happiness_level
FROM employees
ORDER BY salary, id;

SELECT
	t.name AS team_name,
	a.name AS address_name,
	LENGTH(a.name) AS count_of_characters
FROM
	teams t
JOIN
	offices o ON o.id = t.office_id
AND
	o.website IS NOT NULL
JOIN
	addresses a ON a.id = o.address_id
ORDER BY
	t.name, a.name;

SELECT
	c.name,
	COUNT(gc.game_id) AS games_count,
	ROUND(AVG(g.budget), 2) AS avg_budget,
	MAX(g.rating) AS max_rating
FROM categories c
LEFT JOIN games_categories gc ON gc.category_id = c.id
LEFT JOIN games g ON g.id = gc.game_id
GROUP BY c.name
HAVING max_rating >= 9.5
ORDER BY games_count DESC, c.name;

SELECT
	g.name,
	g.release_date,
	CONCAT(SUBSTR(g.description, 1, 10), "...") AS summary,
	(CASE
		WHEN MONTH(g.release_date) BETWEEN 1 AND 3 THEN "Q1"
		WHEN MONTH(g.release_date) BETWEEN 4 AND 6 THEN "Q2"
		WHEN MONTH(g.release_date) BETWEEN 7 AND 9 THEN "Q3"
		ELSE "Q4"
	 END) AS quarter,
	(SELECT
		t.name
	 FROM
		teams t
	 WHERE t.id = g.team_id)
	 AS
	 team_name
FROM games g
WHERE
	g.name LIKE '% 2'
AND
	MONTH(g.release_date) % 2 = 0
AND
	YEAR(g.release_date) = 2022
ORDER BY quarter;

SELECT
	g.name,
	(CASE
		WHEN g.budget < 50000 THEN "Normal budget"
		ELSE "Insufficient budget"
	END) AS budget_level,
	t.name AS team_name,
	a.name AS address_name
FROM games g
LEFT JOIN games_categories gc ON gc.game_id = g.id
LEFT JOIN teams t ON t.id = g.team_id
LEFT JOIN offices o ON o.id = t.office_id
LEFT JOIN addresses a ON a.id = o.address_id
WHERE g.release_date IS NULL AND gc.game_id IS NULL
ORDER BY g.name;

DELIMITER $$
CREATE FUNCTION udf_game_info_by_name(game_name VARCHAR (20))
RETURNS VARCHAR(255)
DETERMINISTIC
BEGIN
	DECLARE team_name VARCHAR(40);
	DECLARE address_text VARCHAR(50);

	SELECT t.name INTO team_name
	FROM
		teams t
	LEFT JOIN
		games g
	ON
		g.team_id = t.id
	WHERE g.name = game_name;

	SELECT a.name INTO address_text
	FROM
		addresses a
	LEFT JOIN
		offices o
	ON
		o.address_id = a.id
	LEFT JOIN
		teams t
	ON
		t.office_id = o.id
	LEFT JOIN
		games g
	ON
		g.team_id = t.id
	WHERE
		g.name = game_name;

	RETURN CONCAT_WS(
			" ",
			"The",
			game_name,
			"is developed by a",
			team_name,
			"in an office with an address",
			address_text);
END$$

DELIMITER ;

DELIMITER $$
CREATE PROCEDURE udp_update_budget(min_game_rating FLOAT)
BEGIN
	UPDATE games g
	LEFT JOIN games_categories gc ON gc.game_id = g.id
	SET
	g.budget = g.budget + 100000,
	g.release_date = DATE_ADD(g.release_date, INTERVAL 1 YEAR)
	WHERE g.rating > min_game_rating
	AND g.release_date IS NOT NULL
	AND gc.category_id IS NULL;
END$$

DELIMITER ;


CALL udp_update_budget (8);
