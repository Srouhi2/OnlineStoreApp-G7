import React from "react";
import Filters from "../components/Filters/Filters";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

// Product Type Definition
interface Product {
  id: number; // id is of type number
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  colors: string[];
  size: string[];
}

const HomePage = () => {
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: 1,  // id as number
      name: "Oversized T-shirt",
      price: 11.0,
      oldPrice: 34.0,
      image: "https://img.icons8.com/ios-filled/50/t-shirt--v1.png",
      colors: ["Black", "White", "Red"],
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 2,  // id as number
      name: "Casual Hoodie",
      price: 25.0,
      oldPrice: 50.0,
      image: "https://img.icons8.com/ios-filled/50/t-shirt--v1.png",
      colors: ["Gray", "Black", "Blue"],
      size: ["S", "M", "L", "XL"],
    },
    {
      id: 3,  // id as number
      name: "Denim Jeans",
      price: 40.0,
      oldPrice: 60.0,
      image: "https://img.icons8.com/ios-filled/50/t-shirt--v1.png",
      colors: ["Blue", "Black"],
      size: ["32", "34", "36", "38"],
    },
    // Add more products as needed
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Sidebar Filters */}
      <aside
        style={{
          width: "260px",
          padding: "16px",
          borderRight: "1px solid #ddd",
          backgroundColor: "#ffffff",
        }}
      >
        <Filters />
      </aside>

      {/* Main Product Grid */}
      <main
        style={{
          flex: 1,
          padding: "16px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "#333",
          }}
        >
          Our Products
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                padding: "16px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              
              {/* Make the product name clickable */}
              <h3 style={{ fontSize: "18px", marginTop: "8px" }}>
                <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "#333" }}>
                  {product.name}
                </Link>
              </h3>

              <div style={{ marginTop: "8px", color: "#888" }}>
                <span
                  style={{
                    fontSize: "14px",
                    textDecoration: "line-through",
                    marginRight: "8px",
                  }}
                >
                  ${product.oldPrice.toFixed(2)}
                </span>
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Color Selection */}
              <div>
                <label htmlFor={`colorSelect${product.id}`}>Color:</label>
                <select id={`colorSelect${product.id}`} style={{ marginTop: "8px", padding: "8px", width: "100%" }}>
                  {product.colors.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              {/* Size Selection */}
              <div>
                <label htmlFor={`sizeSelect${product.id}`}>Size:</label>
                <select id={`sizeSelect${product.id}`} style={{ marginTop: "8px", padding: "8px", width: "100%" }}>
                  {product.size.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"  // Ensure the type is explicitly set
                onClick={() => addToCart(product)}
                style={{
                  marginTop: "16px",
                  padding: "10px 16px",
                  backgroundColor: "#594ae9",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "100%",
                  fontSize: "14px",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
