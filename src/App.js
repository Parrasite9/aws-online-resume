import React from 'react'
import './resume.css'

function App() {
  return (
    <div className='App'>
      <div className="App_container">

        <header>
          <img src="https://i.imgur.com/1uERBnk.jpg" alt="Headshot" className='headshot' />
          <h1 className='name'>Isaiah Johnson</h1>
          <p className='contactInfo'> <a href="tel:+18065352419">+18065352419</a> | <a href="mailto:johnsonisaiah13@yahoo.com">johnsonisaiah13@yahoo.com</a> | <a href="https://www.linkedin.com/in/isaiah-johnson123/">LinkedIn</a> | <a href="https://github.com/Parrasite9">GitHub</a> | <a href="https://www.johnsonwebsolutions.com/">Portfolio</a></p>
        </header>

        <section className='education'>
          <h2>Education</h2>
          <ul>
          <div class="parent">
            <div class="div1"><strong>General Assembly</strong></div>
            <div class="div2"><strong>October 2022 - January 2023</strong></div>
            <div class="div3">Associate's, Software Engineering</div>
            <div class="div4">4 GPA</div>
          </div>

          <div class="parent">
            <div class="div1"><strong>Purdue University Global</strong></div>
            <div class="div2"><strong>October 2019 - November 2020</strong></div>
            <div class="div3">Bachelor's in Criminal Justice</div>
            <div class="div4">3.53 GPA</div>
          </div>
          </ul>
        </section>

        <section className='employmentHistory'>
          <h2>Employment History</h2>
          <div className="timeline">
            <h4>The Walt Disney Company, Orlando FL USA - Cast Member (June 2023 – Oct 2023)</h4>
            <ul>
              <li>Spearheaded conflict resolution strategies, enhancing customer experience using problem-solving skills in a high-pressure environment.</li>
              <li>Developed and implemented client-focused solutions, demonstrating adaptability and technical proficiency.</li>
            </ul>

            <h4>General Assembly, New York NY USA - Software Engineer Fellow (October 2022 - January 2023)</h4>
            <ul>
              <li>Executed multiple full-stack projects using HTML, CSS, JavaScript, React, Node.js; significantly improved web development expertise.</li>
              <li>Led code reviews, elevating code quality through comprehensive feedback and collaboration.</li>
              <li>Developed WordPress sites integrating PHP and Elementor, enhancing dynamic web capabilities and user engagement.</li>
            </ul>

            <h4>SeductiveBox, Fort Stockton TX USA - Web Developer (January 2020 - January 2023)</h4>
            <ul>
              <li>Engineered robust websites using HTML, CSS, JavaScript, jQuery; focused on SEO optimization and responsive design.</li>
              <li>Implemented advanced WordPress functionalities with PHP, achieving a 2500% increase in profitability through
                  strategic web development.</li>
              <li>Managed web hosting and maintenance, aligning with client specifications for optimal performance.</li>
            </ul>
          </div>
        </section>

        <section className='projects'>
          <h2>Projects</h2>
          <h4>Disney+</h4>
          <ul>
            <li>Engineered Firebase backend for robust user authentication and dynamic data handling.</li>
            <li>Replicated Disney+ interface using React.js, showcasing proficiency in UI/UX design and front-end development.</li>
            <li>
              <a href="https://github.com/Parrasite9/disneyplus">Github</a> |  
              <a href="https://disneyplusclone-23173.web.app/">Project</a> | 
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7038612830673137664/">Demo Video</a>
            </li>
          </ul>

          <h4>CutCritic</h4>
          <ul>
            <li>Integrated third-party APIs for enhanced state licensing verification.</li>
            <li>Developed comprehensive user authentication system using Firebase and React.js, focusing on secure and dynamic web
                interfaces.</li>
            <li>
              <a href="https://github.com/Parrasite9/cutcritic">Github</a> |  
              <a href="https://cutcritic-940d1.web.app/">Project</a> | 
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7090100977105543168/">Demo Video</a>
            </li>
          </ul>
        </section>

        <section className='skills'>
          <h2>Skills/Certifications</h2>
          <ul>
            <li><strong>Cloud Technologies:</strong> AWS Cloud Practitioner</li>
            <li><strong>Languages:</strong> JavaScript, HTML/CSS, PHP, SQL, Python</li>
            <li><strong>Frameworks:</strong> Node.js, React.js, Django, Express.js, Redux</li>
            <li><strong>Tools & Technologies:</strong> Firebase, AWS, Google Maps API, WordPress, Elementor, GitHub, Google Analytics</li>
            <li><strong>Database:</strong> MongoDB, MySQL</li>
            <li><strong>Other:</strong> UI/UX Design, SEO, Git, Zapier, MailChimp</li>
          </ul>
        </section>

        <section className='accomplishments'>
          <h2>Accomplishments</h2>
          <ul>
            <li>Successfully Completed a Rigorous Software Engineering Immersive Program at General Assembly.</li>
            <li>Led the Development of a High-Fidelity Disney+ Clone as a Capstone Project.</li>
            <li>Achieved a 2500% Increase in Profit through Strategic Web Development Initiatives at SeductiveBox.</li>
            <li>Recognized for Outstanding Team Collaboration and Leadership at General Assembly.</li>
            <li>Initiated and Authored Technical Blog Posts on Emerging Web Technologies.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App
