-- Get a list of students and the courses they are enrolled in(INNER JOIN)
SELECT 
    Student.Name AS StudentName,
    Course.Title AS CourseTitle
FROM 
    Enrollment
INNER JOIN Student ON Enrollment.StudentID = Student.StudentID
INNER JOIN Course ON Enrollment.CourseID = Course.CourseID;

--  List students along with the assignments they have submitted and their grades.(INNER)
SELECT 
    Student.Name AS StudentName,
    Assignment.Title AS AssignmentTitle,
    Submission.Grade
FROM 
    Submission
INNER JOIN Student ON Submission.StudentID = Student.StudentID
INNER JOIN Assignment ON Submission.AssignmentID = Assignment.AssignmentID;

-- Show all courses and their assigned teachers. Also show courses with no teacher assigned yet.(LEFT)
SELECT 
    Course.Title AS CourseTitle,
    Teacher.Name AS TeacherName
FROM 
    Course
LEFT JOIN Teacher ON Course.TeacherID = Teacher.TeacherID;

-- Show all students and any courses they are enrolled in. Include students not enrolled in any course.(LEFT)
SELECT 
    Student.Name AS StudentName,
    Course.Title AS CourseTitle
FROM 
    Student
LEFT JOIN Enrollment ON Student.StudentID = Enrollment.StudentID
LEFT JOIN Course ON Enrollment.CourseID = Course.CourseID;

-- Get all teachers and the courses they are teaching (including courses without assigned teachers).(RIGHT)
SELECT 
    Course.Title AS CourseTitle,
    Teacher.Name AS TeacherName
FROM 
    Course
RIGHT JOIN Teacher ON Course.TeacherID = Teacher.TeacherID;


-- List all assignments and any submissions made by students. Include assignments with no submissions.(RIGHT)
SELECT 
    Assignment.Title AS AssignmentTitle,
    Student.Name AS StudentName,
    Submission.Grade
FROM 
    Submission
RIGHT JOIN Assignment ON Submission.AssignmentID = Assignment.AssignmentID
LEFT JOIN Student ON Submission.StudentID = Student.StudentID;

--  Find pairs of students who were created by the same admin.(SELF)
SELECT 
    S1.Name AS Student1,
    S2.Name AS Student2,
    A.Name AS CreatedByAdmin
FROM 
    Student S1
JOIN Student S2 ON S1.CreatedByAdminID = S2.CreatedByAdminID AND S1.StudentID < S2.StudentID
JOIN Admin A ON S1.CreatedByAdminID = A.AdminID;

--  Find teachers from the same department and list them in pairs.(SELF)
SELECT 
    T1.Name AS Teacher1,
    T2.Name AS Teacher2,
    T1.Department
FROM 
    Teacher T1
JOIN Teacher T2 
    ON T1.Department = T2.Department 
   AND T1.TeacherID < T2.TeacherID;
   
insert into teacher values(208,'Tejeswar','example@university.com','555-2008','Computer Science',1);

SELECT Name FROM Student WHERE StudentID IN (
    SELECT StudentID
    FROM Enrollment
    GROUP BY StudentID
    HAVING COUNT(CourseID) > 2
);

-- Add a third course for Alice (StudentID 101)
INSERT INTO Enrollment (StudentID, CourseID, EnrollmentDate)
VALUES (101, 304, '2024-09-08');






