 
CREATE SCHEMA ruk_database;

USE ruk_database;

CREATE TABLE branches(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE employees(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(20) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	salary DECIMAL(10, 2) NOT NULL,
	started_on DATE NOT NULL,
	branch_id INT NOT NULL,
	FOREIGN KEY (branch_id) REFERENCES branches(id)
);

CREATE TABLE clients(
	id INT PRIMARY KEY AUTO_INCREMENT,
	full_name VARCHAR(50) NOT NULL,
	age INT NOT NULL
);

CREATE TABLE employees_clients(
	employee_id INT,
	client_id INT,
	FOREIGN KEY (employee_id) REFERENCES employees(id),
	FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE bank_accounts(
	id INT PRIMARY KEY AUTO_INCREMENT,
	account_number VARCHAR(10) NOT NULL,
	balance DECIMAL(10, 2) NOT NULL,
	client_id INT NOT NULL UNIQUE,
	FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE cards(
	id INT PRIMARY KEY AUTO_INCREMENT,
	card_number VARCHAR(19) NOT NULL,
	card_status VARCHAR(7) NOT NULL,
	bank_account_id INT NOT NULL,
	FOREIGN KEY (bank_account_id) REFERENCES bank_accounts(id)
);

INSERT INTO cards (card_number, card_status, bank_account_id)
(
	SELECT
		REVERSE(c.full_name),
		"Active",
		c.id
	FROM clients c
	WHERE c.id BETWEEN 191 AND 200
);

UPDATE
    employees_clients AS ec
JOIN (
    SELECT
        employee_id
    FROM
        employees_clients
    GROUP BY
        employee_id
    ORDER BY
        COUNT(client_id),
        employee_id
    LIMIT 1
) AS sq ON
    ec.client_id = ec.employee_id
SET
    ec.employee_id = sq.employee_id;


DELETE FROM employees
WHERE id NOT IN (
	SELECT employee_id
	FROM employees_clients
);

SELECT id, full_name
FROM clients
ORDER BY id;

SELECT
	e.id,
	CONCAT_WS(" ", e.first_name, e.last_name) AS full_name,
	CONCAT("$", e.salary) AS salary,
	e.started_on
FROM employees e
WHERE e.salary >= 100000 AND e.started_on >= "2018-01-01"
ORDER BY e.salary DESC, e.id;

SELECT
	c2.id,
	CONCAT(c2.card_number, " : ", c.full_name) AS card_token
FROM clients c
LEFT JOIN bank_accounts ba ON ba.client_id = c.id
LEFT JOIN cards c2 ON c2.bank_account_id = ba.id
ORDER BY c2.id DESC;

SELECT
	CONCAT_WS(" ", e.first_name, e.last_name) AS name,
	e.started_on,
	COUNT(c.id) AS count_of_clients
FROM employees e
LEFT JOIN employees_clients ec ON ec.employee_id = e.id
LEFT JOIN clients c ON c.id = ec.client_id
GROUP BY name, e.started_on, e.id
ORDER BY count_of_clients DESC, e.id
LIMIT 5;

SELECT
	b.name,
	COUNT(c2.card_number) AS count_of_cards
FROM branches b
LEFT JOIN employees e ON e.branch_id = b.id
LEFT JOIN employees_clients ec ON ec.employee_id = e.id
LEFT JOIN clients c ON c.id = ec.client_id
LEFT JOIN bank_accounts ba ON ba.client_id = c.id
LEFT JOIN cards c2 ON c2.bank_account_id = ba.id
GROUP BY b.name
ORDER BY count_of_cards DESC, b.name;

DELIMITER $$
CREATE FUNCTION udf_client_cards_count(name VARCHAR(30))
RETURNS INT
DETERMINISTIC
BEGIN
	RETURN (SELECT
		COUNT(c.id)
	FROM cards c
	LEFT JOIN bank_accounts ba ON ba.id = c.bank_account_id
	LEFT JOIN clients c2 ON c2.id = ba.client_id
	WHERE c2.full_name = name);
END$$

DELIMITER ;

DELIMITER $$
CREATE PROCEDURE udp_clientinfo(full_name VARCHAR(50))
BEGIN
	SELECT
		c.full_name,
		c.age,
		ba.account_number,
		CONCAT("$",ba.balance) AS balance
	FROM clients c
	LEFT JOIN bank_accounts ba ON ba.client_id = c.id
	WHERE c.full_name = full_name;
END$$

DELIMITER ;
