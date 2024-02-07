 
CREATE SCHEMA online_store;

USE online_store;

CREATE TABLE brands(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE categories(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE reviews(
	id INT PRIMARY KEY AUTO_INCREMENT,
	content TEXT,
	rating DECIMAL(10,2) NOT NULL,
	picture_url VARCHAR(80) NOT NULL,
	published_at DATETIME NOT NULL
);

CREATE TABLE products(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40) NOT NULL,
	price DECIMAL(19, 2) NOT NULL,
	quantity_in_stock INT,
	description TEXT,
	brand_id INT NOT NULL,
	FOREIGN KEY (brand_id) REFERENCES brands(id),
	category_id INT NOT NULL,
	FOREIGN KEY (category_id) REFERENCES categories(id),
	review_id INT,
	FOREIGN KEY (review_id) REFERENCES reviews(id)
);

CREATE TABLE customers(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	phone VARCHAR(30) NOT NULL UNIQUE,
	address VARCHAR(60) NOT NULL,
	discount_card BIT(1) DEFAULT FALSE
);

CREATE TABLE orders(
	id INT PRIMARY KEY AUTO_INCREMENT,
	order_datetime DATETIME NOT NULL,
	customer_id INT NOT NULL,
	FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE orders_products(
	order_id INT,
	product_id INT,
	FOREIGN KEY (order_id) REFERENCES orders(id),
	FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO reviews(content, picture_url, published_at,rating)
(
	SELECT 
		LEFT(p.description, 15),
		REVERSE(p.name),
		"2010-10-10",
		p.price / 8
	FROM products p
	WHERE p.id >= 5
);

UPDATE products 
SET quantity_in_stock = quantity_in_stock - 5
WHERE quantity_in_stock BETWEEN 60 AND 70;

DELETE c 
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
WHERE o.customer_id IS NULL;

SELECT
	c.id, c.name
FROM
	categories c 
ORDER BY c.name DESC;

SELECT 
	p.id, p.brand_id, p.name, p.quantity_in_stock
FROM 
	products p 
WHERE 
	p.price > 1000 AND quantity_in_stock < 30
ORDER BY
	quantity_in_stock, id;

SELECT
	*
FROM
	reviews r
WHERE 
	r.content LIKE 'My%'
AND 
	LENGTH(r.content) > 61
ORDER BY 
	r.rating DESC;

SELECT 
	CONCAT_WS(" ", c.first_name, c.last_name) AS full_name,
	c.address,
	o.order_datetime AS order_date
FROM 
	customers c 
LEFT JOIN
	orders o ON o.customer_id = c.id
WHERE 
	YEAR(o.order_datetime) <= 2018
ORDER BY full_name DESC;

SELECT 
	COUNT(p.id) AS items_count,
	c.name,
	SUM(p.quantity_in_stock) AS total_quantity
FROM categories c 
LEFT JOIN products p ON p.category_id = c.id
GROUP BY c.id
ORDER BY items_count DESC, total_quantity
LIMIT 5;

DELIMITER $$
CREATE FUNCTION udf_customer_products_count(name VARCHAR(30))
RETURNS INT
DETERMINISTIC
	BEGIN
		RETURN (SELECT 
		COUNT(op.order_id) AS total_products 
		FROM customers c 
		JOIN orders o ON o.customer_id = c.id
		JOIN orders_products op ON op.order_id = o.id
		WHERE c.first_name = name
	);
	END$$

DELIMITER ;
	
SELECT c.first_name,c.last_name, udf_customer_products_count('Shirley') as `total_products` FROM customers c
WHERE c.first_name = 'Shirley';

DELIMITER $$
	CREATE PROCEDURE udp_reduce_price(category_name VARCHAR(50))
	BEGIN 
		UPDATE products p
		LEFT JOIN categories c ON p.category_id = c.id
		LEFT JOIN reviews r ON p.review_id = r.id
		SET p.price = p.price * 0.7
		WHERE r.rating < 4 AND c.name = category_name;
	END$$
	
DELIMITER ;

CALL udp_reduce_price ('Phones and tablets');




















