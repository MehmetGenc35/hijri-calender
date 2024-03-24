

import React, { useContext } from 'react'
import StoreContext from '../../store/index.js';


const HicriDate = () => {
  let {hijriMonth,hijriYear}=useContext(StoreContext);

  let month=hijriMonth;
  const year=hijriYear;
  
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

month=month.startsWith('0')?month.slice(1):month;

  return (
    <div className='hicriDate' >
      <h2>{hicriAylar[month-1]}</h2>
      <h2>{year}</h2>
    </div>
  )
}
//Hicri Yıl = (Miladi Yıl - 622) * 33 / 32
export default HicriDate