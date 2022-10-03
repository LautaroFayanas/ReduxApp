import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByDos } from './store/slices/counter/CounterSlice';
import './App.css'

function App() {

  const { counter } = useSelector(state => state.counter);
  const { counterDecrement } = useSelector(state => state.counter);
  const { counterincrementByDos } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Vite + React</h1>
      {counter}
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment 
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement 
        </button>
        <button onClick={() => dispatch(incrementByDos())}>
          Increment by 2 
        </button>
      </div>
    </div>
  )
}

export default App
