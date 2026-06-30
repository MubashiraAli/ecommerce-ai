import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products.slice(0, 4)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#f5f5f5",
        }}
      >
        <h1
  style={{
    fontSize: "50px",
    marginBottom: "15px",
    color: "#111827",
  }}
>
          Welcome to ShopSmart AI
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Discover products and get AI-powered recommendations.
        </p>

        <Link to="/products">
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "12px 25px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Shop Now
          </button>
        </Link>
      </section>

      {/* Categories */}
      <section
        style={{
          padding: "50px 30px",
          textAlign: "center",
        }}
      >
        <h2>Explore Our Collections</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              width: "180px",
            }}
          >
            📱 Electronics
          </div>

          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              width: "180px",
            }}
          >
            💄 Beauty
          </div>

          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              width: "180px",
            }}
          >
            ⌚ Watches
          </div>

          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              width: "180px",
            }}
          >
            👕 Fashion
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
  style={{
    padding: "50px 30px",
    backgroundColor: "#0f172a",
    textAlign: "center",
    color: "white",
  }}
>
      
        <h2 style={{ color: "#d8dfef" }}>
  Why Choose ShopSmart AI?
</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3>🚚 Fast Delivery</h3>
            <p>Get products delivered quickly.</p>
          </div>

          <div>
            <h3>🔒 Secure Shopping</h3>
            <p>Safe and trusted experience.</p>
          </div>

          <div>
            <h3>🤖 AI Recommendations</h3>
            <p>Smart product suggestions.</p>
          </div>

          <div>
            <h3>⭐ Top Rated Products</h3>
            <p>Shop customer favorites.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        style={{
          padding: "50px 30px",
          textAlign: "center",
        }}
      >
        <h2>Featured Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  padding: "15px",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <h3>{product.title}</h3>

                <p>₹{product.price}</p>

                <p style={{ color: "#f39c12" }}>
                  ⭐ {product.rating}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link to="/products">
          <button
            style={{
              marginTop: "30px",
              backgroundColor: "black",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            View All Products
          </button>
        </Link>
      </section>

      {/* CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2>Ready to start shopping?</h2>

        <p>Explore hundreds of products today.</p>

        <Link to="/products">
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "15px",
            }}
          >
            Explore Products
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Home;