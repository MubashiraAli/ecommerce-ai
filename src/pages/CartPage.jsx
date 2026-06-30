import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>🛒 Shopping Cart</h1>
          <p style={styles.subtitle}>
            {cart.length} item{cart.length !== 1 ? "s" : ""} in your cart
          </p>
        </div>

        {/* Empty State */}
        {cart.length === 0 ? (
          <div style={styles.emptyBox}>
            <h2>Your cart is empty</h2>
            <Link to="/">
              <button style={styles.primaryBtn}>Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div style={styles.grid}>
              {cart.map((item) => (
                <div key={item.id} style={styles.card}>
                  <img src={item.thumbnail} style={styles.image} />

                  <div style={styles.info}>
                    <h2 style={styles.productTitle}>{item.title}</h2>

                    <p style={styles.price}>₹{item.price}</p>

                    <div style={styles.actions}>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={styles.deleteBtn}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div style={styles.summary}>
              <div style={styles.summaryRow}>
                <span>Total Items</span>
                <b>{cart.length}</b>
              </div>

              <div style={styles.summaryRow}>
                <span>Total Price</span>
                <b style={{ color: "#16a34a" }}>
                  ₹{totalPrice.toFixed(2)}
                </b>
              </div>

              <div style={styles.buttonRow}>
                <Link to="/checkout" style={{ flex: 1 }}>
                  <button style={styles.checkoutBtn}>
                    Proceed to Checkout
                  </button>
                </Link>

                <button onClick={clearCart} style={styles.clearBtn}>
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;

/* 💎 PREMIUM STYLES */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "40px 20px",
    fontFamily: "Arial",
  },

  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    color: "white",
  },

  header: {
    marginBottom: "25px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },

  subtitle: {
    opacity: 0.7,
  },

  emptyBox: {
    textAlign: "center",
    padding: "80px 20px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "15px",
  },

  primaryBtn: {
    marginTop: "15px",
    padding: "12px 20px",
    background: "#22c55e",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
  },

  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  card: {
    display: "flex",
    gap: "20px",
    background: "rgba(255,255,255,0.06)",
    padding: "15px",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    alignItems: "center",
  },

  image: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  info: {
    flex: 1,
  },

  productTitle: {
    fontSize: "18px",
    marginBottom: "5px",
  },

  price: {
    color: "#22c55e",
    fontSize: "16px",
    fontWeight: "bold",
  },

  actions: {
    marginTop: "10px",
  },

  deleteBtn: {
    background: "#ef4444",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },

  summary: {
    marginTop: "25px",
    background: "rgba(255,255,255,0.07)",
    padding: "20px",
    borderRadius: "15px",
  },

  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    fontSize: "16px",
  },

  buttonRow: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },

  checkoutBtn: {
    flex: 1,
    padding: "12px",
    background: "linear-gradient(90deg, #22c55e, #16a34a)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  clearBtn: {
    padding: "12px 16px",
    background: "#334155",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
  },
};