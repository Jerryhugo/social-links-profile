
import React, { useState } from 'react'
import Link from './components/link';
import ProfileImg from './components/Profile-img';
import Details from "./components/Details";

import Title from "./components/Title";

import './App.css';

// import './App.css'

function App() {
  const addresses = 
  [{
    site: "Github",
    link: "https://github.com/Jerryhugo"
  },
  {
    site: "Frontend Mentor",
    link: "https://www.frontendmentor.io/profile/Jerryhugo"
  },
  {
    site: "LinkedIn",
    link: "https://www.linkedin.com/in/jeremiah-okpu-77323b205/"
  },
  {
    site:  "Twitter",
    link: "https://x.com/JeremiahOk23310"
  },
  {
    site: "Instagram",
    link: "https://www.instagram.com/medic_talk_101/"
  }
    
    ];


  return (
    <div className="container">
      <div>
      <ProfileImg />
      <Details />
      <Title />
      <ul>
       
        {addresses.map((address, index)=> {
          return (
              <Link key={index} text={address.site} href={address.link} />
          )
          
        
        })}
        
      </ul>
      </div>
 
    </div>

  )
}

export default App
