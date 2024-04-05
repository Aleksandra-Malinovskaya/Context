import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ child }) => {
  const [state, setState] = useState(true);

  const toggleTheme = () => {
    setState(!state);
  };

  return (
    <Context.Provider value={{state, toggleTheme}}>
      {child}
    </Context.Provider>
  );
};

export default Provider;