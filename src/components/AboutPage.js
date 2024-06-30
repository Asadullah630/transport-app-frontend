import React from 'react'
import './AboutPage.css';
const AboutPage = () => {
  return (
    

    <div className='container-fluid cont' >
    <div className="about-container">
      <h1>About Our Transport App</h1>
      <section>
        <h2>Introduction</h2>
        <p>
          Our transport app is designed to provide convenient and reliable transportation services
          to users around Saudi Arabia. Whether you need to book a ride, find public transportation
          options, or track your journey, our app has you covered.
        </p>
      </section>
      <section>
        <h2>Features</h2>
        <ul>
          <li>Easy booking process</li>
          <li>Real-time vehicle tracking</li>
          <li>Provide safe transport</li>
          <li>Customer support</li>
          {/* Add more features here */}
        </ul>
      </section>
      <section>
        <h2>Team</h2>
        <p>
          Our team is dedicated to providing the best possible experience for our users. We're
          passionate about transportation and technology, and we're committed to continually
          improving our app to meet the needs of our users.
        </p>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions, feedback, or suggestions, please don't hesitate to contact us.
          You can reach us via email, phone, or through our website.<br/>
          Email: assadullah@gmail.com<br/>
          Phone num: 0590072986
        </p>
       
      </section>
    </div>
    </div>
  );
};



export default AboutPage
