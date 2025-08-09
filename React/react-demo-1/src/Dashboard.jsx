import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Country:</strong> {user.country}</p>
      <p><strong>Bio:</strong> {user.bio}</p>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
