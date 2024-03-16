import { useState } from 'react'
import Outside from './components/tarih/outside'
import './App.css'
import Index from './components/bilgi'
import Information from './components/bilgi'
import Program from './components/hedef'
import TextRamadan from './components/ramazan'



function App() {
  

  return (
    <>
      <TextRamadan/>
      <div className="page">      
      <Information/>
      <Outside/>
      <Program/>
      </div>
    </>
  )
}

export default App
