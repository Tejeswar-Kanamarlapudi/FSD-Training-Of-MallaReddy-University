-- Table for Admin
CREATE TABLE Admin (
    AdminID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Password VARCHAR(255) -- Consider using a stronger hash like SHA256 for passwords in practice
);

-- Table for Student
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(20),
    Address TEXT,
    CreatedByAdminID INT,
    FOREIGN KEY (CreatedByAdminID) REFERENCES Admin(AdminID)
);

-- Table for Teacher
CREATE TABLE Teacher (
    TeacherID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(20),
    Department VARCHAR(100),
    CreatedByAdminID INT,
    FOREIGN KEY (CreatedByAdminID) REFERENCES Admin(AdminID)
);

-- Table for Course
CREATE TABLE Course (
    CourseID INT PRIMARY KEY,
    Title VARCHAR(100),
    Description TEXT,
    TeacherID INT,
    FOREIGN KEY (TeacherID) REFERENCES Teacher(TeacherID)
);

-- Table for Material
CREATE TABLE Material (
    MaterialID INT PRIMARY KEY,
    CourseID INT,
    Title VARCHAR(100),
    Content TEXT,
    FOREIGN KEY (CourseID) REFERENCES Course(CourseID)
);

-- Table for Enrollment (Junction table for Student-Course many-to-many relationship)
CREATE TABLE Enrollment (
    StudentID INT,
    CourseID INT,
    EnrollmentDate DATE,
    PRIMARY KEY (StudentID, CourseID), -- Composite primary key
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Course(CourseID)
);

-- Table for Assignment
CREATE TABLE Assignment (
    AssignmentID INT PRIMARY KEY,
    CourseID INT,
    Title VARCHAR(100),
    DueDate DATE,
    FOREIGN KEY (CourseID) REFERENCES Course(CourseID)
);

-- Table for Submission
CREATE TABLE Submission (
    SubmissionID INT PRIMARY KEY,
    AssignmentID INT,
    StudentID INT,
    SubmittedDate DATE,
    Grade DECIMAL(5,2), -- DECIMAL(precision, scale) is suitable for grades
    FOREIGN KEY (AssignmentID) REFERENCES Assignment(AssignmentID),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID)
);
