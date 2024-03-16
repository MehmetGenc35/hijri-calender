// AladhanHicriConverter.js dosyası
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Converter = (number) => {
  const [hijriDate, setHijriDate] = useState("");
  const [date, setDate] = useState(moment());
  const currentDate = date.format('DD-MM-YYYY');

  useEffect(() => {
    fetch(`http://api.aladhan.com/v1/gToH?date=${currentDate}`)
      .then(response => response.json())
      .then(data => {
        const date = data.data.hijri.date;
        setHijriDate(date);
      });
  }, [date]);

  let hijriDay = hijriDate.slice(0, 2);
  let hijriMonth = hijriDate.slice(3, 5);
  let hijriYear = hijriDate.slice(6, 10);

  const obj = [hijriDay, hijriMonth, hijriYear];

  return obj[number];
};

export default Converter;