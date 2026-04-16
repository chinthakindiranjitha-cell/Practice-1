import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="container mt-5">
      <h2>Welcome Student 🎓</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3 shadow">Check Details</div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow">Apply Scholarship</div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow">CGPA Calculator</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;