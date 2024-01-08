 CREATE SCHEMA universities;
USE universities;

CREATE TABLE countries(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE cities(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40) NOT NULL UNIQUE,
	population INT,
	country_id INT NOT NULL,
	FOREIGN KEY (country_id) REFERENCES countries(id)
);

CREATE TABLE universities(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(60) NOT NULL UNIQUE,
	address VARCHAR(80) NOT NULL UNIQUE,
	tuition_fee DECIMAL(19,2) NOT NULL,
	number_of_staff INT,
	city_id INT,
	FOREIGN KEY (city_id) REFERENCES cities(id)
);

CREATE TABLE students(
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(40) NOT NULL,
	last_name VARCHAR(40) NOT NULL,
	age INT,
	phone VARCHAR(20) NOT NULL UNIQUE,
	email VARCHAR(255) NOT NULL UNIQUE,
	is_graduated TINYINT(1) NOT NULL,
	city_id INT,
	FOREIGN KEY (city_id) REFERENCES cities(id)
);

CREATE TABLE courses(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40) NOT NULL UNIQUE,
	duration_hours DECIMAL(19,2),
	start_date DATE,
	teacher_name VARCHAR(60) NOT NULL UNIQUE,
	description TEXT,
	university_id INT,
	FOREIGN KEY (university_id) REFERENCES universities(id)
);

CREATE TABLE students_courses(
	grade DECIMAL(19,2) NOT NULL,
	student_id INT NOT NULL,
	course_id INT NOT NULL,
	FOREIGN KEY (student_id) REFERENCES students(id),
	FOREIGN KEY (course_id) REFERENCES courses(id)
);

INSERT
	INTO
	courses(name,
	duration_hours,
	start_date,
	teacher_name,
	description,
	university_id)
SELECT
	CONCAT_WS(' ', teacher_name, 'course'),
	CHAR_LENGTH(name) / 10,
	DATE_ADD(start_date, INTERVAL 5 DAY),
	REVERSE(teacher_name),
	CONCAT('Course ', teacher_name, REVERSE(description)),
	DAY(start_date)
FROM courses
WHERE id <= 5;

UPDATE universities 
SET tuition_fee = tuition_fee + 300
WHERE id BETWEEN 5 AND 12;

DELETE FROM
	universities
WHERE
	number_of_staff IS NULL;

SELECT * FROM cities
ORDER BY population DESC;

SELECT
	first_name,
	last_name,
	age,
	phone,
	email
FROM
	students
WHERE age >= 21
ORDER BY first_name DESC, email, id 
LIMIT 10;

SELECT 
CONCAT_WS(' ', first_name, last_name) AS full_name,
SUBSTR(email, 2, 10) AS username,
REVERSE(phone) AS password
FROM students s
LEFT JOIN students_courses sc ON s.id = sc.student_id
WHERE sc.course_id IS NULL
ORDER BY password DESC;

SELECT
	COUNT(s.id) AS students_count,
	u.name AS university_name
FROM
	students s
JOIN students_courses sc ON
	sc.student_id = s.id
JOIN courses c ON
	sc.course_id = c.id
JOIN universities u ON
	c.university_id = u.id
GROUP BY
	u.name
HAVING students_count >= 8
ORDER BY students_count DESC, university_name DESC;

SELECT
	u.name AS university_name,
	c.name AS city_name,
	u.address,
	(CASE 
		WHEN u.tuition_fee < 800 THEN 'cheap'
		WHEN u.tuition_fee >= 800 AND u.tuition_fee < 1200 THEN 'normal'
		WHEN u.tuition_fee >= 1200 AND u.tuition_fee < 2500 THEN 'high'
		ELSE 'expensive'
	END) AS price_rank,
	u.tuition_fee
FROM
	universities u
JOIN cities c ON
	u.city_id = c.id
ORDER BY u.tuition_fee;

DELIMITER $$
CREATE FUNCTION udf_average_alumni_grade_by_course_name(course_name VARCHAR(60))
RETURNS DECIMAL(19,
2)
DETERMINISTIC
BEGIN
	RETURN (
SELECT
	AVG(sc.grade)
FROM
	students s
JOIN students_courses sc ON
	sc.student_id = s.id
JOIN courses c ON
	sc.course_id = c.id
WHERE
	s.is_graduated = 1
	AND c.name = course_name
);
END$$

DELIMITER ;

DELIMITER $$
CREATE PROCEDURE udp_graduate_all_students_by_year(year_started INT)
BEGIN 
	UPDATE
	students s
JOIN students_courses sc ON
	sc.student_id = s.id
JOIN courses c ON
	sc.course_id = c.id
SET
	s.is_graduated = 1
WHERE
	YEAR(c.start_date) = 2017;
END$$

DELIMITER ;










