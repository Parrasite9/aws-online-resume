import React from 'react'
import './resume.css'

function App() {
  return (
    <div className='App'>
      <div className="App_container">

        <header>
          <img src="https://i.imgur.com/1uERBnk.jpg" alt="Headshot" className='headshot' />
          <h1 className='name'>Isaiah Johnson</h1>
          <p className='contactInfo'>+18065352419 | johnsonisaiah13@yahoo.com | [LinkedIn](https://www.linkedin.com/in/isaiah-johnson123/) | [GitHub](https://github.com/Parrasite9) | [Personal Website](https://www.johnsonwebsolutions.com/)</p>
        </header>

        <section className='employmentHistory'>
          <h2>Employment History</h2>
          <div className="timeline">
            <p>The Walt Disney Company, Orlando FL USA - Cast Member (June 2023 – Oct 2023)</p>
            <p>General Assembly, New York NY USA - Software Engineer Fellow (October 2022 - January 2023)</p>
            <p>SeductiveBox, Fort Stockton TX USA - Web Developer (January 2020 - January 2023)</p>
          </div>
        </section>

        <section className='education'>
          <h2>Education</h2>
          <ul>
            <li>Associate's in Software Engineering - General Assembly (October 2022 - January 2023, GPA: 4)</li>
            <li>Bachelor's in Criminal Justice - Indiana University-Purdue University - Indianapolis (October 2019 - November 2020, GPA: 3.53)</li>
          </ul>
        </section>

        <section className='skills'>
          <h2>Skills/Certifications</h2>
          <ul>
            <li>Cloud Technologies: AWS Cloud Practitioner</li>
            <li>Languages: JavaScript, HTML/CSS, PHP, SQL, Python</li>
            <li>Frameworks: Node.js, React.js, Django, Express.js, Redux</li>
            <li>Tools & Technologies: Firebase, AWS, Google Maps API, WordPress, Elementor, GitHub, Google Analytics</li>
            <li>Database: MongoDB, MySQL</li>
            <li>Other: UI/UX Design, SEO, Git, Zapier, MailChimp</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App
