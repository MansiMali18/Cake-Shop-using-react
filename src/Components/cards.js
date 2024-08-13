import React from 'react'
import "./cards.css"
function Cards(props) {
  const { ImgURL, title, description } = props;
  return (
    <div className='cards-container'>
      <img src={ImgURL} className='cake-img' />
      <h1 className='title'>{title}</h1>
      <h2 className='description'>{description}</h2>
    </div>
    
  )
}

export default Cards