import React, { useEffect, useState } from 'react';
import Pagination from './Pagination.jsx';

const Products = () => {
  const [ProductsList, setProductList] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products/');
    const response = await data.json();
    console.log(response, 'response');
    setProductList(response);
  };
  return (
    <div>
      {ProductsList.map((product, index) => (
        <div
          key={index}
          style={{ width: '200px', height: '300px', background: 'grey' }}
        >
          <h3>{product.title}</h3>
          <img src={product.image} alt="image" width="40%" height="40%" />
          <p>
            {product.category}
            <span>{product.price}</span> <span>{product.rating.rate}</span>
          </p>
        </div>
      ))}
      <Pagination products={ProductsList} />
    </div>
  );
};

export default Products;
