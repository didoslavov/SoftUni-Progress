 
CREATE SCHEMA softuni_stores_system;

USE softuni_stores_system;

CREATE TABLE pictures(
	id INT PRIMARY KEY AUTO_INCREMENT,
	url VARCHAR(100) NOT NULL,
	added_on DATETIME NOT NULL
);

CREATE TABLE categories(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40) NOT NULL
);

CREATE TABLE products(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40) NOT NULL UNIQUE,
	best_before DATE,
	price DECIMAL(10, 2) NOT NULL,
	description TEXT,
	category_id INT NOT NULL,
	FOREIGN KEY (category_id) REFERENCES categories(id),
	picture_id INT NOT NULL,
	FOREIGN KEY (picture_id) REFERENCES pictures(id)
);

CREATE TABLE towns(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE addresses(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL UNIQUE,
	town_id INT NOT NULL,
	FOREIGN KEY (town_id) REFERENCES towns(id)
);

CREATE TABLE stores(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL UNIQUE,
	rating FLOAT NOT NULL,
	has_parking TINYINT(1) DEFAULT FALSE,
	address_id INT NOT NULL,
	FOREIGN KEY (address_id) REFERENCES addresses(id)
);

CREATE TABLE products_stores(
	product_id INT NOT NULL,
	store_id INT NOT NULL,
	PRIMARY KEY (product_id, store_id),
	FOREIGN KEY (product_id) REFERENCES products(id),
	FOREIGN KEY (store_id) REFERENCES stores(id)
);

CREATE TABLE employees(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(15) NOT NULL,
	middle_name CHAR(1),
	last_name VARCHAR(20) NOT NULL,
	salary DECIMAL(19, 2) DEFAULT 0,
	hire_date DATE NOT NULL,
	manager_id INT,
	FOREIGN KEY (manager_id) REFERENCES employees(id),
	store_id INT NOT NULL,
	FOREIGN KEY (store_id) REFERENCES stores(id)
);

INSERT INTO products_stores(product_id, store_id)
(
	SELECT
		p.id AS product_id,
		1 AS store_id
	FROM
		products p
	LEFT JOIN
		products_stores ps
	ON
		ps.product_id = p.id
	WHERE
		ps.store_id IS NULL);

UPDATE
	employees e
LEFT JOIN
	stores s
ON
	s.id = e.store_id
SET
	e.manager_id = 3,
	e.salary = e.salary - 500
WHERE
	YEAR(e.hire_date) > 2003
AND
	(s.name != 'Cardguard'
AND
	s.name != 'Veribet');

DELETE
FROM
	employees e
WHERE
	e.manager_id IS NOT NULL
AND
	e.salary >= 6000;

SELECT
	e.first_name,
	e.middle_name,
	e.last_name,
	e.salary,
	e.hire_date
FROM
	employees e
ORDER BY
	e.hire_date DESC;

SELECT
	p.name AS product_name,
	p.price,
	p.best_before,
	CONCAT(SUBSTR(p.description, 1, 10), '...') AS short_description,
	p2.url
FROM products p
LEFT JOIN
	pictures p2
ON
	p2.id = p.picture_id
WHERE
	LENGTH(p.description) > 100
AND
	p.price > 20
AND
	YEAR(p2.added_on) < 2019
ORDER BY
	p.price DESC;

SELECT
	s.name,
	COUNT(ps.product_id) AS product_count,
	ROUND(AVG(p.price), 2) AS avg
FROM
	stores s
LEFT JOIN
	products_stores ps
ON
	ps.store_id = s.id
LEFT JOIN
	products p
ON
	p.id = ps.product_id
GROUP BY s.name
ORDER BY
	product_count DESC,
	avg DESC,
	s.id;

SELECT
	CONCAT_WS(" ", e.first_name, e.last_name) AS Full_name,
	s.name AS Store_name,
	a.name,
	e.salary
FROM
	employees e
LEFT JOIN
	stores s
ON
	s.id = e.store_id
LEFT JOIN
	addresses a
ON
	a.id = s.address_id
WHERE
	e.salary < 4000
AND
	a.name LIKE "%5%"
AND
	LENGTH(s.name) > 8
AND
	RIGHT(e.last_name, 1) = 'n';

SELECT
	REVERSE(s.name) AS reversed_name,
	CONCAT_WS("-", UPPER(t.name), a.name) AS full_address,
	COUNT(e.id) AS employees_count
FROM
	stores s
LEFT JOIN
	employees e
ON
	e.store_id  = s.id
LEFT JOIN
	addresses a
ON
	a.id = s.address_id
LEFT JOIN
	towns t
ON t.id = a.town_id
GROUP BY
	reversed_name, full_address
HAVING
	employees_count >= 1
ORDER BY
	full_address ASC;

DELIMITER $$
CREATE FUNCTION udf_top_paid_employee_by_store(store_name VARCHAR(50))
RETURNS TEXT
DETERMINISTIC
BEGIN
	RETURN (
	SELECT
		CONCAT(
		e.first_name, " ",
		e.middle_name, ". ",
		e.last_name, " works in store for ",
		TIMESTAMPDIFF(YEAR, e.hire_date, '2020-10-18'),
		" years"
		)
	FROM employees e
	LEFT JOIN stores s ON s.id = e.store_id
	WHERE s.name = store_name
	ORDER BY e.salary DESC
	LIMIT 1
	);
END$$

DELIMITER ;

DELIMITER $$
CREATE PROCEDURE udp_update_product_price (address_name VARCHAR (50))
BEGIN
	UPDATE products p
	JOIN products_stores ps ON p.id = ps.product_id
	JOIN stores s ON ps.store_id = s.id
	JOIN addresses a ON s.address_id = a.id
	SET p.price = p.price + (IF(LEFT(a.name, 1) = '0', 100 , 200))
	WHERE a.name = address_name;
END$$

DELIMITER ;































