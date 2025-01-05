import React from 'react'
import Banner from "../../assets/ParallaxEffect/banner2.jpeg"

const ParallaxEffect = () => {
  return (
    <div className="parallaxOrImageShow">
      <div className="bg_parallax_scroll">
      </div>
      <img src={Banner} alt='Banner'/>
    </div>
    
  )
}

export default ParallaxEffect
