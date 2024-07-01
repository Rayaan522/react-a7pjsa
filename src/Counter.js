import React, { useContext } from 'react';
import { MyContext } from './context/MyContext';

const Counter = () => {
  const { state, setState } = useContext(MyContext);
  return <div>{state}</div>;
};
export default Counter;
