import React from 'react'
import './Section.css'

function ClosingNote() {
  return (
    <section className="section">
      <div className="section-content closing-note">
        <p>
          This static learning page was inspired by the Catalyst GitHub project board, which 
          openly shows ongoing research, development, and releases — motivating me to share my 
          learning journey and attempts transparently.
        </p>
        <p>
          An additional outcome of this journey was the idea to document and share my learnings 
          publicly. That transparency motivated me to create this React-based static site, where 
          I can showcase not just the final result, but my learning journey, attempts, and 
          decisions along the way.
        </p>
      </div>
    </section>
  )
}

export default ClosingNote
