import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";
import useWishlistStore from "../store/wishlistStore";

function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const wishlist = useWishlistStore((state) => state.wishlist);

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#222",
        color: "white",
      }}
    >
      <h2>ShopSmart AI</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/products" style={{ color: "white" }}>
          Products
        </Link>

        <Link to="/cart" style={{ color: "white" }}>
          Cart ({cartCount})
        </Link>

        <Link to="/wishlist" style={{ color: "white" }}>
          Wishlist ({wishlist.length})
        </Link>

        <Link to="/ai-assistant" style={{ color: "white" }}>
          AI Assistant
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;