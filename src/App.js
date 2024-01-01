import React from 'react'


function App() {
  return (
    <div className='App'>
      <div className="App_container">

        <header>
          <img src="" alt="Headshot" className='headshot' />
          <h1 className='name'>Isaiah Johnson</h1>
          <p className='contactInfo'>YOUR CONTACT INFO</p>
        </header>

        <section className='employmentHistory'>
          <h2>Employment History</h2>
          <div className="timline"></div>
        </section>

        <section className='education'>
          <h2>Education</h2>
          <ul>
            <li>Your Degree - Your University (Year)</li>
          </ul>
        </section>

        <section className='skills'>
          <h2>Skills/Certifications</h2>
          <ul>
            <li>Skills/Certifications</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App
