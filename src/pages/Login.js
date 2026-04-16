import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <input className="form-control my-2" placeholder="Email"
        onChange={(e)=>setData({...data, email:e.target.value})} />

      <input type="password" className="form-control my-2" placeholder="Password"
        onChange={(e)=>setData({...data, password:e.target.value})} />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>

      <p className="mt-3">
        New user?{" "}
        <span style={{color:"blue", cursor:"pointer"}}
          onClick={()=>navigate("/")}>
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;