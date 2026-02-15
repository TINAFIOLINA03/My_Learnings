import React from 'react'
import './Section.css'

function KeyLearnings() {
  return (
    <section className="section">
      <h2 className="section-title">Key Learnings</h2>
      <div className="section-content">
        <ul className="learnings-list">
          <li>
            <strong>Platform abstraction vs infrastructure control:</strong> Catalyst abstracts 
            infrastructure management, allowing focus on application logic, while AWS provides 
            granular control over every component.
          </li>
          <li>
            <strong>Developer experience trade-offs:</strong> Catalyst offers faster initial setup 
            and deployment when following platform patterns, but AWS provides more flexibility for 
            custom architectures and existing codebases.
          </li>
          <li>
            <strong>How cloud choice shapes product velocity:</strong> The choice between 
            platform-abstracted and infrastructure-first approaches directly impacts development 
            speed, learning curve, and long-term maintainability.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default KeyLearnings
