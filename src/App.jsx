import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { List } from './Components/List/List';
import Home from './Components/Home'
import './App.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/TuPedido" element={<List />}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
