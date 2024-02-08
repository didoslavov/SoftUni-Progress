 
CREATE SCHEMA stc;

USE stc;

CREATE TABLE addresses(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL
);

CREATE TABLE categories(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(10) NOT NULL
);

CREATE TABLE clients(
	id INT PRIMARY KEY AUTO_INCREMENT,
	full_name VARCHAR(50) NOT NULL,
	phone_number VARCHAR(20) NOT NULL
);

CREATE TABLE drivers(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	age INT NOT NULL,
	rating FLOAT NOT NULL DEFAULT 5.5
);

CREATE TABLE cars(
	id INT PRIMARY KEY AUTO_INCREMENT,
	make VARCHAR(20) NOT NULL,
	model VARCHAR(20) NOT NULL,
	`year` INT NOT NULL DEFAULT 0,
	mileage INT DEFAULT 0,
	`condition` CHAR(1) NOT NULL,
	category_id INT NOT NULL,
	FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE courses(
	id INT PRIMARY KEY AUTO_INCREMENT,
	from_address_id INT NOT NULL,
	FOREIGN KEY (from_address_id) REFERENCES addresses(id),
	`start` DATETIME NOT NULL,
	bill DECIMAL(10, 2) DEFAULT 10,
	car_id INT NOT NULL,
	FOREIGN KEY (car_id) REFERENCES cars(id),
	client_id INT NOT NULL,
	FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE cars_drivers(
	car_id INT NOT NULL,
	driver_id INT NOT NULL,
	PRIMARY KEY (car_id, driver_id),
	FOREIGN KEY (car_id) REFERENCES cars(id),
	FOREIGN KEY (driver_id) REFERENCES drivers(id)
);

INSERT INTO clients(full_name, phone_number)
(
	SELECT
		CONCAT_WS(" ", d.first_name, d.last_name),
		CONCAT("(088) 9999", (d.id * 2))
	FROM drivers d
	WHERE d.id BETWEEN 10 AND 20
);

UPDATE cars c
SET c.`condition` = "C"
WHERE (c.mileage >= 800000 OR c.mileage IS NULL)
AND c.`year` <= 2010
AND c.make != 'Mercedes-Benz';


SELECT c.make FROM cars c
WHERE (c.mileage >= 800000 OR c.mileage IS NULL)
AND c.`year` <= 2010
AND c.make <> 'Mercedes-Benz';

DELETE
FROM
	clients
WHERE
	id IN (
	SELECT
		c.id
	FROM
		(
		SELECT
			c1.id
		FROM
			clients c1
		LEFT JOIN courses c2 ON
			c2.client_id = c1.id
		WHERE
			c2.client_id IS NULL
			AND LENGTH(c1.full_name) > 3
) AS c);

SELECT
	c.make,
	c.model,
	c.`condition`
FROM
	cars c
ORDER BY c.id;

SELECT
	d.first_name,
	d.last_name,
	c.make,
	c.model,
	c.mileage
FROM
	drivers d
LEFT JOIN cars_drivers cd ON cd.driver_id = d.id
LEFT JOIN cars c ON c.id = cd.car_id
HAVING c.mileage IS NOT NULL
ORDER BY c.mileage DESC, d.first_name;

SELECT
	c.id AS car_id,
	c.make,
	c.mileage,
	COUNT(c1.car_id) AS count_of_courses,
	ROUND(AVG(c1.bill), 2) AS avg_bill
FROM
	cars c
LEFT JOIN
	courses c1 ON c1.car_id = c.id
GROUP BY c.id, c.make, c.mileage
HAVING
	COUNT(c1.car_id) != 2
ORDER BY COUNT(c1.car_id) DESC, c.id;

SELECT
	c.full_name,
	COUNT(c1.car_id) AS count_of_cars,
	SUM(c1.bill) AS total_sum
FROM clients c
LEFT JOIN courses c1 ON c1.client_id = c.id
WHERE SUBSTR(c.full_name, 2, 1) = 'a'
GROUP BY c.full_name
HAVING count_of_cars > 1
ORDER BY c.full_name;

SELECT
	a.name,
	(CASE
		WHEN HOUR(TIME(c.start)) BETWEEN 6 AND 20 THEN "Day"
		ELSE "Night"
	END) AS day_time,
	c.bill,
	c1.full_name,
	c2.make,
	c2.model,
	c3.name
FROM
	addresses a
JOIN courses c ON c.from_address_id = a.id
JOIN clients c1 ON c1.id = c.client_id
JOIN cars c2 ON c2.id = c.car_id
JOIN categories c3 ON c3.id = c2.category_id
ORDER BY c.id;

DELIMITER $$
CREATE FUNCTION udf_courses_by_client(phone_num VARCHAR(20))
RETURNS INT
DETERMINISTIC
BEGIN
	RETURN (SELECT
		COUNT(c.client_id)
	FROM
		courses c
	LEFT JOIN
		clients c2 ON c2.id = c.client_id
	WHERE
		c2.phone_number = phone_num);
END$$

DELIMITER ;

DELIMITER $$
CREATE PROCEDURE udp_courses_by_address(address_name VARCHAR(100))
BEGIN
	SELECT
	a.name,
	c2.full_name,
	(
	CASE
		WHEN c.bill < 20 THEN 'Low'
		WHEN c.bill < 30 THEN 'Medium'
		ELSE 'High'
	END
	) AS level_of_bill,
	c3.make,
	c3.`condition`,
	c4.name AS cat_name
FROM addresses a
LEFT JOIN
	courses c ON c.from_address_id = a.id
LEFT JOIN
	clients c2 ON c2.id = c.client_id
LEFT JOIN cars c3 ON c3.id = c.car_id
LEFT JOIN categories c4 ON c4.id = c3.category_id
WHERE a.name = address_name
ORDER BY c3.make, c2.full_name;
END$$

DELIMITER ;
