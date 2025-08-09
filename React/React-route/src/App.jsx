import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Brahmanandam from './pages/Brahmanandam'
import Sunil from './pages/Sunil'
import MSN from './pages/MSN'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/brahmi' element={<Brahmanandam/>}/>
        <Route path='/msn' element={<MSN/>}/>
        <Route path='/sunil' element={<Sunil/>} > 
          <Route path='meme' element={<p>Evarra nuvvu</p>}></Route>
        </Route>

        <Route path='*' element={ <NotFound/> }/>
        
        </Routes>
      </div>
    </div>
  )
}

export default App
