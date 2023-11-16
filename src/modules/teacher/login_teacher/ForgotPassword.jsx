import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./forgotpass.css";

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error1, setError1] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleResetPassword = () => {
        if (email === '38516@gmail.com') {
            navigate('/');
        } else {
            setError1('Email not found. Please check your email address.');
        }
    };

    return (
        <div className="ForgotPassword">
            <div className="content">
                <div className="text">Forgot Password</div>
                <form action="#">
                    <div className={`field ${error1 ? 'error1' : ''}`}>
                        <input
                            required=""
                            type="text"
                            className={`input ${error1 ? 'error1' : ''}`}
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    {error1 && <p className="error-message">{error1}</p>}

                    <button className="buttonSendResetLink" onClick={handleResetPassword}>
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
