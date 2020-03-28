import React, { useState, useEffect } from "react";
import Product from "./Product.jsx";

const ProductsPage = () => {

  const getProducts = async () => {
    const response = await fetch("https://api.myjson.com/bins/jtt20");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setLoaded(true);
    } else {
      console.error("Something wrong happend")
    }
  }

  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getProducts()
  }, [])

  if (loaded) {
    return (
      <div id="products_section">
        <div className="products_page pg_0">
          {products.map((product, index) => <Product key={index} product={product} />)}
        </div>
      </div>)
  } else {
    return (
      <h1 style={{ margin: "25% 55%", display: "block" }}>Loading...</h1>
    )
  };
}

export default ProductsPage;
