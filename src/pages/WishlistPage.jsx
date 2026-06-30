import { Link } from "react-router-dom";
import useWishlistStore from "../store/wishlistStore";

function WishlistPage() {
  const wishlist = useWishlistStore((state) => state.wishlist);

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>❤️ Wishlist</h1>

      {wishlist.length === 0 ? (
        <h3>No products in wishlist</h3>
      ) : (
        wishlist.map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "20px",
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                width="120"
              />

              <div>
                <h2>{item.title}</h2>

                <p>₹{item.price}</p>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromWishlist(item.id);
                  }}
                  style={{
                    padding: "12px 25px",
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  🗑 Remove
                </button>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default WishlistPage;