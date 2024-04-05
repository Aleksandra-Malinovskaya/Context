import './App.css';
import Context from './Context';
import Switch from './Switch';
import Provider from './Provider';
import {useContext} from 'react';

function App() {
  const {state} = useContext(Context);

  return (
    <Provider>
      <Switch />
      <div
      style={{
        background: state === true ? 'black' : 'white',
        color: state === false ? 'black' : 'white'
      }}
    >
      <h1>zzzzzzz</h1>
    </div>
    </Provider>
  );
}

export default App;
