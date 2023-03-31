
import './App.css'
import Header from './component/Header/Header'
import Cart from './component/Cart/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from 'react'

function App() {
  const [times, setTime] = useState(0);
  const [title, setTitle] = useState([])
    const handleTitle =(title) =>{
      setTitle(p=>[...p,<br />,<br/>,title,])
    }
    console.log(title)
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
      <Cart handleTitle={handleTitle} handleTime={handleTime} time={times} title={title}></Cart>
    </div>
  )
}

export default App
