import './App.css'
import './Style/Navbar.css'
import './Style/HeroSection.css'
import './Style/GoalCard.css'
import './Style/Goals.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-icons/font/bootstrap.min.css"
// import Navbar from './Compnents/Navbar' 
import Home from './Compnents/Sections/Home'
import Navbar from './Compnents/Navbar'
import GoalCard from './Compnents/Goals Cards/GoalCard'
import Goals from './Compnents/Sections/Goals'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Goals/>
    </>
  )
}

export default App
