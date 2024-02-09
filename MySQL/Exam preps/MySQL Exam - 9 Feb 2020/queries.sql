CREATE SCHEMA fsd;

USE fsd;



CREATE TABLE countries (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL
);

CREATE TABLE towns (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL,
	country_id INT NOT NULL,
	CONSTRAINT fk_towns_countries
		FOREIGN KEY (country_id)
		REFERENCES countries(id)
);

CREATE TABLE stadiums (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL,
	capacity INT NOT NULL,
	town_id INT NOT NULL,
	CONSTRAINT fk_stadiums_towns
		FOREIGN KEY (town_id)
		REFERENCES towns(id)
);

CREATE TABLE teams (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL,
	established DATE NOT NULL,
	fan_base BIGINT(20) NOT NULL DEFAULT(0),
	stadium_id INT NOT NULL,
	CONSTRAINT fk_teams_stadiums
		FOREIGN KEY (stadium_id)
		REFERENCES stadiums(id)
);

CREATE TABLE skills_data (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dribbling INT DEFAULT(0),
	pace INT DEFAULT(0),
	passing INT DEFAULT(0),
	shooting INT DEFAULT(0),
	speed INT DEFAULT(0),
	strength INT DEFAULT(0)
);

CREATE TABLE players (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(10) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	age INT NOT NULL DEFAULT(0),
	`position` CHAR(1) NOT NULL,
	salary DECIMAL(10,2) NOT NULL DEFAULT(0),
	hire_date DATETIME,
	skills_data_id INT NOT NULL,
	team_id INT,
	CONSTRAINT fk_players_teams
		FOREIGN KEY (team_id)
		REFERENCES teams(id),
	CONSTRAINT fk_players__skills_data
		FOREIGN KEY (skills_data_id)
		REFERENCES skills_data(id)
);

CREATE TABLE coaches (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(10) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	salary DECIMAL(10,2) NOT NULL DEFAULT(0),
	coach_level INT NOT NULL DEFAULT(0)
);

CREATE TABLE players_coaches (
	player_id INT,
	coach_id INT,
	CONSTRAINT pk_players_coaches
		PRIMARY KEY (player_id, coach_id),
	CONSTRAINT fk_players_coaches__players
		FOREIGN KEY (player_id)
		REFERENCES players(id),
	CONSTRAINT fk_players_coaches__coaches
		FOREIGN KEY (coach_id)
		REFERENCES coaches(id)
);

INSERT INTO coaches (first_name, last_name, salary, coach_level)
	(
		SELECT
			p.first_name,
			p.last_name,
			p.salary * 2 AS salary,
			LENGTH(p.first_name) AS first_name
		FROM
			players p
		WHERE
			p.age >= 45
	);

UPDATE coaches c
SET c.coach_level = c.coach_level + 1
WHERE c.id IN (
		SELECT
			coach_id
		FROM
			players_coaches AS pc
		WHERE
			c.first_name LIKE 'A%'
		);

DELETE FROM players
WHERE age >= 45;

SELECT
	p.first_name,
	p.age,
	p.salary
FROM players p
ORDER BY
	p.salary DESC;

SELECT
	p.id,
	CONCAT_WS(" ", p.first_name, p.last_name) AS full_name,
	p.age,
	p.`position`,
	p.hire_date
FROM
	players p
LEFT JOIN
	skills_data sd ON sd.id = p.skills_data_id
WHERE
	p.age < 23
AND
	p.`position` = "A"
AND
	p.hire_date IS NULL
AND
	sd.strength > 50
ORDER BY
	p.salary, p.age;

SELECT
	t.name AS team_name,
	t.established,
	t.fan_base,
	COUNT(p.id) AS players_count
FROM teams t
LEFT JOIN players p ON p.team_id = t.id
GROUP BY t.name, t.established, t.fan_base
ORDER BY players_count DESC, t.fan_base DESC;

SELECT
	MAX(sd.speed) AS max_speed,
	t2.name AS town_name
FROM
	skills_data sd
JOIN players p ON p.skills_data_id = sd.id
RIGHT JOIN teams t ON t.id = p.team_id
JOIN stadiums s ON s.id = t.stadium_id
JOIN towns t2 ON t2.id = s.town_id
WHERE t.name != 'Devify'
GROUP BY  town_name
ORDER BY max_speed DESC, town_name;

SELECT
	c.name,
	COUNT(p.id) AS total_count_of_players,
	SUM(p.salary) AS total_sum_of_salaries
FROM players p
RIGHT JOIN teams t ON t.id = p.team_id
RIGHT JOIN stadiums s ON s.id  = t.stadium_id
RIGHT JOIN towns t2 ON t2.id = s.town_id
RIGHT JOIN countries c ON c.id = t2.country_id
GROUP BY c.name
ORDER BY total_count_of_players DESC, c.name;

DELIMITER $$
CREATE FUNCTION udf_stadium_players_count(stadium_name VARCHAR(30))
RETURNS INT
DETERMINISTIC
BEGIN
	RETURN (SELECT
	COUNT(p.id)
FROM
	players p
LEFT JOIN teams t ON
	t.id = p.team_id
LEFT JOIN stadiums s ON
	s.id = t.stadium_id
WHERE
	s.name = stadium_name);
END$$

DELIMITER ;

DELIMITER $$
CREATE PROCEDURE udp_find_playmaker(min_dribble_points INT, team_name VARCHAR(45))
BEGIN
	SELECT
	CONCAT_WS(" ", p.first_name, p.last_name) AS full_name,
	p.age,
	p.salary,
	sd.dribbling,
	sd.speed,
	t.name AS team_name
	FROM players p
	LEFT JOIN skills_data sd ON sd.id = p.skills_data_id
	LEFT JOIN teams t ON t.id = p.team_id
	WHERE sd.dribbling > min_dribble_points
	AND t.name = team_name
	AND sd.speed > (SELECT AVG(speed) FROM skills_data)
	ORDER BY sd.speed DESC
	LIMIT 1;
END$$

DELIMITER ;

SELECT
	CONCAT_WS(" ", p.first_name, p.last_name) AS full_name,
	p.age,
	p.salary,
	sd.dribbling,
	sd.speed,
	t.name AS team_name
FROM players p
LEFT JOIN skills_data sd ON sd.id = p.skills_data_id
LEFT JOIN teams t ON t.id = p.team_id
WHERE MIN(sd.dribbling) < min_dribble_points AND t.name = team_name AND sd.speed > (SELECT AVG(speed) FROM skills_data);

