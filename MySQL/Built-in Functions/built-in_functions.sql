use soft_uni;

SELECT
	*
FROM
	employees;

/******** 1 ********/
SELECT
	first_name,
	last_name
FROM
	employees
WHERE
	first_name LIKE 'Sa%'
ORDER BY
	employee_id;

/******** 2 ********/
SELECT
	first_name,
	last_name
FROM
	employees
WHERE
	last_name LIKE '%ei%'
ORDER BY
	employee_id;

/******** 3 ********/
SELECT
	first_name
FROM
	employees
WHERE
	department_id IN (3, 10)
	AND YEAR (hire_date) BETWEEN 1995 AND 2005
ORDER BY
	employee_id;

/******** 4 ********/
SELECT
	first_name,
	last_name
FROM
	employees
WHERE
	job_title NOT LIKE '%engineer%'
ORDER BY
	employee_id;

/******** 5 ********/
SELECT
	name
FROM
	towns
WHERE
	CHAR_LENGTH(name) IN (5, 6)
ORDER BY
	name;

/******** 6 ********/
SELECT
	town_id,
	name
FROM
	towns
WHERE
	LEFT (name, 1) IN ('M', 'K', 'B', 'E')
ORDER BY
	name;

/******** 7 ********/
SELECT
	town_id,
	name
FROM
	towns
WHERE
	LEFT (name, 1) NOT IN ('R', 'B', 'D')
ORDER BY
	name;

/******** 8 ********/
CREATE VIEW
	v_employees_hired_after_2000 AS
SELECT
	first_name,
	last_name
from
	employees
WHERE
	YEAR (hire_date) > 2000;

SELECT
	*
FROM
	v_employees_hired_after_2000;

/******** 9 ********/
SELECT
	first_name,
	last_name
FROM
	employees
WHERE
	CHARACTER_LENGTH(last_name) = 5;

/******** 10 ********/
use geography;

SELECT
	country_name,
	iso_code
FROM
	countries
WHERE
	country_name LIKE '%a%a%a%'
ORDER BY
	iso_code;

/******** 11 ********/
SELECT
	peak_name,
	river_name,
	CONCAT (LOWER(peak_name), LOWER(SUBSTR (river_name, 2))) as 'mix'
FROM
	peaks,
	rivers
WHERE
	RIGHT (peak_name, 1) = LEFT (river_name, 1)
ORDER BY
	mix;

/******** 12 ********/
use diablo;

SELECT
	name,
	DATE_FORMAT (start, '%Y-%m-%d') as start
FROM
	games
WHERE
	YEAR (start) BETWEEN 2011 AND 2012
ORDER BY
	start,
	name
LIMIT
	50;

/******** 13 ********/
SELECT
	user_name,
	SUBSTRING(
		email
		FROM
			INSTR (email, '@') + 1
	) AS 'email provider'
FROM
	users
ORDER BY
	`email provider`,
	user_name;

/******** 14 ********/
SELECT
	user_name,
	ip_address
from
	users
WHERE
	ip_address LIKE '___.1%.%.___'
ORDER BY
	user_name;

/******** 15 ********/
SELECT
	`name` AS 'game',
	CASE
		WHEN HOUR (`start`) >= 0
		AND HOUR (`start`) < 12 THEN 'Morning'
		WHEN HOUR (`start`) >= 12
		AND HOUR (`start`) < 18 THEN 'Afternoon'
		WHEN HOUR (`start`) >= 18
		AND HOUR (`start`) < 24 THEN 'Evening'
	END AS 'Extra Short',
	CASE
		WHEN `duration` <= 3 THEN 'Extra Short'
		WHEN `duration` > 3
		AND `duration` <= 6 THEN 'Short'
		WHEN `duration` > 6
		AND `duration` <= 10 THEN 'Long'
		WHEN `duration` > 10
		OR `duration` IS NULL THEN 'Extra Long'
	END AS 'Duration'
FROM
	games;

/******** 16 ********/
SELECT
	product_name,
	order_date,
	DATE_ADD (order_date, INTERVAL 3 DAY) AS 'pay_due',
	DATE_ADD (order_date, INTERVAL 1 MONTH) AS 'pay_due'
FROM
	orders;