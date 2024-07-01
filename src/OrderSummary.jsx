import React from 'react';

const OrderSummary = ({ mobileDetails }) => {
  console.log(mobileDetails, 'mobileDetails');
  return (
    <div>
      {mobileDetails.length > 0 && (
        <div
          style={{ width: '400px', height: '300px', backgroundColor: '#ccc' }}
        >
          <h2>Order Summary</h2>
          {mobileDetails.map((mobile, index) => (
            <div key={index}>
              <h3>{mobile.model}</h3>
              <p>Total Price: {mobile.totalPrice}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
