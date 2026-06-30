import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCartStore from "../store/cartStore";
import useWishlistStore from "../store/wishlistStore";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  const addToCart = useCartStore((state) => state.addToCart);

  const addToWishlist = useWishlistStore(
    (state) => state.addToWishlist
  );

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);

    setMessage("✅ Product added to cart successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);

    setMessage("❤️ Product added to wishlist!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "350px",
            borderRadius: "10px",
          }}
        />

        {/* Product Details */}
        <div style={{ flex: 1 }}>
          <h1>{product.title}</h1>

          <p
            style={{
              color: "#666",
              lineHeight: "1.6",
            }}
          >
            {product.description}
          </p>

          <h2>₹{product.price}</h2>

          <p>
            <strong>Brand:</strong> {product.brand}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {product.rating}
          </p>

          <p>
            <strong>Stock Available:</strong> {product.stock}
          </p>

          <p>
            <strong>Discount:</strong>{" "}
            {product.discountPercentage}%
          </p>

          <p style={{ color: "green" }}>
            ✓ Free Delivery Available
          </p>

          <p style={{ color: "green" }}>
            ✓ Easy Returns
          </p>

          {/* Success Message */}
          {message && (
            <div
              style={{
                backgroundColor: "#e8f5e9",
                color: "green",
                padding: "12px",
                borderRadius: "6px",
                marginTop: "15px",
                marginBottom: "15px",
                fontWeight: "bold",
              }}
            >
              {message}
            </div>
          )}

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            <button
              onClick={handleAddToCart}
              style={{
                padding: "12px 25px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              🛒 Add To Cart
            </button>

            <button
              onClick={handleAddToWishlist}
              style={{
                padding: "12px 25px",
                backgroundColor: "hotpink",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              ❤️ Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;