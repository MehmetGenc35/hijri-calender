

import React from 'react'
import Converter from './script.js';


const HicriDate = () => {
  let mounth=Converter(1);
  const year=Converter(2);
  const hicriAylar = [
"MUHARREM",
"SAFAR",
"REBİ'UL EVVEL",
"REBİ'UL AHİR",
"CEMAZİYE'L EVVEL",
"CEMAZİYE'L AHİR",
"RECEP",
"ŞABAN",
"RAMAZAN",
"ŞEVVAL",
"ZİLKADE",
"ZİLHİCCE"
];

mounth=mounth.startsWith('0')?mounth.slice(1):mounth;

  return (
    <div className='hicriDate' >
      <h2>{hicriAylar[mounth-1]}</h2>
      <h2>{year}</h2>
    </div>
  )
}
//Hicri Yıl = (Miladi Yıl - 622) * 33 / 32
export default HicriDate