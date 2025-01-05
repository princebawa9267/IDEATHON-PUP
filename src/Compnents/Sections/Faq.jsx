import React , { useEffect }from 'react'
import { handleScrollEffect } from './scrollEffect';

const Faq = () => {

    useEffect(() => {
        // Initialize scroll effect
        const cleanup = handleScrollEffect('.faq-box', 'show');
    
        // Clean up scroll listener on unmount
        return () => cleanup();
      }, []);

    return (
        <div id='faq' className='faq-container'>
            <h1>Hackathon FAQs</h1>
            <div class="faq-box">
                <h2>What is a Hackathon?</h2>
                <p>A Hackathon is an event where individuals or teams collaborate intensively on software projects, solving challenges in a limited time.</p>
            </div>
            <div class="faq-box">
                <h2>Who all can participate?</h2>
                <p>Anyone with a passion for coding, problem-solving, or design can participate!</p>
            </div>
            <div class="faq-box">
                <h2>When is the Hackathon?</h2>
                <p>The Hackathon will be held on [Insert Date Here].</p>
            </div>
            <div class="faq-box">
                <h2>Where is it being conducted?</h2>
                <p>The Hackathon will be conducted at [Insert Venue Here].</p>
            </div>
            <div class="faq-box">
                <h2>Is there any registration fee?</h2>
                <p>No, the Hackathon is completely free of cost!</p>
            </div>
            <div class="faq-box">
                <h2>Can I register individually?</h2>
                <p>Yes, you can register individually or as part of a team.</p>
            </div>
            <div class="faq-box">
                <h2>How big can my team be?</h2>
                <p>Teams can have up to 4 members.</p>
            </div>
            <div class="faq-box">
                <h2>Will there be food arrangements?</h2>
                <p>Yes, food and refreshments will be provided during the event.</p>
            </div>
            <div class="faq-box">
                <h2>What are the criteria for short-listing the teams?</h2>
                <p>Teams will be shortlisted based on innovation, feasibility, and presentation of their projects.</p>
            </div>
            <div class="faq-box">
                <h2>What do I need during the event?</h2>
                <p>Bring your laptops, chargers, and any necessary tools or software for development.</p>
            </div>
            <script src="script.js"></script>
        </div>
    )
}

export default Faq
