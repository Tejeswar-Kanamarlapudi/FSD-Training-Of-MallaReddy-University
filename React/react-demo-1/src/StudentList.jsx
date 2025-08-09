import './index.css'

function StudentList({ students = [] }) {
    // Sort students by rank (ascending)
    const sortedStudents = [...students].sort((a, b) => a.rank - b.rank);
  
    // Get badge based on rank
    const getBadge = (rank) => {
      if (rank === 1) return "🥇 Gold";
      if (rank === 2) return "🥈 Silver";
      if (rank === 3) return "🥉 Bronze";
      return "🎖️ Participant";
    };
  
    const listItems = sortedStudents.map((student) => (
      <li key={student.id} className="student-item">
        <span className="rank">#{student.rank}</span>
        <span className="name">{student.name}</span>
        <span className="score">Score: {student.score}</span>
        <span className="badge">{getBadge(student.rank)}</span>
      </li>
    ));
  
    return <ol className="student-list">{listItems}</ol>;
  }
  
  export default StudentList;
  