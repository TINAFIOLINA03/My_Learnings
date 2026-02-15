import React from 'react'
import './Section.css'

function AttemptsJourney() {
  return (
    <section className="section">
      <h2 className="section-title">Attempts & Execution Journey</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker">Phase 1</div>
          <div className="timeline-content">
            <h3>Exploring Catalyst with AppSail (Java Spring)</h3>
            <p>
              I started with Zoho Catalyst because I wanted to understand how much infrastructure 
              it abstracts for developers. I used the Catalyst CLI to scaffold the project and 
              combined it with Spring Initializr to build a Java Spring backend. I integrated 
              Catalyst Data Store and the Authentication component, and added the Catalyst Java SDK.
            </p>
            <div className="phase-screenshot">
              <img 
                src="/images/phase1-maven-errors.jpeg" 
                alt="Maven build errors showing dependency resolution failures and malformed POM issues during Catalyst AppSail setup"
                className="timeline-image"
              />
              <p className="screenshot-caption">Maven dependency resolution errors and POM configuration issues encountered during Catalyst SDK integration</p>
            </div>
            <p>
              During this phase, I ran into dependency and runtime alignment issues — while Spring 
              Boot built successfully after manually adding dependencies, the Catalyst runtime wasn't 
              fully wired in, which caused issues when executing ZSQL-based queries. This phase helped 
              me clearly understand how Catalyst tightly couples runtime, SDK, and query execution, 
              and how important platform-specific bootstrapping is when working with managed PaaS 
              offerings.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker">Phase 2</div>
          <div className="timeline-content">
            <h3>Validating the Core Application on AWS</h3>
            <p>
              To isolate application logic from platform constraints, I then built the same system 
              using a Spring Boot backend and React frontend, connected to AWS RDS and tested 
              everything locally. The application worked as expected, confirming that the domain 
              model, APIs, and authentication flow were sound.
            </p>
            <div className="phase-screenshot">
              <img 
                src="/images/phase2-elastic-beanstalk.jpeg" 
                alt="AWS Elastic Beanstalk console showing SkillBridge-env2 environment with health status and configuration"
                className="timeline-image"
              />
              <p className="screenshot-caption">AWS Elastic Beanstalk environment dashboard showing deployment status and configuration</p>
            </div>
            <p>
              I then deployed the backend using Elastic Beanstalk. While the environment was created, 
              the instance did not stabilize fully — likely due to configuration mismatches and health 
              checks. Instead of force-patching it, I treated this as a learning checkpoint: Elastic 
              Beanstalk offers flexibility but requires precise alignment between application structure 
              and platform expectations.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker">Phase 3</div>
          <div className="timeline-content">
            <h3>Rebuilding with Catalyst's Strengths in Mind</h3>
            <p>
              With clearer context, I returned to Catalyst — this time leaning fully into its strengths 
              instead of fighting abstraction. I used Catalyst Web Client Hosting for the frontend, 
              Data Store, Authentication, and Advanced I/O, following Catalyst's recommended patterns 
              and tutorials. This approach worked smoothly and reinforced how Catalyst simplifies 
              deployment when the application is designed around its primitives rather than retrofitted.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AttemptsJourney
