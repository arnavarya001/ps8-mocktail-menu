
import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import Drinks from './components/Drinks'
import DrinkDetails from './components/DrinkDetails'
import NotFound from './components/NotFound'

function App(){
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/drinks">Drinks</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/drinks" element={<Drinks/>}/>
        <Route path="/drinks/:id" element={<DrinkDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
