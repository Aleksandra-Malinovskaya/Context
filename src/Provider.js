import React, { useContext} from 'react';
import Context from './Context';
import moon from './moon.jpg';
import sun from './sun.jpg';
import Switch from './Switch';
import './App.css';

const Provider = () => {
  const {state} = useContext(Context);

  return (
    <div 
      style={{
        background: state === true ? 'black' : 'white',
        color: state === false ? 'black' : 'white'
      }}
    >
      <div className='subject'>
      <img src = {state === true ? moon : sun} alt='img'/>
      <p>Toggle Dark or Light customize your interface</p>
      <Switch />
      </div>
    </div>
  );
};

export default Provider;