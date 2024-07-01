import React, { useEffect, useState } from 'react';

const Pagination = ({ products }) => {
  const handlePrev = () => {};
  const handleNext = () => {};

  return (
    <div>
      <p>
        <span onClick={handlePrev}>Prev</span>
        <span style={{ border: '1px solid #ccc' }}>
          {products.map((pro, index) => index + 1)}
        </span>
        <span onClick={handleNext}>Next</span>
      </p>
    </div>
  );
};

export default Pagination;
