import React from 'react'
import Navbar from './assets/Navbar'
import Hero from './assets/Hero'
import Mainsection from './assets/Mainsection'
import { Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
    
     
     <Routes>
      <Route path='/' element={<Hero/>}/>
       <Route path='/about' element={ <Mainsection/>}></Route>
     </Routes>
    </div>
  )
}

export default App
