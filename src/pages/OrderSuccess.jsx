import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";

function OrderSuccess() {
  const navigate = useNavigate();
  const clearCart = useCartStore((state) => state.clearCart);

  const handleContinueShopping = () => {
    clearCart();
    navigate("/products");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>✔</div>

        <h1 style={styles.title}>Order Placed Successfully</h1>

        <p style={styles.text}>
          Thank you for shopping with <b>ShopSmart AI</b>.
          <br />
          Your order is being processed 🚚
        </p>

        <div style={styles.orderBox}>
          <p style={{ margin: 0 }}>Order ID</p>
          <h3 style={{ margin: 0 }}>
            #SSAI{Math.floor(Math.random() * 99999)}
          </h3>
        </div>

        <div style={styles.buttonRow}>
          <button
            style={styles.primaryBtn}
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>

          <Link to="/" style={{ flex: 1 }}>
            <button style={styles.secondaryBtn}>
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    fontFamily: "Arial",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
    padding: "40px 25px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.07)",
    backdropFilter: "blur(12px)",
    color: "white",
    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
  },

  icon: {
    width: "70px",
    height: "70px",
    margin: "0 auto 20px",
    background: "#22c55e",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "bold",
  },

  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },

  text: {
    opacity: 0.8,
    fontSize: "15px",
    marginBottom: "25px",
    lineHeight: "1.5",
  },

  orderBox: {
    background: "rgba(255,255,255,0.08)",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "25px",
  },

  buttonRow: {
    display: "flex",
    gap: "10px",
  },

  primaryBtn: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #22c55e, #16a34a)",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  },

  secondaryBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#334155",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  },
};