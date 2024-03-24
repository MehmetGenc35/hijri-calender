// AladhanHicriConverter.js dosyası
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const useDate = () => {
  const [hijriDay, setHijriDay] = useState("");
  const [hijriMonth, setHijriMonth] = useState("");
  const [hijriYear, setHijriYear] = useState("");
  const [date, setDate] = useState(moment());
  const currentDate = date.format('DD-MM-YYYY');

  useEffect(() => {
    fetch(`http://api.aladhan.com/v1/gToH?date=${currentDate}`)
      .then(response => response.json())
      .then(data => {
        const date = data.data.hijri.date;
        setHijriDay(date.slice(0, 2));
        setHijriMonth(date.slice(3, 5));
        setHijriYear(date.slice(6, 10));
      });
  }, [date]);

 /* useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(moment());
    }, 86400000);

    return () => clearInterval(intervalId);
  }, []);*/



  return {hijriDay,hijriMonth,hijriYear}
};

export default useDate;