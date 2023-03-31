
import './App.css'
import Header from './component/Header/Header'
import Cart from './component/Cart/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from 'react'

function App() {
  const [times, setTime] = useState(0);
  let sum = 0;
  const handleTime = (props) =>{
      const previousTime = JSON.parse(localStorage.getItem('totalTime'))
      if(previousTime){
        const sum = previousTime + props;
        localStorage.setItem('totalTime', sum)
        setTime(sum)
      }
      else{
        localStorage.setItem('totalTime', props)
        setTime(props)
      }
    }
  return (
    <div className="App">
      <Header></Header>
      <Cart handleTime={handleTime} time={times}></Cart>
    </div>
  )
}

export default App
