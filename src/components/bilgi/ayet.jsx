
import React, { useContext } from 'react'
import Inner from './inner'
import data from '../../data/ayet.json'
import StoreContext from '../../store/index.js';

const Ayet = () => {
  
  let {hijriDay}=useContext(StoreContext);

  hijriDay=Number(hijriDay.startsWith('0')?hijriDay.slice(1):hijriDay);
  hijriDay=hijriDay==0? 1 : hijriDay;
  

  const id=data[hijriDay-1].id;
  const baslik=data[0].baslik;
  const paragraf=data[hijriDay-1].paragraf;
  const kaynak=data[hijriDay-1].kaynak;

  return (
    <div className='general'>
        
        <Inner className='inner' key={id} baslik={baslik} paragraf={paragraf} kaynak={kaynak} />
    </div>
  )
}

export default Ayet