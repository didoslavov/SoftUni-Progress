 
CREATE SCHEMA airlines;
USE airlines;

CREATE TABLE countries(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL UNIQUE,
	currency VARCHAR(5) NOT NULL,
	description TEXT
);

CREATE TABLE airplanes(
	id INT PRIMARY KEY AUTO_INCREMENT,
	model VARCHAR(50) NOT NULL UNIQUE,
	passengers_capacity INT NOT NULL,
	tank_capacity DECIMAL(19,2) NOT NULL,
	cost DECIMAL(19,2) NOT NULL
);

CREATE TABLE passengers(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	country_id INT NOT NULL,
	FOREIGN KEY(country_id) REFERENCES countries(id)
);

CREATE TABLE flights(
	id INT PRIMARY KEY AUTO_INCREMENT,
	flight_code VARCHAR(30) NOT NULL UNIQUE,
	departure_country INT NOT NULL,
	FOREIGN KEY (departure_country) REFERENCES countries(id),
	destination_country INT NOT NULL,
	FOREIGN KEY (destination_country) REFERENCES countries(id),
	airplane_id INT NOT NULL,
	FOREIGN KEY (airplane_id) REFERENCES airplanes(id),
	has_delay TINYINT(1),
	departure DATETIME
);

CREATE TABLE flights_passengers(
	flight_id INT,
	passenger_id INT,
	CONSTRAINT flights_passengers_flight_id_passanger_id FOREIGN KEY (flight_id) 
	REFERENCES flights(id),
	CONSTRAINT flights_passengers_passanger_id_flight_id FOREIGN KEY (passenger_id) 
	REFERENCES passengers(id)
);

SELECT * FROM airplanes;

INSERT INTO airplanes (model, passengers_capacity, tank_capacity, cost)
SELECT 
(CONCAT(REVERSE(p.first_name), 797)) AS model,
(CHAR_LENGTH(p.last_name) *  17) AS passengers_capacity,
(p.id * 790) AS tank_capacity,
(CHAR_LENGTH(first_name) * 50.6) AS cost
FROM passengers p
	WHERE p.id <= 5;

SELECT * FROM flights
WHERE departure_country = (SELECT id FROM countries WHERE name = 'Armenia');

UPDATE
	flights
SET
	airplane_id = airplane_id + 1
WHERE
	departure_country = (
	SELECT
		id
	FROM
		countries
	WHERE
		name = 'Armenia'
	LIMIT 1
);

DELETE
	f
FROM
	flights f
LEFT JOIN flights_passengers fp ON
	fp.flight_id = f.id
WHERE
	fp.passenger_id IS NULL;

SELECT
	*
FROM
	airplanes
ORDER BY
	cost DESC,
	id DESC;

SELECT
	flight_code,
	departure_country,
	airplane_id,
	departure
FROM
	flights
WHERE YEAR(departure) = 2022
ORDER BY airplane_id, flight_code 
LIMIT 20;

SELECT
	CONCAT(UPPER(SUBSTR(last_name, 1, 2)), country_id) AS flight_code,
	CONCAT_WS(' ', first_name, last_name) AS full_name,
	country_id 
FROM
	passengers p
LEFT JOIN flights_passengers fp ON
	fp.passenger_id = p.id
WHERE
	fp.flight_id IS NULL
ORDER BY country_id; 

SELECT 
	c.name,
	c.currency,
	COUNT(*) AS booked_tickets
FROM countries c
JOIN flights f ON f.destination_country = c.id
JOIN flights_passengers fp ON fp.flight_id = f.id
GROUP BY name
HAVING booked_tickets >= 20
ORDER BY booked_tickets DESC;

SELECT 
	flight_code,
	departure,
	(CASE 
		WHEN DATE_FORMAT(departure, '%H:%i') BETWEEN '05:00' AND '11:59' THEN 'Morning'
		WHEN DATE_FORMAT(departure, '%H:%i') BETWEEN '12:00' AND '16:59' THEN 'Afternoon'
		WHEN DATE_FORMAT(departure, '%H:%i') BETWEEN '17:00' AND '20:59' THEN 'Evening'
		ELSE 'Night'
	END) AS day_part
FROM
	flights
ORDER BY flight_code DESC;

DELIMITER $$

CREATE FUNCTION udf_count_flights_from_country(country VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
	RETURN (
SELECT
	COUNT(*)
FROM
	countries c
JOIN flights f ON
	f.departure_country = c.id
WHERE
	c.name = country
);
END$$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE udp_delay_flight(code VARCHAR(50))
BEGIN 
	UPDATE
	flights f
SET
	f. departure = TIMESTAMPADD(MINUTE, 30, departure),
	has_delay = 1
WHERE
	f.flight_code = code;
END$$ 

DELIMITER ;

CALL udp_delay_flight('ZP-782');

SELECT * FROM flights WHERE flight_code = 'ZP-782';





