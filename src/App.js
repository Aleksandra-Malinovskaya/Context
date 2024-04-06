import './App.css';
import Context from './Context';
import Provider from './Provider';
import {useState} from 'react';

function App() {
  const [state, setState] = useState(true);

  const toggleTheme = () => {
    setState(!state);
  };
  

  return (
    <Context.Provider value = {{state, toggleTheme}}>
      <Provider />
    </Context.Provider>
  );
}

export default App;
