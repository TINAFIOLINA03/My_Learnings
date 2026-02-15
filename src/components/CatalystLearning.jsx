import React from 'react'
import './Section.css'

function CatalystLearning() {
  return (
    <section className="section">
      <h2 className="section-title">Zoho Catalyst / ZCP – What I Learned</h2>
      <div className="section-content">
        <p>
          When I first explored Zoho Catalyst, it immediately clicked for me — it's basically 
          a way to build and deploy external apps (not just Zoho apps) without getting stuck 
          in the weeds of infrastructure management. Catalyst abstracts all the plumbing — 
          servers, scaling, provisioning, networking — so I can focus on writing the 
          application itself.
        </p>
        <p>
          Instead of manually managing VMs or containers, Catalyst gives you meaningful building 
          blocks that work out of the box. For example:
        </p>
        <ul className="feature-list">
          <li>
            <strong>Slate</strong> is the developer sandpit — a place to quickly bootstrap and 
            iterate on frontend or full-stack projects with minimal setup.
          </li>
          <li>
            <strong>AppSail</strong> is like your production runner — you write the backend code, 
            and AppSail takes care of serving and scaling it.
          </li>
          <li>
            <strong>Serverless Functions</strong> let me drop in small pieces of logic that can 
            run independently, triggered by events or APIs, without having to manage servers at all.
          </li>
          <li>
            <strong>Cloud Scale Data Store</strong> is where structured application data lives — 
            a scalable database layer that grows with usage without manual sharding or provisioning.
          </li>
          <li>
            <strong>Authentication</strong> is built in, so signup, login, session management, and 
            token validation are just there — I don't have to build or secure it manually.
          </li>
          <li>
            <strong>Quick ML</strong> brings machine learning capabilities right into the platform, 
            letting me add intelligence — like prediction or classification — without deep ML ops 
            expertise.
          </li>
        </ul>
        <p>
          What really impressed me is the Catalyst GitHub project board — it's a real peek into 
          what the Catalyst team is researching, developing, and planning to release. That 
          transparency helped me understand not just what's available today, but where the platform 
          is heading. It's like watching the backstage of a growing cloud ecosystem, and it gives 
          confidence that the tools I'm building on won't be abandoned or stagnant.
        </p>
        <div className="architecture-note">
          <p>
            <strong>ZCP's 3-Tier Architecture:</strong> SDP runs on Zoho Cloud Platform using a 
            clean 3-tier architecture. A user request first enters the Web Tier, where DNS, security, 
            and load balancers route it safely into the system. The Application Tier handles the 
            core logic using stateless app servers and serverless functions, scaling easily without 
            worrying about sessions. The Data Tier stores everything—transactional data, files, and 
            analytics—with caching in between for performance. All three tiers run on Zoho's own 
            cloud with built-in identity, monitoring, backups, and disaster recovery, allowing teams 
            to focus on building SDP features rather than managing infrastructure.
          </p>
        </div>
      </div>
      <div className="learning-image-section">
        <img 
          src="/images/ZCP.jpeg" 
          alt="Zoho Catalyst Platform architecture overview"
          className="learning-image"
        />
      </div>
    </section>
  )
}

export default CatalystLearning
