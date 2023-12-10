import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://temirmendigali.xyz/api/auth/login");
      const data = await response.json();

      if (data && data.user && data.user.email) {
        setEmail(data.user.email);
        setToken(data.token);
      } else {
        console.error("Invalid response format");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <p>Email: {email}</p>
      <p>Token: {token}</p>
    </div>
  );
}

export default Login;
