import React, { useState } from 'react';
import ExcelReader from './ExcelReader';
import MobileDetails from './MobileDetails';
import OrderSummary from './OrderSummary';

const App = () => {
  const [mobileDetails, setMobileDetails] = useState([]);
  const [orderSummary, setOrderSummary] = useState(null); // Change to null
  const [userDetails, setUserDetails] = useState({
    email: '',
    username: '',
  });

  const handleSetMobileDetails = (data) => {
    setMobileDetails(
      data.map((mobile) => ({
        ...mobile,
        price: parseInt(mobile.TotalPrice, 10),
        totalPrice: parseInt(mobile.TotalPrice, 10),
        model: mobile.ItemName,
      }))
    );
  };

  const handleSaveOrderSummary = (selectedMobile) => {
    const orderWithUserDetails = {
      userDetails,
      mobile: selectedMobile,
    };

    setOrderSummary(orderWithUserDetails);
    localStorage.setItem('orderSummary', JSON.stringify(orderWithUserDetails));
  };

  const handleUserDetailsChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <h1>Mobile Sell Application</h1>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleUserDetailsChange}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleUserDetailsChange}
          />
        </label>
        <br />
        <ExcelReader setMobileDetails={handleSetMobileDetails} />
      </div>
      <div>
        <MobileDetails
          mobileDetails={mobileDetails}
          onSaveOrderSummary={handleSaveOrderSummary}
        />
      </div>
      {/* <div>
        {orderSummary && <OrderSummary mobileDetails={[orderSummary.mobile]} />}
      </div> */}
    </div>
  );
};

export default App;
