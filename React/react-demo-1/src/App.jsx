import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Dashboard from './Dashboard';

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);

  // Called on successful login: set user and show dashboard
  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  // Called on successful registration: show login and alert
  const handleRegisterSuccess = () => {
    alert('Registration successful!');
    setCurrentView('login');
  };

  // Render based on currentView
  return (
    <div>
      {currentView === 'login' && (
        <LoginPage
          onRegisterClick={() => setCurrentView('register')}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {currentView === 'register' && (
        <RegisterPage
          onRegisterSuccess={handleRegisterSuccess}
          onLoginClick={() => setCurrentView('login')}
        />
      )}

      {currentView === 'dashboard' && currentUser && (
        <Dashboard user={currentUser} onLogout={() => {
          setCurrentUser(null);
          setCurrentView('login');
        }} />
      )}
    </div>
  );
}

export default App;
  