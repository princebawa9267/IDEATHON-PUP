import './App.css'
import './Style/Navbar.css'
import './Style/HeroSection.css'
import './Style/GoalCard.css'
import './Style/Goals.css'
import './Style/parallaxEffect.css'
import './Style/Faq.css'
import './Style/Prizing.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-icons/font/bootstrap.min.css"
// import Navbar from './Compnents/Navbar' 
import Home from './Compnents/Sections/Home'
import Navbar from './Compnents/Navbar'
import GoalCard from './Compnents/Goals Cards/GoalCard'
import Goals from './Compnents/Sections/Goals'
import ParallaxEffect from './Compnents/Sections/parallaxEffect'
import Faq from './Compnents/Sections/Faq'
import Pricing from './Compnents/Sections/Prizing'
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Goals/>
      <ParallaxEffect/>
      <Pricing/>
      <Faq/>
    </>
  )
}

export default App
