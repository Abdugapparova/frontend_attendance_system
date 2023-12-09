import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://temirmendigali.xyz/api/auth/login");
    const data = await response.json();

    setEmail(data.user.email);
    setToken(data.token);
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
