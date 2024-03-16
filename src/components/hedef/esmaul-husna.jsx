

import React from 'react'
import data from '../../data/zikir.json'
import Inner from '../bilgi/inner.jsx';
import Converter from '../tarih/script.js';

const EsmaulHusna = () => {
  let hijriDay=Converter(0);
  hijriDay=Number(hijriDay.startsWith('0')?hijriDay.slice(1):hijriDay);
  hijriDay=hijriDay===0?1:hijriDay;

  const id=data[hijriDay-1].id;
  const baslik=data[hijriDay-1].baslik;
  const paragraf=data[hijriDay-1].paragraf;

  return (
    <div className='esma'>
      <img className='box' src="../../public/img/BOX-2.svg" alt="" />
       <Inner key={id} baslik={baslik} paragraf={paragraf} /> 
    </div>
  )
}

export default EsmaulHusna