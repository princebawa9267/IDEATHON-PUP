import React from 'react';
import { HB } from '../../assets';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg={7}>
            <div className='hero_text text-center'>
              <h1 className='text-white'>Ideathon</h1>
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
            <div className='position:relative' style={{display:'grid', placeItems:'center', height:'100'}} >
              <img src={HB} className='img-fluid' alt='Hero' style={{maxHeight:'35rem'}} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
