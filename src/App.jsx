import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './page/Homepage'
import Pesanan from "./component/pesanan"
import './App.css'
function App() {

  return (
    <div className="App">

      <Homepage />
      <Pesanan />
      
    </div>
  )
}
export default App
