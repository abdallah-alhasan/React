import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './Actions'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
