import React, { useEffect, useState } from 'react';
import { HB } from '../../assets';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Home = () => {

  // const [mousePosition, setMousePosition] = useState({
  //   x : 0,
  //   y : 0,
  // });

  // console.log(mousePosition);

  // useEffect(() =>
  // {
  //   const mouseMove = e =>
  //   {
  //       setMousePosition({x: e.clientX, y : e.clientY })
  //   }
  //   window.addEventListener("mousemove",mouseMove);
  //   return () =>
  //   {
  //     window.removeEventListener("mousemove",mouseMove);
  //   }
  // },[]);

  // const variants = {
  //   default : {
  //     x : mousePosition.x -16,
  //     y : mousePosition.y -16
  //   },
  //   text : {
  //     height : 150,
  //     width : 150,
  //     x : mousePosition.x - 90,
  //     y : mousePosition.y - 90,
  //     backgroundColor : "white",
  //     mixBlendMode : "difference"
  //   }
  // }

  // const [cursorVariant,setCursorVariant] = useState("default");

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default")



  return (
    <section id='home' className='hero_section'>
      <Container>
        <Row>
          <Col lg={7}>
            <div /*  onMouseEnter={textEnter} onMouseLeave={textLeave}  */ className='hero_text text-center'>
              <h1  className='text-white'>Ideathon</h1>
              <h2 className='text-white'>What is Ideathon 2025?</h2>
              <p className='text-white' pt-2 pb-4>
                Punjabi University Patiala Teams are actively participating in
                google solution challenge from some past years.The Ideathon
                2025 is based on giving solutions on UN 17 Sustainable goals
                And to compete and winning cash prizes and certifications
                Also mention that this is a pan india level ideathon
              </p>
              <h2 className='text-white'>Vision</h2>
              <p className='text-white' pt-2 pb-4>
                To make solutions on UN 17 sustainable goals.
              </p>
              <h2 className='text-white'>Mission</h2>
              <p className='text-white' pt-2 pb-4>
                To inspire students to adopt entrepreneurial endeavours to
                develop their innovation, work on profitable and socially
                responsible projects and adhere to high ethical standards.
              </p>
              <button className='register_now' style={{borderRadius:'1rem', marginBottom:"3rem"}}>
                  Register Now 
              </button>
            </div>
          </Col>
          <Col lg={5} className='mb-5 mb-lg-0'>
            <div  className='position:relative' style={{display:'grid', placeItems:'center', height:'100', transition:"all "}} >
              <img /*onMouseEnter={textEnter} onMouseLeave={textLeave}*/ src={HB} className='img img-fluid' alt='Hero' style={{maxHeight:'35rem'}} />
            </div>
          </Col>
        </Row>
      </Container>
      {/* <motion.div className='cursor' variants={variants} animate={cursorVariant}/> */}
    </section>
  );
};

export default Home;
