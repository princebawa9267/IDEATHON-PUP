import React, { useState } from 'react'
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-scroll'
import logo from '../assets/Logos/blub-logo.webp'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // // Close sidebar when a link is clicked
    // const handleCloseSidebar = () => {
    //     setIsOpen(false);
    // }

    // Scroll Navbar
    const changeValueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 30 ? setNav(true) : setNav(false);
    }

    window.addEventListener("scroll", changeValueOnScroll);

    return (
        <header>
            <BootstrapNavbar expand="lg" className={`${nav === true ? "sticky" : ""}`}>
                <Container>
                    <BootstrapNavbar.Brand href="/">
                        <Link to='/' className='logo'>
                            <img src={logo} alt='logo' className='Picture img-fluid' style={{ height: "50px" }} />
                        </Link>
                    </BootstrapNavbar.Brand>
                    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
                        <i className={isOpen ? "bi bi-x fs-1" : "bi bi-list fs-1"}></i>
                    </BootstrapNavbar.Toggle>
                        <BootstrapNavbar.Collapse id="basic-navbar-nav" className={`sidebar ${isOpen ? "close" : ""}`}>
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Nav.Link>
                                <Nav.Link as={Link} to="Goals-Section" spy={true} smooth={true} offset={-80} duration={500}>Goals</Nav.Link>
                                <Nav.Link as={Link} to="home" spy={true} smooth={true} offset={-50} duration={500}>Schedule</Nav.Link>
                                <Nav.Link as={Link} to="prizing" spy={true} smooth={true} offset={-20} duration={500}>Prizes</Nav.Link>
                                <Nav.Link as={Link} to="/" spy={true} smooth={true} offset={50} duration={500}>Organizer</Nav.Link>
                                <Nav.Link as={Link} to="/" spy={true} smooth={true} offset={50} duration={500}>Sponsers</Nav.Link>
                                <Nav.Link as={Link} to="/" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Nav.Link>
                            </Nav>
                        </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>
            {/* <nav className='Navbar' id='Navbar'>
                    <a href='/' className='Logo'>
                        <img src={logo} alt='logo'/>
                    </a>
                    <ul>
                        <li className='nav-items'>
                            <Link to='/' spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='Goals' spy={true} smooth={true} offset={50} duration={500}>Goals</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='Schedule' spy={true} smooth={true} offset={50} duration={500}>Schedule</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='Organizer' spy={true} smooth={true} offset={50} duration={500}>Organsizer</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='ContactUs' spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link>
                        </li>
                        
                    </ul>
                </nav> */}
        </header>
    )
}

export default Navbar
