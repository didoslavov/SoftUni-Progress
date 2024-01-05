-- Active: 1703858659093@@127.0.0.1@3306@soft_uni
/******** 1 ********/
DELIMITER $$
CREATE PROCEDURE usp_get_employees_salary_above_35000()
BEGIN
    SELECT
        e.first_name,
        e.last_name
    FROM
        employees e
    WHERE
        e.salary > 35000
    ORDER BY
        e.first_name,
        e.last_name,
        e.employee_id;
END$$

DELIMITER ;
;

CALL usp_get_employees_salary_above_35000();

/******** 2 ********/

DELIMITER $$
CREATE PROCEDURE usp_get_employees_salary_above(number DECIMAL(10,4))
BEGIN
SELECT
	first_name,
	last_name
FROM
	employees
WHERE
	salary >= number
ORDER BY
	first_name,
	last_name,
	employee_id;
END$$

DELIMITER ;
;

CALL usp_get_employees_salary_above(45000);

/******** 3 ********/

DELIMITER $$
CREATE PROCEDURE usp_get_towns_starting_with(string VARCHAR(50))
BEGIN
	SELECT name AS town_name FROM towns
	WHERE name LIKE CONCAT(string, '%') 
	ORDER BY town_name;
END$$

DELIMITER ;
;

CALL usp_get_towns_starting_with('b');

/******** 4 ********/

DELIMITER $$
CREATE PROCEDURE usp_get_employees_from_town(town VARCHAR(50))
BEGIN
SELECT
	first_name,
	last_name
FROM
	employees e
JOIN addresses a ON
	e.address_id = a.address_id
JOIN towns t ON
	a.town_id = t.town_id
WHERE
	t.name = town
ORDER BY
	e.first_name,
	e.last_name;
END$$
DELIMITER ;
;

CALL usp_get_employees_from_town('');

/******** 5 ********/

DELIMITER $$
CREATE FUNCTION ufn_get_salary_level(salary DECIMAL(10,
2)) RETURNS VARCHAR(20)
RETURN(
CASE
	WHEN salary < 30000 THEN 'Low'
	WHEN salary BETWEEN 30000 AND 50000 THEN 'Average'
	ELSE 'High'
END
);
END$$
DELIMITER ;
;

SELECT
	salary,
	ufn_get_salary_level(salary) AS salary_level
FROM
	employees;

/******** 6 ********/

DELIMITER $$
CREATE PROCEDURE usp_get_employees_by_salary_level(salary_level TEXT)
BEGIN
	SELECT first_name, last_name FROM employees
	WHERE ufn_get_salary_level(salary) = salary_level
	ORDER BY first_name DESC, last_name DESC;
END$$

DELIMITER ;
;

CALL usp_get_employees_by_salary_level('High');

/******** 7 ********/

DELIMITER $$
CREATE FUNCTION ufn_is_word_comprised(set_of_letters varchar(50),
word varchar(50)) RETURNS INT(1)
DETERMINISTIC
BEGIN 
RETURN word REGEXP (CONCAT('^[', set_of_letters, ']+$'));
END$$ 

DELIMITER ;
;

SELECT ufn_is_word_comprised('oistmiahf', 'Sofia') as result

/******** 8 ********/

DELIMITER $$
CREATE PROCEDURE usp_get_holders_full_name()
BEGIN 
	SELECT CONCAT_WS(' ', first_name, last_name) as full_name 
	FROM account_holders
	ORDER BY full_name, id;
END$$ 

DELIMITER ;
;

CALL usp_get_holders_full_name();

/******** 9 ********/

DELIMITER $$
CREATE PROCEDURE usp_get_holders_with_balance_higher_than(target_balance DECIMAL(19,4))
BEGIN
SELECT
	first_name,
	last_name
FROM
	account_holders a
JOIN accounts a2 ON
	a.id = a2.account_holder_id
GROUP BY
	account_holder_id
HAVING
	SUM(a2.balance) > target_balance
ORDER BY
	account_holder_id;
END$$

DELIMITER ;
;

CALL usp_get_holders_with_balance_higher_than (7000);

/******** 10 ********/

DELIMITER $$

CREATE FUNCTION ufn_calculate_future_value(initial_sum DECIMAL(19,4), y_interest_rate DOUBLE, year_number INT)
RETURNS DECIMAL(19,4)
DETERMINISTIC
BEGIN
	RETURN (initial_sum * POW(1 + y_interest_rate, year_number));
END$$

SELECT ufn_calculate_future_value(1000, 0.5, 5);

/******** 11 ********/

DELIMITER $$

CREATE PROCEDURE usp_calculate_future_value_for_account(account_id INT(11), rate DECIMAL(19,4))
BEGIN
	SELECT
		a.id AS 'account_id',
		ah.first_name,
		ah.last_name,
		a.balance AS 'current_balance',
		ufn_calculate_future_value(a.balance, rate, 5) AS 'balance_in_5_years'
	FROM
		account_holders ah
	JOIN accounts a ON
		ah.id = a.account_holder_id
	WHERE a.id = account_id;
END$$

CALL usp_calculate_future_value_for_account(1, 0.1);

/******** 12 ********/

DELIMITER $$

CREATE PROCEDURE usp_deposit_money(account_id INT, money_amount DECIMAL(19,4))
BEGIN
	START TRANSACTION;

		IF money_amount <= 0 THEN ROLLBACK;
		ELSE
			UPDATE accounts SET balance = balance + money_amount
			WHERE id = account_id;
		END IF;
	COMMIT;

END$$

CALL usp_deposit_money(1, 10);
SELECT * FROM accounts WHERE id = 1;

/******** 13 ********/


DELIMITER $$

CREATE PROCEDURE usp_withdraw_money(account_id INT, money_amount DECIMAL(19,4))
BEGIN
	
	START TRANSACTION;
		IF (money_amount <= 0 OR (SELECT balance FROM accounts WHERE id = account_id) < money_amount) THEN ROLLBACK;
		ELSE
			UPDATE accounts SET balance = balance - money_amount WHERE id = account_id;
		END IF;
	COMMIT;
	
END$$

CALL usp_withdraw_money(1, 10);
SELECT * FROM accounts a WHERE id = 1;

/******** 14 ********/

DELIMITER $$

CREATE PROCEDURE usp_transfer_money(from_account_id INT, to_account_id INT, amount DECIMAL(19,4))
BEGIN
	START TRANSACTION;
		IF from_account_id NOT IN (SELECT id FROM accounts) THEN ROLLBACK;
		ELSEIF to_account_id NOT IN (SELECT id FROM accounts) THEN ROLLBACK;
		ELSEIF from_account_id = to_account_id THEN ROLLBACK;
		ELSEIF amount <= 0 THEN ROLLBACK;
		ELSEIF (SELECT balance FROM accounts WHERE id = from_account_id) < amount THEN ROLLBACK;
		ELSE
			UPDATE accounts SET balance = balance - amount WHERE id = from_account_id;
			UPDATE accounts SET balance	= balance + amount WHERE id = to_account_id;
		END IF;
	COMMIT;
END$$

SELECT * FROM accounts a WHERE id IN (1,2);
CALL usp_transfer_money(1, 2, 10);

/******** 15 ********/


CREATE TABLE logs(
	log_id INT PRIMARY KEY AUTO_INCREMENT, 
	account_id INT, 
	old_sum DECIMAL(19,4), 
	new_sum DECIMAL(19,4)
);

DELIMITER $$

CREATE TRIGGER tr_update_balance
AFTER UPDATE
ON accounts
FOR EACH ROW 
BEGIN 
	
	INSERT INTO logs(
		account_id,
		old_sum,
		new_sum)
	VALUES (
		OLD.id,
		OLD.balance,
		NEW.balance);
END$$


CALL usp_deposit_money(1, 10);

/******** 16 ********/

CREATE TABLE notification_emails(
	id INT PRIMARY KEY AUTO_INCREMENT, 
	recipient INT NOT NULL, 
	subject TEXT, 
	body TEXT
);

CREATE TABLE logs(
	log_id INT PRIMARY KEY AUTO_INCREMENT, 
	account_id INT, 
	old_sum DECIMAL(19,4), 
	new_sum DECIMAL(19,4)
);

DELIMITER $$

CREATE TRIGGER tr_update_balance
AFTER UPDATE
ON accounts
FOR EACH ROW 
BEGIN 
	
	INSERT INTO logs(
		account_id,
		old_sum,
		new_sum)
	VALUES (
		OLD.id,
		OLD.balance,
		NEW.balance);
END$$

CREATE TRIGGER tr_new_record_to_email
AFTER INSERT
ON logs
FOR EACH ROW
BEGIN
	INSERT INTO notification_emails(
		recipient,
		subject,
		body)
	VALUES (
		NEW.account_id,
		CONCAT('Balance change for account: ', NEW.account_id),
		CONCAT('On ', NOW(), ' your balance was changed from ', NEW.old_sum, ' to ', NEW.new_sum, '.')
	);
END$$

CALL usp_deposit_money(1, 10);