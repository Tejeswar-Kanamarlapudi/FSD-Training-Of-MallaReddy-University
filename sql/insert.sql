-- INSERT statements for Admin Table
INSERT INTO Admin (AdminID, Name, Email, Password) VALUES
(1, 'John Doe', 'john.doe@university.com', 'hashed_password_1'),
(2, 'Jane Smith', 'jane.smith@university.com', 'hashed_password_2'),
(3, 'Robert Johnson', 'robert.j@university.com', 'hashed_password_3'),
(4, 'Emily Davis', 'emily.d@university.com', 'hashed_password_4'),
(5, 'Michael Brown', 'michael.b@university.com', 'hashed_password_5'),
(6, 'Sarah Wilson', 'sarah.w@university.com', 'hashed_password_6'),
(7, 'David Lee', 'david.l@university.com', 'hashed_password_7');

-- INSERT statements for Student Table
INSERT INTO Student (StudentID, Name, Email, Phone, Address, CreatedByAdminID) VALUES
(101, 'Alice Green', 'alice.g@example.com', '555-1001', '123 Oak Ave, City', 1),
(102, 'Bob White', 'bob.w@example.com', '555-1002', '456 Pine St, Town', 2),
(103, 'Charlie Black', 'charlie.b@example.com', '555-1003', '789 Elm Rd, Village', 1),
(104, 'Diana Prince', 'diana.p@example.com', '555-1004', '101 Maple Ln, City', 3),
(105, 'Eve Adams', 'eve.a@example.com', '555-1005', '202 Birch Blvd, Town', 2),
(106, 'Frank Miller', 'frank.m@example.com', '555-1006', '303 Cedar Dr, Village', 4),
(107, 'Grace Hall', 'grace.h@example.com', '555-1007', '404 Spruce Ct, City', 1);

-- INSERT statements for Teacher Table
INSERT INTO Teacher (TeacherID, Name, Email, Phone, Department, CreatedByAdminID) VALUES
(201, 'Prof. Alan Turing', 'alan.t@university.com', '555-2001', 'Computer Science', 1),
(202, 'Dr. Marie Curie', 'marie.c@university.com', '555-2002', 'Physics', 2),
(203, 'Ms. Ada Lovelace', 'ada.l@university.com', '555-2003', 'Mathematics', 1),
(204, 'Mr. Nikola Tesla', 'nikola.t@university.com', '555-2004', 'Engineering', 3),
(205, 'Dr. Stephen Hawking', 'stephen.h@university.com', '555-2005', 'Astrophysics', 4),
(206, 'Prof. Rosalind Franklin', 'rosalind.f@university.com', '555-2006', 'Chemistry', 5),
(207, 'Dr. Richard Feynman', 'richard.f@university.com', '555-2007', 'Quantum Physics', 6);

-- INSERT statements for Course Table
INSERT INTO Course (CourseID, Title, Description, TeacherID) VALUES
(301, 'Introduction to Programming', 'Fundamentals of Python programming.', 201),
(302, 'Classical Mechanics', 'Study of motion and forces.', 202),
(303, 'Calculus I', 'Introduction to differential and integral calculus.', 203),
(304, 'Electrical Circuits', 'Analysis of basic electrical circuits.', 204),
(305, 'Cosmology', 'Study of the origin and evolution of the universe.', 205),
(306, 'Organic Chemistry I', 'Introduction to carbon compounds.', 206),
(307, 'Quantum Field Theory', 'Advanced topics in quantum mechanics.', 207);

-- INSERT statements for Material Table
INSERT INTO Material (MaterialID, CourseID, Title, Content) VALUES
(401, 301, 'Lecture 1: Python Basics', 'Covers variables, data types, and basic operations.'),
(402, 301, 'Lab Manual: First Program', 'Step-by-step guide to writing your first Python script.'),
(403, 302, 'Notes: Newton''s Laws', 'Detailed explanation of Newton''s three laws of motion.'),
(404, 303, 'Chapter 1: Limits and Continuity', 'Textbook chapter on foundational calculus concepts.'),
(405, 304, 'Circuit Design Principles', 'Introduction to Ohm''s law and Kirchhoff''s laws.'),
(406, 305, 'Reading: The Big Bang Theory', 'Article discussing the Big Bang cosmological model.'),
(407, 306, 'Lecture 1: Hydrocarbons', 'Overview of alkanes, alkenes, and alkynes.');

-- INSERT statements for Enrollment Table
INSERT INTO Enrollment (StudentID, CourseID, EnrollmentDate) VALUES
(101, 301, '2024-09-01'),
(101, 303, '2024-09-01'),
(102, 301, '2024-09-02'),
(103, 302, '2024-09-03'),
(104, 304, '2024-09-04'),
(105, 301, '2024-09-05'),
(106, 306, '2024-09-06'),
(107, 305, '2024-09-07'); -- Added an 8th statement to ensure variety

-- INSERT statements for Assignment Table
INSERT INTO Assignment (AssignmentID, CourseID, Title, DueDate) VALUES
(501, 301, 'Homework 1: Variables & Types', '2024-09-15'),
(502, 301, 'Project Proposal: Simple Calculator', '2024-09-30'),
(503, 302, 'Problem Set 1: Kinematics', '2024-09-20'),
(504, 303, 'Midterm Review Problems', '2024-10-10'),
(505, 304, 'Lab Report 1: Series & Parallel Circuits', '2024-10-01'),
(506, 305, 'Essay: Dark Matter & Energy', '2024-10-15'),
(507, 306, 'Quiz 1: Functional Groups', '2024-09-25');

-- INSERT statements for Submission Table
INSERT INTO Submission (SubmissionID, AssignmentID, StudentID, SubmittedDate, Grade) VALUES
(601, 501, 101, '2024-09-14', 92.50),
(602, 501, 102, '2024-09-13', 88.00),
(603, 503, 103, '2024-09-19', 75.25),
(604, 505, 104, '2024-09-30', 95.00),
(605, 501, 105, '2024-09-14', 85.00),
(606, 507, 106, '2024-09-24', 90.00),
(607, 506, 107, '2024-10-14', 82.75),
(608, 502, 101, '2024-09-28', 90.00); -- Added an 8th statement for more dataAdminID
