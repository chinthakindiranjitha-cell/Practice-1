import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleRegister = () => {
    // store data in localStorage
    localStorage.setItem("user", JSON.stringify(data));

    alert("Registered Successfully!");

    navigate("/login"); // 👈 move to login
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <input className="form-control my-2" placeholder="Name"
        onChange={(e)=>setData({...data, name:e.target.value})} />

      <input className="form-control my-2" placeholder="Email"
        onChange={(e)=>setData({...data, email:e.target.value})} />

      <input type="password" className="form-control my-2" placeholder="Password"
        onChange={(e)=>setData({...data, password:e.target.value})} />

      <button className="btn btn-success" onClick={handleRegister}>
        Register
      </button>

      <p className="mt-3">
        Already have an account?{" "}
        <span style={{color:"blue", cursor:"pointer"}}
          onClick={()=>navigate("/login")}>
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;