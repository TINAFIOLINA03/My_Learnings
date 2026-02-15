import React from 'react'
import './Section.css'

function AWSLearning() {
  return (
    <section className="section">
      <h2 className="section-title">AWS – What I Learned</h2>
      <div className="section-content">
        <p>
          When I looked at AWS, I saw it as a set of building blocks rather than one 
          big platform. A request first comes in through Route 53 and CloudFront, gets 
          protected by WAF and Shield, and then is routed using an API Gateway or a Load 
          Balancer. From there, I can choose how I want to run my backend — EC2 if I want 
          full control, ECS or Fargate for containers, or Lambda if I want to stay fully 
          serverless.
        </p>
        <p>
          For data, AWS gives the flexibility to pick the right database based on the use 
          case — RDS for relational data, DynamoDB for high-scale key-value access, document 
          or graph databases when the data model needs flexibility, and caching layers like 
          ElastiCache to keep things fast. Communication between services happens through 
          events and queues using SNS, SQS, and EventBridge, and I can easily plug in AI 
          capabilities like Bedrock or Rekognition when needed. Overall, AWS takes care of 
          storage, security, monitoring, and deployments, so I can focus more on building the 
          product rather than managing infrastructure.
        </p>
      </div>
      <div className="learning-image-section">
        <img 
          src="/images/Aws.jpeg" 
          alt="AWS architecture and services overview"
          className="learning-image"
        />
      </div>
    </section>
  )
}

export default AWSLearning
