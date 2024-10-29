import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './page/Homepage'
import Pesanan from "./page/pesanan"
import './App.css'

//import routes
import Routes from './routes/Routes';
import NavbarWithSimpleLinks from './component/Navbar'



function App() {

  return (
    
    <div className="App">

      <NavbarWithSimpleLinks />

     <Routes 
   
      
      
     />
      
    </div>
  )
}
export default App
