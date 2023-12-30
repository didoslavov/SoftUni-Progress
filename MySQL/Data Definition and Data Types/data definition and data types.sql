*********** 1 ***********

CREATE TABLE minions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(47),
    age INT
);

CREATE TABLE towns (
    town_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(47)
);

*********** 2***********

ALTER TABLE minions
ADD COLUMN town_id INT;

ALTER TABLE minions
ADD CONSTRAINT fk_minions_town
FOREIGN KEY minions(town_id)
REFERENCES towns(id);

*********** 3***********

INSERT INTO towns (id, name)
VALUES (1, 'Sofia'),
 (2, 'Plovdiv'),
 (3, 'Varna');
INSERT INTO minions (id, `name`, age, town_id)
VALUES(1, 'Kevin', 22, 1),
(2, 'Bob', 15, 3),
(3, 'Steward', NULL, 2);

*********** 4***********

TRUNCATE minions;

*********** 5***********

DROP TABLE minions;
DROP TABLE towns;

*********** 6***********

CREATE TABLE people(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(200) NOT NULL,
picture BLOB,
height DOUBLE(2, 2),
weight DOUBLE(2, 2),
gender CHAR NOT NULL,
birthdate DATE NOT NULL,
biography VARCHAR(247)
);

INSERT INTO people (id, name, gender, birthdate)
VALUES (1, 'test', 'm', NOW()),
(2, 'test', 'm', NOW()),
(3, 'test', 'm', NOW()),
(4, 'test', 'm', NOW()),
(5, 'test', 'm', NOW());

*********** 7**********

CREATE TABLE users(
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(30) NOT NULL,
password VARCHAR(26) NOT NULL,
profile_picture BLOB,
last_login_time DATETIME,
is_deleted BOOLEAN
);

INSERT INTO users (id, username, password)
VALUES (1, 'test', '1234'),
(2, 'test', '1234'),
(3, 'test', '1234'),
(4, 'test', '1234'),
(5, 'test', '1234');

*********** 8***********

ALTER TABLE users
DROP PRIMARY KEY,
ADD CONSTRAINT pk_users2
PRIMARY KEY users(id, username);

*********** 9**********

ALTER TABLE users
CHANGE COLUMN last_login_time
last_login_time DATETIME DEFAULT NOW();

*********** 10***********

ALTER TABLE users
DROP PRIMARY KEY,
ADD CONSTRAINT pk_users
PRIMARY KEY users(id),
CHANGE COLUMN username
username VARCHAR(30) UNIQUE;

*********** 11 ***********

CREATE DATABASE Movies
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE directors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    director_name VARCHAR(50) NOT NULL,
    notes VARCHAR(200)
);

INSERT INTO directors (director_name)
VALUES ('test'),
('test'),
('test'),
('test'),
('test');

CREATE TABLE genres (
     id INT PRIMARY KEY AUTO_INCREMENT,
    genre_name VARCHAR(50) NOT NULL,
    notes VARCHAR(200)
);

INSERT INTO genres (genre_name)
VALUES ('test'),
('test'),
('test'),
('test'),
('test');

CREATE TABLE categories (
     id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL,
    notes VARCHAR(200)
);

INSERT INTO categories (category_name)
VALUES ('test'),
('test'),
('test'),
('test'),
('test');

CREATE TABLE movies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
     director_id INT,
      copyright_year YEAR ,
      length DOUBLE(10, 2),
      genre_id INT,
      category_id INT,
      rating DOUBLE(3, 2),
      notes VARCHAR(200)
);

INSERT INTO movies (title)
VALUES ('test'),
('test'),
('test'),
('test'),
('test');

*********** 12***********

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(20) NOT NULL,
    daily_rate DOUBLE NOT NULL,
    weekly_rate DOUBLE NOT NULL,
    monthly_rate DOUBLE NOT NULL,
    weekend_rate DOUBLE NOT NULL
    );

INSERT INTO categories (category, daily_rate, weekly_rate, monthly_rate, weekend_rate)
VALUES('test', 20.22, 10.23, 8.43, 50.23),
('test', 20.22, 10.23, 8.43, 50.23),
('test', 20.22, 10.23, 8.43, 50.23);

CREATE TABLE cars (
 id INT PRIMARY KEY AUTO_INCREMENT,
 plate_number INT NOT NULL,
 make VARCHAR(20) NOT NULL,
 model VARCHAR(20) NOT NULL,
 car_year INT,
 category_id INT,
 doors INT,
 picture BLOB,
 car_condition VARCHAR(20),
available BOOLEAN NOT NULL);

INSERT INTO cars (plate_number, make, model, available)
VALUES(2030, 'opel', 'corsa', TRUE),
(2030, 'opel', 'corsa', TRUE),
(2030, 'opel', 'corsa', TRUE);

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
 first_name VARCHAR(20) NOT NULL,
 last_name VARCHAR(20) NOT NULL,
 title VARCHAR(20),
 notes VARCHAR(200)
 );

 INSERT INTO employees (first_name, last_name)
 VALUES ('Ivan', 'Petrov'),
 ('Ivan', 'Petrov'),
 ('Ivan', 'Petrov');

CREATE TABLE customers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    driver_licence_number INT NOT NULL,
    full_name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    city VARCHAR(20) NOT NULL,
    zip_code INT,
    notes VARCHAR(200)
);

INSERT INTO customers (driver_licence_number, full_name, address, city)
VALUES (240240204, 'Ivan Georgiev', 'Some address example', 'Sofia'),
(240240204, 'Ivan Georgiev', 'Some address example', 'Sofia'),
(240240204, 'Ivan Georgiev', 'Some address example', 'Sofia');

CREATE TABLE rental_orders (
id INT PRIMARY KEY AUTO_INCREMENT,
employee_id INT,
customer_id INT,
car_id INT,
car_condition BOOLEAN,
tank_level DOUBLE NOT NULL,
kilometrage_start INT NOT NULL,
kilometrage_end INT NOT NULL,
total_kilometrage INT,
start_date DATE,
end_date DATE,
total_days INT,
rate_applied DOUBLE,
tax_rate DOUBLE,
order_status VARCHAR(20),
notes VARCHAR(200)
);

INSERT INTO rental_orders (tank_level, kilometrage_start, kilometrage_end)
VALUES (22.4, 10000, 20000),
(22.4, 10000, 20000),
(22.4, 10000, 20000);

*********** 13*********** ONLY INSERT STATEMENTS TO SUBMIT IN JUDGE!!

CREATE TABLE towns (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL
);

INSERT INTO towns (name)
VALUES ('Sofia'),
('Plovdiv'),
('Varna'),
('Burgas');

CREATE TABLE addresses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    address_text VARCHAR(200) NOT NULL,
    town_id INT
    );

INSERT INTO addresses (address_text)
VALUES ('some address text');

CREATE TABLE departments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL
);

INSERT INTO departments (name)
VALUES ('Engineering'),
('Sales'),
('Marketing'),
('Software Development'),
('Quality Assurance');

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    middle_name VARCHAR(20),
    last_name VARCHAR(20) NOT NULL,
    job_title VARCHAR(20) NOT NULL,
    department_id INT,
    hire_date DATE,
    salary DOUBLE,
    address_id INT
    );

INSERT INTO employees (first_name, middle_name, last_name, job_title, department_id, hire_date, salary)
VALUES
  ('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013-02-01', 3500.00),
  ('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004-03-02', 4000.00),
  ('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016-08-28', 525.25),
  ('Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007-12-09', 3000.00),
  ('Peter', 'Pan', 'Pan', 'Intern', 3, '2016-08-28', 599.88);

*********** 14***********

SELECT * FROM towns;
SELECT * FROM departments;
SELECT * FROM employees;

*********** 15***********

SELECT * FROM towns ORDER BY name ASC;
SELECT * FROM departments ORDER BY name ASC;
SELECT * FROM employees ORDER BY salary DESC;

*********** 16***********

SELECT name FROM towns ORDER BY name ASC;
SELECT name FROM departments ORDER BY name ASC;
SELECT first_name, last_name, job_title, salary FROM employees ORDER BY salary DESC;

*********** 17 **********

UPDATE employees
SET salary = salary * 1.1;
SELECT salary FROM employees;
