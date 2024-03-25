import React, { useState, useEffect, useContext } from 'react';
import StoreContext from '../../store';

const Namaz = () => {
const [checkboxes, setCheckboxes] = useState({
  sabah: false,
  ögle: false,
  ikindi: false,
  aksam: false,
  yatsi: false,
});


  let {hijriDay}=useContext(StoreContext);

  hijriDay=Number(hijriDay.startsWith('0')?hijriDay.slice(1):hijriDay);
  hijriDay=hijriDay==0? 1 : hijriDay;

  const handleCheckboxChange = (index) => {
    const arr = Object.keys(checkboxes);
    const key = arr[index];
    const newCheckboxes = { ...checkboxes };
    newCheckboxes[key] = !newCheckboxes[key];
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
  const checkboxesArray = Object.values(checkboxes);

  return (
    <div className='namaz'>
      
      <h6>Namazlarım</h6>
      <div className="checkboxes">
        {checkboxesArray.map((checked, index) => (
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