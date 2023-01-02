import React from 'react'
import './Card.css'

const Card = ({ stance, name, obstacle, tutorial }) => {
  return (
    <div className='trick-card'>
      <h3>{'Stance: ' + stance}</h3>
      <p>{'Name: ' + name}</p>
      <p>{'Obstacle: ' + obstacle}</p>
      <p>{tutorial}</p>
    </div>
  )
}

export default Card;
