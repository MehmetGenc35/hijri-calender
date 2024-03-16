
import React from 'react'
import './calender-style.scss'
import DateTop from './date'
import HicriDate from './hicri-date'
import DayRamadan from './dayRamadan'




const Outside = () => {
    
  return (
    <div className='outside'>
        <DateTop/>
        <DayRamadan/>
        <HicriDate/>          

    </div>
  )
}

export default Outside