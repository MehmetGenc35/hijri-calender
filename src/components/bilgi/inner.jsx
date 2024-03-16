

import React from 'react'

const Inner = ({baslik,paragraf,kaynak}) => {

  return (
    <>
        <h6>{baslik}</h6>
        <p>{paragraf}
        <br />
        <span><b>{kaynak}</b></span></p>
    </>
  )
}

export default Inner