import React, { useState, useEffect } from 'react';
import OrderSummary from './OrderSummary';

const MobileDetails = ({ mobileDetails, onSaveOrderSummary }) => {
  const [selectedMobileIndex, setSelectedMobileIndex] = useState(null);
  const [conditions, setConditions] = useState({
    screenGlassBroken: false,
    microphoneNotWorking: false,
    NoCharger: false,
  });
  const [adjustedPrice, setAdjustedPrice] = useState(null);

  const handleConditionChange = (e) => {
    const updatedConditions = {
      ...conditions,
      [e.target.name]: e.target.checked,
    };
    setConditions(updatedConditions);
    if (selectedMobileIndex !== null) {
      const price = calculatePrice(
        mobileDetails[selectedMobileIndex].totalPrice,
        updatedConditions
      );
      setAdjustedPrice(price);
    }
  };

  const calculatePrice = (basePrice, currentConditions) => {
    let price = basePrice;
    if (currentConditions.screenGlassBroken) price -= 1500;
    if (currentConditions.microphoneNotWorking) price -= 300;
    if (currentConditions.NoCharger) price -= 800;
    return price;
  };

  const handleMobileSelect = (index) => {
    setSelectedMobileIndex(index);
    const initialConditions = {
      screenGlassBroken: false,
      microphoneNotWorking: false,
      NoCharger: false,
    };
    setConditions(initialConditions);
    const price = calculatePrice(
      mobileDetails[index].totalPrice,
      initialConditions
    );
    setAdjustedPrice(price);
  };

  const handleSave = () => {
    if (selectedMobileIndex !== null) {
      const selectedMobile = {
        ...mobileDetails[selectedMobileIndex],
        ...conditions,
        totalPrice: adjustedPrice,
      };
      onSaveOrderSummary(selectedMobile);
      alert('All Records Saved Successfully');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {mobileDetails.map((mobile, index) => (
          <div
            key={index}
            onClick={() => handleMobileSelect(index)}
            style={{
              cursor: 'pointer',
              border: '1px solid black',
              margin: '10px',
              padding: '10px',
            }}
          >
            <h3>{mobile.model}</h3>
            <p>Base Price: {mobile.totalPrice}</p>
          </div>
        ))}
      </div>
      <div>
        {selectedMobileIndex !== null && (
          <div>
            <h3>Apply Conditions</h3>
            <label>
              Screen Glass Broken:
              <input
                type="checkbox"
                name="screenGlassBroken"
                onChange={handleConditionChange}
                checked={conditions.screenGlassBroken}
              />
            </label>
            <label>
              Microphone Not Working:
              <input
                type="checkbox"
                name="microphoneNotWorking"
                onChange={handleConditionChange}
                checked={conditions.microphoneNotWorking}
              />
            </label>
            <label>
              No Charger:
              <input
                type="checkbox"
                name="NoCharger"
                onChange={handleConditionChange}
                checked={conditions.NoCharger}
              />
            </label>
            {adjustedPrice !== null && (
              <div>
                <p>Adjusted Price: {adjustedPrice}</p>
                <OrderSummary
                  mobileDetails={[
                    {
                      ...mobileDetails[selectedMobileIndex],
                      totalPrice: adjustedPrice,
                    },
                  ]}
                />
                <button onClick={handleSave}>Save Order Summary</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileDetails;
