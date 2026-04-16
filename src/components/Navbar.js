import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <h3 className="text-white">Student System</h3>

      <div>
        <Link className="btn btn-light mx-1" to="/dashboard">Home</Link>
        <Link className="btn btn-light mx-1" to="/details">Details</Link>
        <Link className="btn btn-light mx-1" to="/scholarship">Scholarship</Link>
        <Link className="btn btn-light mx-1" to="/payment">Payment</Link>
        <Link className="btn btn-light mx-1" to="/cgpa">CGPA</Link>
      </div>
    </nav>
  );
}

export default Navbar;