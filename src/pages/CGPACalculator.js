import { useState } from "react";

function CGPACalculator() {
  const [marks, setMarks] = useState("");
  const [cgpa, setCgpa] = useState(null);

  const calculate = () => {
    const arr = marks.split(",").map(Number);
    const avg = arr.reduce((a,b) => a+b,0)/arr.length;
    setCgpa((avg/10).toFixed(2));
  };

  return (
    <div className="container mt-5">
      <h2>CGPA Calculator</h2>

      <input className="form-control my-2"
        placeholder="Enter marks separated by commas"
        onChange={(e)=>setMarks(e.target.value)}
      />

      <button className="btn btn-primary" onClick={calculate}>
        Calculate
      </button>

      {cgpa && <h3 className="mt-3">CGPA: {cgpa}</h3>}
    </div>
  );
}

export default CGPACalculator;