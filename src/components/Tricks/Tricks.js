import React from 'react'
import './Tricks.css'
import Card from '../Card/Card'


const Tricks = ({ trickList }) => {
  const allTricks = trickList.map(trick => {
    return (
      <Card
        stance={trick.stance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.key}
      />
    )
  })
  return (
    <div className='tricks-container'>
      {allTricks}
    </div>
  )
}

export default Tricks;
