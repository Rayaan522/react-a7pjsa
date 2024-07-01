import React, { createContext, useState } from 'react';

const SimpleContext = createContext('');

const MyProvider = ({ children }) => {
  const [count, setCount] = useState('####');
  return (
    <SimpleContext.Provider value={count}>
      <div> {children}</div>
    </SimpleContext.Provider>
  );
};
export { MyProvider, SimpleContext };
