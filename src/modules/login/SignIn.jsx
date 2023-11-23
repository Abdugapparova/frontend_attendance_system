import React, { useState } from 'react';
import './signin.css';
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from '../../constants';

function SignIn() {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        localStorage.setItem('token', token);

        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setError('An error occurred during login');
    }
  };
  

  return (
    <div className="Signin">
      <div className="content">
        <div className="text">Sign In</div>
        <form action="#">
        <div className={`field ${error ? 'error' : ''}`}>
            <input
              required=""
              type="text"
              className={`input ${error ? 'error' : ''}`}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={`field ${error ? 'error' : ''}`}>
            <input
              required=""
              type="password"
              className={`input ${error ? 'error' : ''}`}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <p className="error-message">{error}</p>}

          {/* <div className='help'>
            <div className="rem">
              <input
                className="rememberInput"
                type="checkbox"
                id="myCheckbox"
                name="myCheckbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="myCheckbox" className="remember">
                Remember me
              </label>
            </div>
            <div className="forgot-pass">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div> */}
          <button className="buttonLogin" onClick={handleSignIn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;



