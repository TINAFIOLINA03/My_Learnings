import React from 'react'
import './Section.css'

function ScreenshotsSection() {
  return (
    <section className="section">
      <h2 className="section-title">Screenshots</h2>
      <p className="section-content" style={{fontStyle: 'italic', color: '#666', marginBottom: '2rem'}}>
        Visual documentation of the learning journey and execution attempts.
      </p>
    </section>
  )
}

export default ScreenshotsSection
