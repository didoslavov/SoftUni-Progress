CREATE SCHEMA colonial_journey_management_system_db;

USE colonial_journey_management_system_db;

CREATE TABLE planets(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL
);

CREATE TABLE spaceports(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	planet_id INT,
	FOREIGN KEY (planet_id) REFERENCES planets(id)
);

CREATE TABLE spaceships(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	manufacturer VARCHAR(30),
	light_speed_rate INT DEFAULT 0
);

CREATE TABLE colonists(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	ucn CHAR(10) NOT NULL UNIQUE,
	birth_date DATE NOT NULL
);

CREATE TABLE journeys(
	id INT PRIMARY KEY AUTO_INCREMENT,
	journey_start DATETIME NOT NULL,
	journey_end DATETIME NOT NULL,
	purpose ENUM("Medical", "Technical", "Educational", "Military"),
	destination_spaceport_id INT,
	spaceship_id INT,
	FOREIGN KEY (destination_spaceport_id) REFERENCES spaceports(id),
	FOREIGN KEY (spaceship_id) REFERENCES spaceships(id)
);

CREATE TABLE travel_cards(
	id INT PRIMARY KEY AUTO_INCREMENT,
	card_number CHAR(10) NOT NULL UNIQUE,
	job_during_journey ENUM("Pilot", "Engineer", "Trooper", "Cleaner", "Cook"),
	colonist_id INT,
	journey_id INT,
	FOREIGN KEY (colonist_id) REFERENCES colonists(id),
	FOREIGN KEY (journey_id) REFERENCES journeys(id)
);

INSERT INTO travel_cards (card_number, job_during_journey, colonist_id, journey_id) (
	SELECT
		CASE
			WHEN c.birth_date > '1980-01-01' THEN CONCAT(YEAR(c.birth_date), DAY(c.birth_date), LEFT(c.ucn, 4))
			ELSE CONCAT(YEAR(c.birth_date), MONTH(c.birth_date), RIGHT(c.ucn, 4))
		END AS 'card_number',
		CASE
			WHEN (c.id % 2) = 0 THEN 'Pilot'
			WHEN (c.id % 3) = 0 THEN 'Cook'
			ELSE 'Engineer'
		END AS 'job_during_journey',
		c.id AS 'colonist_id',
		LEFT(c.ucn, 1) AS 'journey_id'
	FROM
		colonists AS c
	WHERE
		c.id BETWEEN 96 AND 100
);

UPDATE
	journeys
SET
	purpose = (
	CASE
		WHEN id % 2 = 0 THEN "Medical"
		WHEN id % 3 = 0 THEN "Technical"
		WHEN id % 5 = 0 THEN "Educational"
		WHEN id % 7 = 0 THEN "Military"
		ELSE purpose
	END
);

DELETE
FROM
	colonists c
WHERE
	c.id NOT IN (
	SELECT
		tc.colonist_id
	FROM
		travel_cards tc
	LEFT JOIN journeys j ON
		j.id = tc.journey_id
	);

SELECT
	tc.card_number,
	tc.job_during_journey
FROM travel_cards tc
ORDER BY card_number;

SELECT
	c.id,
	CONCAT(c.first_name," ", c.last_name) AS full_name,
	c.ucn
FROM colonists c
ORDER BY first_name, last_name, id;

SELECT
	j.id,
	j.journey_start,
	j.journey_end
FROM journeys j
WHERE j.purpose  = "Military"
ORDER BY j.journey_start;

SELECT
	c.id,
	CONCAT(c.first_name," ", c.last_name) AS full_name
FROM colonists c
LEFT JOIN travel_cards tc ON tc.colonist_id = c.id
WHERE tc.job_during_journey = "Pilot"
ORDER BY c.id;

SELECT
	COUNT(tc.colonist_id) AS count
FROM colonists c
LEFT JOIN travel_cards tc ON tc.colonist_id = c.id
LEFT JOIN journeys j ON j.id = tc.journey_id
WHERE j.purpose = 'Technical';

SELECT
	s.name AS spaceship_name,
	s2.name AS spaceport_name
FROM spaceships s
LEFT JOIN journeys j ON j.spaceship_id = s.id
LEFT JOIN spaceports s2 ON s2.id = j.destination_spaceport_id
ORDER BY s.light_speed_rate DESC
LIMIT 1;

SELECT
	s.name,
	s.manufacturer
FROM spaceships s
JOIN journeys j ON j.spaceship_id = s.id
JOIN travel_cards tc ON tc.journey_id = j.id
JOIN colonists c ON c.id = tc.colonist_id
WHERE ("2019-01-01" - YEAR(c.birth_date) < 30)
AND tc.job_during_journey = "Pilot"
ORDER BY s.name;

SELECT
	p.name AS planet_name,
	s.name AS spaceport_name
FROM planets p
LEFT JOIN spaceports s ON s.planet_id = p.id
LEFT JOIN journeys j ON j.destination_spaceport_id = s.id
WHERE j.purpose = 'Educational'
ORDER BY spaceport_name DESC;

SELECT
	p.name AS planet_name,
	COUNT(j.id) AS journeys_count
FROM planets p
LEFT JOIN spaceports s ON s.planet_id = p.id
JOIN journeys j ON j.destination_spaceport_id = s.id
GROUP BY planet_name
ORDER BY journeys_count DESC, planet_name;

SELECT
	j.id,
	p.name AS planet_name,
	s.name AS spaceport_name,
	j.purpose AS journeys_purpose
FROM journeys j
LEFT JOIN spaceports s ON s.id = j.destination_spaceport_id
LEFT JOIN planets p ON p.id = s.planet_id
ORDER BY TIMESTAMPDIFF(DAY, j.journey_start, j.journey_end)
LIMIT 1;

SELECT
	tc.job_during_journey AS 'job_name'
FROM
	travel_cards tc
WHERE tc.journey_id = (
	SELECT
		j.id
	FROM
		journeys j
	ORDER BY
		TIMESTAMPDIFF(DAY, j.journey_start, j.journey_end) DESC
	LIMIT 1
)
GROUP BY
	tc.job_during_journey
ORDER BY
	COUNT(tc.job_during_journey)
LIMIT 1;

DELIMITER $$

CREATE FUNCTION udf_count_colonists_by_destination_planet(planet_name VARCHAR (30))
RETURNS INT
DETERMINISTIC
BEGIN

	RETURN (SELECT
		COUNT(tc.colonist_id)
	FROM
		planets p
	JOIN spaceports s ON
		p.id = s.planet_id
	JOIN journeys j ON
		s.id = j.destination_spaceport_id
	JOIN travel_cards tc ON
		j.id = tc.journey_id
	WHERE
		p.name = planet_name);

END$$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE udp_modify_spaceship_light_speed_rate(spaceship_name VARCHAR(50),
light_speed_rate_increse INT(11))
BEGIN
	IF (
		SELECT COUNT(s.name)
		FROM spaceships s
		WHERE s.name = spaceship_name) > 0
		THEN UPDATE spaceships s SET s.light_speed_rate = s.light_speed_rate + light_speed_rate_increse
		WHERE s.name = spaceship_name;
	ELSE
		SIGNAL SQLSTATE '45000'
      	SET MESSAGE_TEXT = 'Spaceship you are trying to modify does not exists.';
      	ROLLBACK;
	END IF;
END$$

DELIMITER ;















