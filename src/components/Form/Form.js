import React, { useState } from 'react'
import './From.css'


const Form = (props) => {
  const[stance, setStance] = useState('')
  const[name, setName] = useState('')
  const[obstacle, setObstacle] = useState('')
  const[tutorial, setTutorial] = useState('')

  const submitTrick = event => {
    event.preventDefault()
    console.log(stance);
    const newTrick = {stance, name, obstacle, tutorial}
    props.addTrick(newTrick)
    console.log(newTrick);
  }

  return (
    <div className='form'>
      <form>
        <select className='stance-select' onChange={event => setStance(event.target.value)}>
          <option value='Regular'>Regular</option>
          <option value='Switch'>Switch</option>
        </select>
        <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={event => setName(event.target.value)}
        />
        <select className='obstacle-select' onChange={event => setObstacle(event.target.value)}>
          <option 
          value='Flatground'>Flatground</option>
          <option value='Ledge'>Ledge</option>
          <option value='Stairs'>Stairs</option>
          <option value='Pool'>Pool</option>
        </select>
        <input
        type='text'
        placeholder='Tutorial'
        name='tutorial'
        value={tutorial}
        onChange={event => setTutorial(event.target.value)}
        />
        <button className='submit-button' onClick={event => submitTrick(event)}>SEND IT</button>
      </form>
    </div>
  )
}

export default Form
