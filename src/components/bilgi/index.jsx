import Ayet from './ayet'
import Hadis from './hadis'
import './index.scss'

import React from 'react'
import Dua from './dua'

const Information = () => {
  return (
    <div className='information'>
        <Ayet/>
        <Hadis/>
        <Dua/>
    </div>
  )
}

export default Information