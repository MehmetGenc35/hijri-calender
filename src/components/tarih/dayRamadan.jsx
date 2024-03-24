

import React, { useContext } from 'react'
import StoreContext from '../../store/index.js';

const DayRamadan = () => {
  let {hijriDay}=useContext(StoreContext);
  

  hijriDay=hijriDay.startsWith('0')?hijriDay.slice(1):hijriDay;
  
  return (
    <div className='countRamadanDay'>
      {hijriDay}
    </div>
  )
}

export default DayRamadan