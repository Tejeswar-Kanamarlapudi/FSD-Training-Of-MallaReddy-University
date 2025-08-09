create table Admin(
	username varchar(20),
    password varchar(20)
);

insert into Admin values('admin1','1234'),('admin2','4321');

select * from Admin;

select * from Admin where username='admin1' and password='123' or 1=1;
select * from Admin where username='admin1'; -- and password='123'

create table marks(
	id int primary key,
    name varchar(20),
    theory int,
    practical int,
    total int generated always  as (theory+practical) stored
);

insert into marks(id,name,theory,practical) values(01,'ravi',60,20);

select * from marks;









