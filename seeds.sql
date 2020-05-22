USE employee_db;

SELECT * FROM employee;

INSERT INTO department(name)
VALUE ("Service Dept");

INSERT INTO department(name)
VALUE ("Billing Dept");

INSERT INTO department(name)
VALUE ("Engineering Dept");

INSERT INTO role(title, salary, department_id)
VALUE ("Manager", 65, 3);

INSERT INTO role(title, salary, department_id)
VALUE ("Dept Lead", 45, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE ("Alan", "M.", 1, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE ("Xanju", "J.", 2, null);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE ("Gerald", "W.", 3, null);


SELECT * FROM role;