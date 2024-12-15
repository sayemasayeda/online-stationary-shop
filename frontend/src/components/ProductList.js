import React, { useEffect, useState } from "react";
import api from "../api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((product) => (
        <div
          key={product.ID}
          style={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "10px",
            width: "200px",
          }}
        >
          <h3>{product.Name}</h3>
          <p><strong>Price:</strong> ${product.Price}</p>
          <p><strong>Stock:</strong> {product.Stock}</p>
          <p><strong>Description:</strong> {product.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
