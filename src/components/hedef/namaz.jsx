import React, { useState, useEffect } from 'react';
import Converter from '../tarih/script';

const Namaz = () => {
  const [checkboxes, setCheckboxes] = useState([false, false, false, false, false]);

  let hijriDay=Converter(0);
  hijriDay=Number(hijriDay.startsWith('0')?hijriDay.slice(1):hijriDay);
  hijriDay=hijriDay===0?1:hijriDay;

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
    localStorage.setItem(`${hijriDay}. gün`, JSON.stringify(newCheckboxes));
  };

useEffect(() => {
  const savedCheckboxes = JSON.parse(localStorage.getItem(`${hijriDay}. gün`));
  if (savedCheckboxes) {
    setCheckboxes(savedCheckboxes);
  } else {
    localStorage.setItem(`${hijriDay}. gün`, JSON.stringify(checkboxes));
  }
}, [hijriDay]);

  const vakitler=["sabah","öğle", "ikindi", "akşam", "yatsı"];

  return (
    <div className='namaz'>
      
      <h6>Namazlarım</h6>
      <div className="checkboxes">
        {checkboxes.map((checked, index) => (
        <label key={index} style={{fontSize: '15px'}}>
          <input
            style={{width: '15px', height: '15px'}}
            type="checkbox"
            checked={checked}
            onChange={() => handleCheckboxChange(index)}
            
          />
          {vakitler[index]} 
        </label>
      ))}
      </div>

    </div>
  );
};

export default Namaz;