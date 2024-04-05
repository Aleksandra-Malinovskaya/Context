import './App.css';
import React, { useContext } from 'react';
import Context from './Context';

const Switch = () => {
  const {state, toggleTheme } = useContext(Context);
    
  return (
    <div>
        <h3>Dark/Light</h3>
     <label className="switch">
      <input
        type="checkbox"
        checked={state}
        onChange={toggleTheme}
      />
      <span className="slider round"></span>
    </label>
    </div>
  );
};

export default Switch;