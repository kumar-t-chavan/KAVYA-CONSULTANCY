import React from 'react'
import About from './assets/About'
import { Route,Routes} from 'react-router-dom'
import Navbar from './assets/Navbar'
import Navbar1 from './assets/Navbar1'
import Services from './Services'
const App = () => {
  return (
    <div>
      <Navbar/>
    
     
     <Routes>
      <Route path='/' element={<Navbar1/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>

     </Routes>
    </div>
  )
}

export default App
