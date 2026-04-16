import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StudentDetails from "./pages/StudentDetails";
import Scholarship from "./pages/Scholarship";
import Payment from "./pages/Payment";
import CGPACalculator from "./pages/CGPACalculator";

function App() {
  return (
    <Router basename="/Practice-1">
      <Navbar />

      <Routes>
  <Route path="/" element={<Register />} />   // 👈 FIRST PAGE
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/details" element={<StudentDetails />} />
  <Route path="/scholarship" element={<Scholarship />} />
  <Route path="/payment" element={<Payment />} />
  <Route path="/cgpa" element={<CGPACalculator />} />
</Routes>
    </Router>
  );
}

export default App;
