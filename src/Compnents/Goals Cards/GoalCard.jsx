import React,{useState} from 'react'

const GoalCard = (props) => {

    const [color, setColor] = useState('red'); // Hover color state

  const changeHoverColor = (newColor) => {
    document.documentElement.style.setProperty('--hover-color', newColor); // Update CSS variable
    setColor(newColor);
  };

    return (
        <div className='GoalCard'>
            <div className='container'>
                <div className="card" onMouseEnter={() => changeHoverColor('green')} onMouseLeave={() => changeHoverColor('red')}>
                    <div className="img" data-text={props.name}>
                        <img className='Picture' src={props.img} alt={props.name} />
                    </div>
                    <div className='content'>
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                        <button className='btn'>Read more</button>
                        {/* <a href='#'>Read More</a> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GoalCard
