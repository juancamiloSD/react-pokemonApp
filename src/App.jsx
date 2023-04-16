import { useDispatch, useSelector } from 'react-redux'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, decrement, IncrementByNumber } from './store/slices/counter'

function App() {

  const { counter, init } = useSelector( state => state.counter )
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>{counter}</h1> 
      <div className="card">
        <button 
          onClick={ () => dispatch( increment() ) }
          style={{ marginRight: '15px' }}
        >
          Increment
        </button>
        <button 
          onClick={ () => dispatch( decrement() ) }
          style={{ marginRight: '15px' }}
        >
          Decrement
        </button>
        <button 
          onClick={ () => dispatch( IncrementByNumber( init ) ) }
          style={{ marginRight: '15px' }}
        >
          IncrementByNumber { init }
        </button>
      </div>
    </div>
  )
}

export default App
