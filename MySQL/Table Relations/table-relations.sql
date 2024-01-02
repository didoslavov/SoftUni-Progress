/******** 1 ********/ CREATE DATABASE one_to_one;

use one_to_one;

CREATE TABLE
    people (
        person_id INT PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(20) NOT NULL,
        salary DECIMAL(10, 2) DEFAULT 0,
        passport_id INT UNIQUE
    );

CREATE TABLE
    passports (
        passport_id INT PRIMARY KEY AUTO_INCREMENT,
        passport_number VARCHAR(10) UNIQUE NOT NULL
    );

ALTER TABLE people ADD CONSTRAINT fk_people_passport_ids FOREIGN KEY (passport_id) REFERENCES passports (passport_id);

INSERT INTO
    passports (passport_id, passport_number)
VALUES
    (101, 'N34FG21B'),
    (102, 'K65LO4R7'),
    (103, 'ZE657QP2');

INSERT INTO
    people (first_name, salary, passport_id)
VALUES
    ('Roberto', 43300.00, 102),
    ('Tom', 56100.00, 103),
    ('Yana', 60200.00, 101);

/******** 2 ********/
CREATE DATABASE one_to_many;

USE one_to_many;

CREATE TABLE
    manufacturers (
        `manufacturer_id` INT PRIMARY KEY AUTO_INCREMENT,
        `name` VARCHAR(30),
        `established_on` DATE
    );

CREATE TABLE
    models (
        `model_id` INT PRIMARY KEY AUTO_INCREMENT,
        `name` VARCHAR(30),
        `manufacturer_id` INT,
        CONSTRAINT fk_models_manufacturer_id FOREIGN KEY (manufacturer_id) REFERENCES manufacturers (manufacturer_id)
    );

ALTER TABLE models AUTO_INCREMENT = 101;

INSERT INTO
    manufacturers (`name`, `established_on`)
VALUES
    ('BMW', '1916-03-01'),
    ('Tesla', '2003-01-01'),
    ('Lada', '1966-05-01');

INSERT INTO
    models (`name`, `manufacturer_id`)
VALUES
    ('X1', 1),
    ('i6', 1),
    ('Model S', 2),
    ('Model X', 2),
    ('Model 3', 2),
    ('Nova', 3);

/******** 3 ********/
CREATE DATABASE many_to_many;

USE many_to_many;

CREATE TABLE
    students (
        student_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(20)
    );

INSERT INTO
    students (name)
VALUES
    ('Mila'),
    ('Toni'),
    ('Ron');

CREATE TABLE
    exams (
        exam_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50)
    );

ALTER TABLE exams AUTO_INCREMENT = 101;

INSERT INTO
    exams (name)
VALUES
    ('Spring MVC'),
    ('Neo4j'),
    ('Oracle 11g');

CREATE TABLE
    students_exams (
        student_id INT,
        exam_id INT,
        CONSTRAINT pk_students_exams PRIMARY KEY (student_id, exam_id),
        CONSTRAINT fk_students_exams FOREIGN KEY (student_id) REFERENCES students (student_id),
        CONSTRAINT fk_exams_students FOREIGN KEY (exam_id) REFERENCES exams (exam_id)
    );

INSERT INTO
    students_exams (student_id, exam_id)
VALUES
    (1, 101),
    (1, 102),
    (2, 101),
    (3, 103),
    (2, 102),
    (2, 103);

/******** 4 ********/
CREATE DATABASE self_referencing;

USE self_referencing;

CREATE TABLE
    teachers (
        teacher_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(20),
        manager_id INT
    );

ALTER TABLE teachers AUTO_INCREMENT = 101;

INSERT INTO
    teachers (name, manager_id)
VALUES
    ('John', NULL),
    ('Maya', 106),
    ('Silvia', 106),
    ('Ted', 105),
    ('Mark', 101),
    ('Greta', 101);

ALTER TABLE teachers ADD CONSTRAINT fk_manager_teacher FOREIGN KEY (manager_id) REFERENCES teachers (teacher_id);

/******** 5 ********/
CREATE DATABASE store;

USE store;

CREATE TABLE
    cities (
        city_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50)
    );

CREATE TABLE
    customers (
        customer_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50),
        birthday DATE,
        city_id INT,
        CONSTRAINT fk_customers_cities FOREIGN KEY (city_id) REFERENCES cities (city_id)
    );

CREATE TABLE
    orders (
        order_id INT PRIMARY KEY AUTO_INCREMENT,
        customer_id INT,
        CONSTRAINT fk_orders_customers FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
    );

CREATE TABLE
    item_types (
        item_type_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50)
    );

CREATE TABLE
    items (
        item_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50),
        item_type_id INT,
        CONSTRAINT fk_items_item_types FOREIGN KEY (item_type_id) REFERENCES item_types (item_type_id)
    );

CREATE TABLE
    order_items (
        order_id INT,
        item_id INT,
        CONSTRAINT pk_order_items PRIMARY KEY (order_id, item_id),
        CONSTRAINT fk_order_items_order FOREIGN KEY (order_id) REFERENCES orders (order_id),
        CONSTRAINT fk_order_items_items FOREIGN KEY (item_id) REFERENCES items (item_id)
    );

/******** 6 ********/
CREATE DATABASE university;

USE university;

CREATE TABLE
    majors (
        major_id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50)
    );

CREATE TABLE
    students (
        student_id INT PRIMARY KEY AUTO_INCREMENT,
        student_number VARCHAR(12),
        student_name VARCHAR(50),
        major_id INT,
        CONSTRAINT fk_students_majors FOREIGN KEY (major_id) REFERENCES majors (major_id)
    );

CREATE TABLE
    payments (
        payment_id INT PRIMARY KEY AUTO_INCREMENT,
        payment_date DATE,
        payment_amount DECIMAL(8, 2),
        student_id INT,
        CONSTRAINT fk_payments_students FOREIGN KEY (student_id) REFERENCES students (student_id)
    );

CREATE TABLE
    subjects (
        subject_id INT PRIMARY KEY AUTO_INCREMENT,
        subject_name VARCHAR(50)
    );

CREATE TABLE
    agenda (
        student_id INT,
        subject_id INT,
        CONSTRAINT pk_agenda PRIMARY KEY (student_id, subject_id),
        CONSTRAINT fk_agenda_subjects FOREIGN KEY (subject_id) REFERENCES subjects (subject_id),
        CONSTRAINT fk_agenda_students FOREIGN KEY (student_id) REFERENCES students (student_id)
    );

/******** 7 ********/
/******** 8 ********/
/******** 9 ********/
USE geography;

SELECT
    m.mountain_range,
    p.peak_name,
    p.elevation AS 'peak_elevation'
FROM
    mountains AS m
    JOIN peaks AS p ON m.id = p.mountain_id
WHERE
    m.mountain_range = 'Rila'
ORDER BY
    peak_elevation DESC;