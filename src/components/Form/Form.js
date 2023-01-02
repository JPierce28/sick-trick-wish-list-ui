import React, { useState } from 'react'
import './From.css'


const Form = (props) => {
  const[stance, setStance] = useState('')
  const[name, setName] = useState('')
  const[obstacle, setObstacle] = useState('')
  const[tutorial, setTutorial] = useState('')

  const submitTrick = event => {
    event.preventDefault()
    const newTrick = {stance, name, obstacle, tutorial}
    props.addTrick(newTrick)
    console.log(newTrick);
  }

  return (
    <div className='form'>
      <form>
        <input
        type='text'
        placeholder='Stance'
        name='stance'
        value={stance}
        onChange={event => setStance(event.target.value)}
        />
        <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={event => setName(event.target.value)}
        />
        <input
        type='text'
        placeholder='Obstacle'
        name='obstacle'
        value={obstacle}
        onChange={event => setObstacle(event.target.value)}
        />
        <input
        type='text'
        placeholder='Tutorial'
        name='tutorial'
        value={tutorial}
        onChange={event => setTutorial(event.target.value)}
        />
        <button onClick={event => submitTrick(event)}>SEND IT</button>
      </form>
    </div>
  )
}

export default Form
