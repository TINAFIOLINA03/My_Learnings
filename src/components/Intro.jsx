import React from 'react'
import './Section.css'

function Intro() {
  return (
    <section className="section intro-hero">
      <h1 className="section-title intro-title">My Cloud Learning Journey</h1>
      <div className="section-content intro-content">
        <p>
          I explored both AWS (infrastructure-first cloud) and Zoho Catalyst / ZCP 
          (platform-abstracted cloud) to understand different ways of building and 
          deploying applications. This page documents my journey—what I learned, 
          what I tried, and what worked.
        </p>
      </div>
    </section>
  )
}

export default Intro
