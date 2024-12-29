import React from 'react'
import GoalJSON from '../Goals Cards/GoalJSON'
import ListGoals from '../Goals Cards/ListGoals'

const Goals = () => {
  return (
    <div className='Goals-Section'>
      <h1>17 Sustainable goals</h1>
      <ListGoals data={GoalJSON}/>
    </div>
  )
}

export default Goals
