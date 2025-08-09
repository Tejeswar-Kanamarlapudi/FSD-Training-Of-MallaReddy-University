create table Admin(
	AdminID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Password VARCHAR(255)
);

create table Student(
	StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(10),
    CreatedByAdminID INT,
    FOREIGN KEY (CreatedByAdminID) REFERENCES Admin(AdminID)
);

create table Teacher(
	TeacherID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(10),
    Department VARCHAR(20),
    CreatedByAdminID INT,
    FOREIGN KEY (CreatedByAdminID) REFERENCES Admin(AdminID)
);

create table Course(
	CourseID INT PRIMARY KEY,
    Title VARCHAR(50),
    Description TEXT,
    TeacherID INT,
    FOREIGN KEY(TeacherID) References Teacher(TeacherID)
);

create table Material(
	MaterialID INT PRIMARY KEY,
    CourseID INT,
    Title VARCHAR(80),
    Content TEXT,
    foreign key(CourseID) References course(CourseID)
);

create table Enrollment(
	StudentID int,
    CourseID int,
    EnrollmentDate date,
    primary key(StudentID,CourseID),
    foreign key(StudentID) references Student(StudentID),
    foreign key(CourseID) references Course(CourseID)
);

create table Assignment(
	AssignmentID int primary key,
    CourseID int,
    Title varchar(80),
    DueDate date,
    foreign key(CourseID) references Course(CourseID)
);

create table Submission(
	SubmissionID int primary key,
    AssignmentID int,
    StudentID int,
    SubmittedDate date,
    Grade decimal(5,2),
    foreign key(AssignmentID) references Assignment(AssignmentID),
    foreign key(StudentID) references Student(StudentID)
);
