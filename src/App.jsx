import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Cart from './component/Cart/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App row">
      <Header></Header>
      <Cart></Cart>
    </div>
  )
}

export default App
