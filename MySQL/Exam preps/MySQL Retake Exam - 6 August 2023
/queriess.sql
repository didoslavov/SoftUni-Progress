CREATE SCHEMA real_estate_db;
USE real_estate_db;

CREATE TABLE cities(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(60) NOT NULL UNIQUE
);

CREATE TABLE property_types(
	id INT PRIMARY KEY AUTO_INCREMENT,
	type VARCHAR(40) NOT NULL UNIQUE,
	description TEXT NULL
);

CREATE TABLE properties(
	id INT PRIMARY KEY AUTO_INCREMENT,
	address VARCHAR(80) NOT NULL UNIQUE,
	price DECIMAL(19,2) NOT NULL,
	area DECIMAL(19,2) NULL,
	property_type_id INT NULL,
	city_id INT NULL,
	CONSTRAINT fk_properties_property_type_id FOREIGN KEY (property_type_id)
	REFERENCES property_types(id),
	CONSTRAINT fk_properties_city_id FOREIGN KEY (city_id)
	REFERENCES cities(id)
);

CREATE TABLE agents(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(40) NOT NULL,
	last_name VARCHAR(40) NOT NULL,
	phone VARCHAR(20) NOT NULL UNIQUE,
	email VARCHAR(50) NOT NULL UNIQUE,
	city_id INT NULL,
	CONSTRAINT fk_agents_city_id FOREIGN KEY (city_id)
	REFERENCES cities(id)
);

CREATE TABLE buyers(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(40) NOT NULL,
	last_name VARCHAR(40) NOT NULL,
	phone VARCHAR(20) NOT NULL UNIQUE,
	email VARCHAR(50) NOT NULL UNIQUE,
	city_id INT NULL,
	CONSTRAINT fk_buyers_city_id FOREIGN KEY (city_id)
	REFERENCES cities(id)
);

CREATE TABLE property_offers(
	property_id INT NOT NULL,
	agent_id INT NOT NULL,
	price DECIMAL(19, 2) NOT NULL,
	offer_datetime DATETIME NULL,
	CONSTRAINT fk_property_offer_property_id FOREIGN KEY (property_id)
	REFERENCES properties(id),
	CONSTRAINT fk_property_offer_agent_id FOREIGN KEY (agent_id)
	REFERENCES agents(id)
);

CREATE TABLE property_transactions(
	id INT PRIMARY KEY AUTO_INCREMENT,
	property_id INT NOT NULL,
	buyer_id INT NOT NULL,
	transaction_date DATE NULL,
	bank_name VARCHAR(30) NULL,
	iban VARCHAR(40) NULL UNIQUE,
	is_successful TINYINT(1) NULL,
	CONSTRAINT fk_property_transaction_property_id FOREIGN KEY (property_id)
	REFERENCES properties(id),
	CONSTRAINT fk_property_transaction_buyer_id FOREIGN KEY (buyer_id)
	REFERENCES buyers(id)
);


INSERT
	INTO
	property_transactions (property_id,
	buyer_id,
	transaction_date,
	bank_name,
	iban,
	is_successful)
SELECT
	po.agent_id + DAY(po.offer_datetime),
	   po.agent_id + MONTH(po.offer_datetime),
	   DATE(po.offer_datetime),
	   CONCAT('Bank ', po.agent_id),
	   CONCAT('BG', po.price, po.agent_id),
	   true
FROM
	property_offers po
WHERE
	po.agent_id <= 2;

UPDATE
	properties p
SET
	price = price - 50000
WHERE
	price >= 800000;

DELETE FROM property_transactions 
WHERE is_successful = 0;

SELECT
	*
FROM
	agents
ORDER BY
	city_id DESC,
		phone DESC;

SELECT
	*
FROM
	property_offers
WHERE
	YEAR(offer_datetime) = 2021
ORDER BY
	price
LIMIT 10;
	
SELECT
	SUBSTR(p.address, 1, 6) AS agent_name,
	CHAR_LENGTH(p.address) * 5430 AS price
FROM
	properties p
LEFT JOIN property_offers po ON
	po.property_id = p.id
WHERE
	po.offer_datetime IS NULL
ORDER BY
	agent_name DESC,
	price DESC;

SELECT * FROM property_transactions pt;

SELECT
	pt.bank_name,
	COUNT(pt.iban) AS count
FROM
	property_transactions pt
GROUP BY
	bank_name
HAVING count >= 9
ORDER BY
	count DESC,
	bank_name;
	
SELECT
	p.address,
	p.area,
	CASE 
		WHEN p.area <= 100 THEN 'small'
		WHEN p.area <= 200 THEN 'medium'
		WHEN p.area <= 500 THEN 'large'
		ELSE 'extra large'
	END AS size
FROM
	properties p
ORDER BY
	p.area,
	p.address DESC;	

DELIMITER $$	
CREATE FUNCTION udf_offers_from_city_name (cityName VARCHAR(50))
RETURNS INT
DETERMINISTIC
  BEGIN
  	RETURN (
SELECT
	COUNT(po.property_id)
FROM
	properties p
JOIN cities c ON
	p.city_id = c.id
JOIN property_offers po ON
	po.property_id = p.id
GROUP BY
	c.name
HAVING
	c.name = cityName
);
  END$$

DELIMITER ;  
	
SELECT udf_offers_from_city_name('Vienna') AS 'offers_count';

DELIMITER $$
CREATE PROCEDURE udp_special_offer(first_name VARCHAR(50))
BEGIN 
	UPDATE
	property_offers AS po
JOIN agents AS a ON
	po.agent_id = a.id
	SET
	po.price = po.price * 0.90
WHERE
	a.first_name = first_name;
END$$

DELIMITER ;

CALL udp_special_offer('Hans');


	
	
	
	
	
	
	
	
	

