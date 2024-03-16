import React from 'react'
import data from '../../data/tesbih.json'
import Inner from '../bilgi/inner.jsx'
import Converter from '../tarih/script.js';

const Tesbih = () => {

  let hijriDay=Converter(0);
  hijriDay=Number(hijriDay.startsWith('0')?hijriDay.slice(1):hijriDay);
  hijriDay=hijriDay===0?1:hijriDay;

  const id=data[0].id;
  const tesbih=data[0].tesbih;

  return (
    <div className='esma'>
      <img className='box' src="../../public/img/BOX-2.svg" alt="" />
        <Inner key={id} baslik="Tesbih" paragraf={tesbih}/>
    </div>
  )
}

export default Tesbih