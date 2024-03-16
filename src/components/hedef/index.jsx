import React from 'react'
import './index.scss'
import Namaz from './namaz'
import Hedef from './hedef'
import EsmaulHusna from './esmaul-husna'
import Tesbih from './tesbih'

const Program = () => {
  return (
    <div className='program'>
        
        <EsmaulHusna/>
        <Tesbih/>
        <Namaz/>
        <Hedef/>
    </div>
  )
}

export default Program