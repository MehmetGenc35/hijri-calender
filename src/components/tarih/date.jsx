
import moment from 'moment';
import React from 'react'

const DateTop = () => {

  const dateTime=moment();
  const date=dateTime.format('DD MMMM YYYY');
  


  return (
    <>
      <h3 className='date-top'>{date}</h3>
    </>
  )
}

export default DateTop