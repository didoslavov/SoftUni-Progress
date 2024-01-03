-- Active: 1703858659093@@127.0.0.1@3306@soft_uni
USE soft_uni;

/******** 1 ********/
SELECT
    e.employee_id,
    e.job_title,
    e.address_id,
    a.address_text
FROM
    employees AS e
    JOIN addresses AS a ON e.address_id = a.address_id
ORDER BY
    a.address_id ASC
LIMIT
    5;

/******** 2 ********/
SELECT
    e.first_name,
    e.last_name,
    t.name AS town,
    a.address_text
FROM
    employees AS e
    JOIN addresses AS a ON e.address_id = a.address_id
    JOIN towns AS t ON t.town_id = a.town_id
ORDER BY
    first_name,
    last_name
LIMIT
    5;

/******** 3 ********/
SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    d.name AS department_name
FROM
    employees AS e
    JOIN departments AS d ON e.department_id = d.department_id
WHERE
    d.name = 'Sales'
ORDER BY
    e.employee_id DESC;

/******** 4 ********/
SELECT
    e.employee_id,
    e.first_name,
    e.salary,
    d.name AS department_name
FROM
    employees AS e
    JOIN departments AS d ON e.department_id = d.department_id
WHERE
    e.salary > 15000
ORDER BY
    d.department_id DESC
LIMIT
    5;

/******** 5 ********/
SELECT
    e.employee_id,
    e.first_name
FROM
    employees AS e
    LEFT JOIN employees_projects AS ep ON e.employee_id = ep.employee_id
    AND ep.project_id IS NULL
ORDER BY
    employee_id DESC
LIMIT
    3;

/******** 6 ********/
SELECT
    e.first_name,
    e.last_name,
    e.hire_date,
    d.name AS dept_name
FROM
    employees AS e
    JOIN departments AS d ON e.department_id = d.department_id
WHERE
    DATE (e.hire_date) > '1999-01-01'
    AND d.name IN ('Sales', 'Finance')
ORDER BY
    hire_date ASC;

/******** 7 ********/
SELECT
    e.employee_id,
    e.first_name,
    p.name AS project_name
FROM
    employees AS e
    JOIN employees_projects AS ep ON e.employee_id = ep.employee_id
    JOIN projects AS p ON ep.project_id = p.project_id
WHERE
    DATE (p.start_date) > '2002-08-13'
    AND p.end_date IS NULL
ORDER BY
    first_name,
    project_name
LIMIT
    5;

/******** 8 ********/
SELECT
    e.employee_id,
    e.first_name,
    IF (YEAR (p.start_date) >= 2005, NULL, p.name) AS project_name
FROM
    employees AS e
    JOIN employees_projects AS ep ON e.employee_id = ep.employee_id
    JOIN projects AS p ON ep.project_id = p.project_id
WHERE
    e.employee_id = 24
ORDER BY
    project_name;

/******** 9 ********/
SELECT
    e.employee_id,
    e.first_name,
    e2.employee_id AS manager_id,
    e2.first_name AS manager_name
FROM
    employees e
    JOIN employees e2 ON e.manager_id = e2.employee_id
WHERE
    e.manager_id IN (3, 7)
ORDER BY
    e.first_name;

/******** 10 ********/
SELECT
    e.employee_id,
    CONCAT_WS (' ', e.first_name, e.last_name) employee_name,
    CONCAT_WS (' ', e2.first_name, e2.last_name) manager_name,
    d.name department_name
FROM
    employees e
    JOIN employees e2 ON e.manager_id = e2.employee_id
    JOIN departments d ON e.department_id = d.department_id
ORDER BY
    employee_id
LIMIT
    5;

/******** 11 ********/
SELECT
    AVG(salary) as min_average_salary
FROM
    employees e
GROUP BY
    e.department_id
ORDER BY
    min_average_salary
LIMIT
    1;

/******** 12 ********/
SELECT
    c.country_code,
    m.mountain_range,
    p.peak_name,
    p.elevation
FROM
    countries c
    JOIN mountains_countries mc ON c.country_code = mc.country_code
    JOIN mountains m ON mc.mountain_id = m.id
    JOIN peaks p ON m.id = p.mountain_id
WHERE
    c.country_code = 'BG'
    AND p.elevation > 2836
ORDER BY
    elevation DESC;

/******** 13 ********/
SELECT
    c.country_code,
    COUNT(m.mountain_range) mountain_range
FROM
    countries c
    JOIN mountains_countries mc ON c.country_code = mc.country_code
    JOIN mountains m ON mc.mountain_id = m.id
WHERE
    c.country_code IN ('BG', 'US', 'RU')
GROUP BY
    country_code
ORDER BY
    mountain_range DESC;

/******** 14 ********/
SELECT
    c.country_name,
    r.river_name
FROM
    countries c
    LEFT JOIN countries_rivers cr ON c.country_code = cr.country_code
    LEFT JOIN rivers r ON cr.river_id = r.id
WHERE
    c.continent_code = 'AF'
ORDER BY
    c.country_name
LIMIT
    5;

/******** 15 ********/
SELECT
    c.continent_code,
    c.currency_code,
    COUNT(*) AS 'currency_usage'
FROM
    countries c
GROUP BY
    c.continent_code,
    c.currency_code
HAVING
    currency_usage > 1
    AND currency_usage = (
        SELECT
            COUNT(*) AS 'most_used_curr'
        FROM
            countries c2
        WHERE
            c2.continent_code = c.continent_code
        GROUP BY
            c2.currency_code
        ORDER BY
            most_used_curr DESC
        LIMIT
            1
    )
ORDER BY
    c.continent_code,
    c.currency_code;

/******** 16 ********/
SELECT
    COUNT(*) country_count
FROM
    countries c
    LEFT JOIN mountains_countries mc ON c.country_code = mc.country_code
    LEFT JOIN mountains m ON mc.mountain_id = m.id
WHERE
    m.id IS NULL;

/******** 17 ********/
SELECT
    c.country_name,
    MAX(p.elevation) AS 'highest_peak_elevation',
    MAX(r.length) AS 'longest_river_length'
FROM
    countries c
    LEFT JOIN mountains_countries mc USING (country_code)
    LEFT JOIN peaks p USING (mountain_id)
    LEFT JOIN countries_rivers cr USING (country_code)
    LEFT JOIN rivers r ON cr.river_id = r.id
GROUP BY
    c.country_name
ORDER BY
    highest_peak_elevation DESC,
    longest_river_length DESC,
    c.country_name
LIMIT
    5;