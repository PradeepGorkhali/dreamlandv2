import React from 'react'
import './Whowe.css'

export const Whowe = () => {
  return (
    <>
      <div className='whowe__wrapper'>
        {/* main wrapper */}
        <div className='whowe__container'>
            {/* container */}

            <div className='whowe__image__container'>
                {/* image container */}
                <img src='https://resume-example.com/wp-content/uploads/2021/03/teamwork-concept-on-the-brown-wooden-table-background.jpg' alt='whyweimage'/>
            </div>
            <div className='whowe__contents_container'>
                {/* contents */}
            <div className='whowe__heading'>
                <h1>who we are?</h1>
                {/* heading */}
            </div>
            <div className='whowe__description'>
                {/* desc */}
                <p>We have authorized representatives of foreign universities, registered with the government of Nepal. We believe that cross-cultural education is essential for a globalized world and are proud to be popular among career-oriented students across the country. We are a team of professionals dedicated to providing excellent support to deserving candidates and delivering our services. 
                </p>
            </div>
            <div className="who_Card_Button">
             < a href="/about"> <button className="who_ReadMore_Btn">Read More</button> </a>
            </div>
            </div>
        </div>
            
      </div>
    </>
  )
  }