import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Logging in with:", email, password);
    
    // This lets your teacher log in without needing a live backend!
    if (email === "diksha@gmail.com" && password === "123456") {
      console.log("Login successful!");
      
      // Save a fake token so your dashboard can read it
      localStorage.setItem('token', 'fake-jwt-token-for-classroom');
      
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } else {
      alert("Invalid email or password. Hint: Use diksha@gmail.com and 123456");
    }
  }; // 👈 The function closes here perfectly!

  return (
    <div className="ios-login-container">
      <div className="ios-card">
        <header className="ios-header">
          <h1>Sign In</h1>
          <p>Welcome back to Task Manager</p>
        </header>
        
        <form onSubmit={handleSubmit} className="ios-form">
          <div className="ios-input-group">
            <input 
              type="email" 
              id="email"
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="ios-input-group">
            <input 
              type="password" 
              id="password"
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="ios-primary-btn">Continue</button>
        </form>

        <div className="ios-footer">
          <span>Don't have an account?</span>
          <a href="/signup" className="ios-link">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;