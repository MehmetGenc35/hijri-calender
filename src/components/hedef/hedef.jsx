

import React, { useEffect } from 'react'
import { useState } from 'react'
import Converter from '../tarih/script';
import { MdOutlineCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Hedef = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [btnVal, setBtnVal] = useState(false);
 
  const changeInput = () => {
  if (text !== "" && items.length < 3) {
    setItems([...items, text]);
    setText("");
  }    
  }

  let hijriDay=Converter(0);
  hijriDay=Number(hijriDay.startsWith('0')?hijriDay.slice(1):hijriDay);
  hijriDay=hijriDay===0?1:hijriDay;

  //tabloyu locale kaydetme
  const changeButtonValue=() => {
    const newItems = [...items];
    setItems(newItems);
    localStorage.setItem(`${hijriDay}. gün hedef`, JSON.stringify(newItems));
  }

useEffect(() => {
  const savedItems = JSON.parse(localStorage.getItem(`${hijriDay}. gün hedef`));
  if (savedItems) {
    setItems(savedItems);
  } else {
    localStorage.setItem(`${hijriDay}. gün hedef`, JSON.stringify(items));
  }
}, [hijriDay]);


//-----------------------------------------------------------------------

  return (

    <div className='hedef'>
      <input 
      className='hedef-input' 
      type="text" 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
      placeholder="günlük en fazla 3 hedef yazınız" maxLength={25} />
      <button className='hedef-button' onClick={changeInput}>ekle</button>

      <table className='hedef-table'>
        <thead>
          <tr>
            <th>gün</th>
            <th>hedef</th>
            <th>durum</th>
          </tr>
        </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{hijriDay}</td>
            <td>{item}</td>
            <td><MdOutlineCancel /><TiTick /></td>
          </tr>
        ))}
      </tbody>

      </table>
      <button onClick={changeButtonValue}  className='hedef-button' style={{backgroundColor: 'green', color: 'white', borderRadius: '20px'}}>kaydet</button>

    </div>


  )
}

export default Hedef


