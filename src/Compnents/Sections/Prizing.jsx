import React, { useEffect } from 'react'

const PrizeCard = ({ iconClass, title, amount }) => (
    <div className="prize-card">
      <div className="gift-lid">
        <i className={iconClass}></i>
      </div>
      <div className="gift-body">
        <h2>{title}</h2>
        <p>{amount}</p>
      </div>
      <div className="glow"></div>
    </div>
  );

const Pricing = () => {
    useEffect(() => {
        const prizeCards = document.querySelectorAll('.prize-card');
        
        prizeCards.forEach((card, index) => {
          card.style.animationDelay = `${index * 0.2}s`;
        });
      }, []);
  return (
    <div id='prizing' className='pricing-container'>
      <header >
        <h1>Ideathon Prizes</h1>
        <p>The most exciting rewards for our winners!</p>
      </header>
      <div className="prizes-container">
        <PrizeCard iconClass="fas fa-trophy" title="1st Prize" amount="INR 5k" />
        <PrizeCard iconClass="fas fa-medal" title="Runner-Up" amount="INR 3k" />
        <PrizeCard iconClass="fas fa-award" title="2nd Runner-Up" amount="INR 2k" />
        <PrizeCard iconClass="fas fa-star" title="3rd Runner-Up" amount="INR 1.5k" />
        <PrizeCard iconClass="fas fa-thumbs-up" title="Compilation" amount="INR 1k" />
      </div>
    </div>
  )
}

export default Pricing
