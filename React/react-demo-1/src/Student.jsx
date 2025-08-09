import PropTypes from 'prop-types';

function StudentInfo(props) {
  return (
    <div style={styles.card}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Status: {props.isEnrolled ? 'Enrolled' : 'Not Enrolled'}</p>
    </div>
  );
}

// ✅ PropTypes validation
StudentInfo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isEnrolled: PropTypes.bool
};

// Default prop if not provided
StudentInfo.defaultProps = {
  isEnrolled: false
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '300px',
    fontFamily: 'Arial'
  }
};

export default StudentInfo;
