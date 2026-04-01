import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    // Send them back to the login page
    navigate('/');
  };

  return (
    <div className="dashboard-container" style={{ textAlign: 'center', padding: '2rem' }}>
      <div className="login-card">
        <h2>🎉 Dashboard</h2>
        <p>You have successfully bypassed the gates! This is a protected route.</p>
        
        <button 
          onClick={handleLogout} 
          className="login-btn" 
          style={{ backgroundColor: '#ef4444' }} // Red for logout
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;