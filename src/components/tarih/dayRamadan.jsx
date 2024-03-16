

import React from 'react'

import Converter from './script.js';

const DayRamadan = () => {
    
  
  let hijriDay=Converter(0);
  hijriDay=hijriDay.startsWith('0')?hijriDay.slice(1):hijriDay;
  
  return (
    <div className='countRamadanDay'>
      {hijriDay}
    </div>
  )
}

export default DayRamadan