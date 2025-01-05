import React,{useState} from 'react'

const GoalCard = (props) => {

  const newColor = props.color; // Hover color state

  const changeHoverColor = () => {
    document.documentElement.style.setProperty('--hover-color', newColor); // Update CSS variable
  };

  const handleClick = () => {
    console.log(props.links);
    console.log(props.color) // Opens in a new tab
  };

    return (
        <div className='GoalCard'>
            <div className='container'>
                <div className="card" onMouseEnter={() => changeHoverColor()}>
                    <div className="img" data-text={props.name}>
                        <img className='Picture' src={props.img} alt={props.name} />
                    </div>
                    <div className='content'>
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                        {/* <a href="www.youtube.com" target="_blank">
                            <button className='btn' >Read more</button>
                        </a> */}
                        <button className="btn" onClick={handleClick}>Read more</button>
                        {/* <a href='#'>Read More</a> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GoalCard
