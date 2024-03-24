import React, { useContext } from 'react'
import data from '../../data/tesbih.json'
import Inner from '../bilgi/inner.jsx'
import StoreContext from '../../store/index.js';

const Tesbih = () => {
  let {hijriDay}=useContext(StoreContext);

  hijriDay=Number(hijriDay.startsWith('0')?hijriDay.slice(1):hijriDay);
  hijriDay=hijriDay==0? 1 : hijriDay;

  const id=data[hijriDay-1].id;
  const tesbih=data[hijriDay-1].tesbih;

  return (
    <div className='esma'>
      <img className='box' src="../../public/img/BOX-2.svg" alt="" />
        <Inner key={id} baslik="Tesbih" paragraf={tesbih}/>
    </div>
  )
}

export default Tesbih