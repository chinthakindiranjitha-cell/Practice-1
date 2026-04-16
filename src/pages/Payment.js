function Payment() {
  return (
    <div className="container mt-5">
      <h2>Payment</h2>

      <input className="form-control my-2" placeholder="Card Number" />
      <input className="form-control my-2" placeholder="Amount" />

      <button className="btn btn-success">Pay Now</button>
    </div>
  );
}

export default Payment;