import React from 'react'
import About from './assets/About'
import { Route,Routes} from 'react-router-dom'
import Navbar from './assets/Navbar'
import Navbar1 from './assets/Navbar1'
const App = () => {
  return (
    <div>
      <Navbar/>
    
     
     <Routes>
      <Route path='/' element={<Navbar1/>}/>

     </Routes>
    </div>
  )
}

export default App
