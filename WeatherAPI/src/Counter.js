import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Button({onClick, action})
  {
    return (<button onClick={() => onClick(action)}>{action}</button>)
  }


function Counter() {

  const [counter, setCounter] = useState(0);

  function handleClick(action)
  {
    if(action == 'Increase')
      setCounter(counter + 1);
    else
      setCounter(counter - 1);
  }

  return (
    <div className="App">
      <Button onClick = {handleClick} action= 'Increase'></Button>
      <Button onClick = {handleClick} action= 'Decrease'></Button>
      <div>Counter: {counter}</div>
    </div>
  );
}

export default Counter;
