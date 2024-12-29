import React from 'react'
import GoalCard from './GoalCard';

const ListGoals = (props) => {
    const data = props.data;

    const listItems = data.map((item)=>
    {
        return(
            <GoalCard id={item.id} name={item.name} description={item.description} img={item.img} link={item.link} color={item.color}/>
        )
    })
  return (
    <div className='list-items'>
        <div className='container'>
            {listItems}
        </div>
    </div>
  )
}

export default ListGoals
