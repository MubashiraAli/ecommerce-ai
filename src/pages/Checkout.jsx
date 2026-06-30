import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to Order Success page
    navigate("/order-success");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Checkout</h1>
        <p style={styles.subtitle}>Complete your order securely</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            required
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Email"
            required
            style={styles.input}
          />

          <textarea
            placeholder="Delivery Address"
            rows="4"
            required
            style={styles.textarea}
          />

          <select required style={styles.select}>
            <option value="">Select Payment Method</option>
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Credit Card</option>
          </select>

          <button type="submit" style={styles.button}>
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "20px",
    fontFamily: "Arial",
  },

  card: {
    width: "100%",
    maxWidth: "450px",
    background: "rgba(255,255,255,0.07)",
    backdropFilter: "blur(12px)",
    borderRadius: "18px",
    padding: "30px",
    color: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "5px",
  },

  subtitle: {
    opacity: 0.7,
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    fontSize: "15px",
  },

  textarea: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    resize: "none",
    fontSize: "15px",
  },

  select: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    fontSize: "15px",
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #22c55e, #16a34a)",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
  },
};