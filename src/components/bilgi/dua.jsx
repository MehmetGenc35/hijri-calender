

import React from 'react'
import data from '../../data/dua.json'
import Inner from '../hedef/inner.jsx';
import Converter from '../tarih/script.js';

const Dua = () => {
  let hijriDay=Converter(0);
  hijriDay=Number(hijriDay.startsWith('0')?hijriDay.slice(1):hijriDay);
  hijriDay=hijriDay===0?1:hijriDay;

  const id=data[hijriDay-1].id;
  const dua=data[hijriDay-1].dua;



  return (
    <div className='general'>
        <Inner key={id} baslik="Efendimizden Dualar" dua={dua} />
        
    </div>
  )
}

export default Dua