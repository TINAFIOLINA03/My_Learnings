import React from 'react'
import './AWSNotesDiagram.css'

function AWSNotesDiagram() {
  return (
    <div className="aws-diagram">
      <div className="diagram-section">
        <h3 className="diagram-title">Traffic Flow & Entry Points</h3>
        <div className="flow-container">
          <div className="service-box internet">Internet</div>
          <div className="arrow">→</div>
          <div className="service-box">Route 53<br/><span className="service-desc">Domain & Traffic Management<br/>(Geographic & Latency-based routing)</span></div>
          <div className="arrow">→</div>
          <div className="service-box">CloudFront<br/><span className="service-desc">CDN (Replica)</span></div>
          <div className="arrow">→</div>
          <div className="service-box">S3<br/><span className="service-desc">Static Assets Storage</span></div>
        </div>
        <div className="security-layer">
          <div className="service-box security">WAF<br/><span className="service-desc">Firewall</span></div>
          <div className="service-box security">Shield<br/><span className="service-desc">DDoS Protection</span></div>
          <div className="service-box">Certificate Manager<br/><span className="service-desc">SSL/TLS Certificates</span></div>
        </div>
        <div className="api-layer">
          <div className="service-box">API Gateway</div>
          <div className="arrow">→</div>
          <div className="service-box">Load Balancer</div>
          <div className="arrow">→</div>
          <div className="instances-box">
            <div className="instance">Instance 1</div>
            <div className="instance">Instance 2</div>
            <div className="instance">Instance 3</div>
            <div className="instance-note">Autoscaling + Sticky Sessions</div>
          </div>
        </div>
      </div>

      <div className="diagram-section">
        <h3 className="diagram-title">Compute Services</h3>
        <div className="compute-grid">
          <div className="service-card">
            <div className="service-name">EC2</div>
            <div className="service-detail">Virtual Instances</div>
          </div>
          <div className="service-card">
            <div className="service-name">Lightsail</div>
            <div className="service-detail">Simplified VPS<br/>Docker Container Support</div>
          </div>
          <div className="service-card">
            <div className="service-name">ECS</div>
            <div className="service-detail">Deploy Containers<br/>+ Monitoring & Add-ons</div>
          </div>
          <div className="service-card">
            <div className="service-name">Fargate</div>
            <div className="service-detail">Serverless Containers<br/>(ECS variant)</div>
          </div>
          <div className="service-card">
            <div className="service-name">EKS</div>
            <div className="service-detail">Kubernetes Service</div>
          </div>
          <div className="service-card highlight">
            <div className="service-name">Lambda</div>
            <div className="service-detail">Serverless Functions</div>
          </div>
        </div>
      </div>

      <div className="diagram-section">
        <h3 className="diagram-title">Storage & Database</h3>
        <div className="storage-db-grid">
          <div className="category-box">
            <h4>Storage</h4>
            <div className="service-item">EFS - Elastic File System</div>
            <div className="service-item">EBS - Elastic Block Store (Hard Drive)</div>
            <div className="service-item">S3 - Object Storage</div>
          </div>
          <div className="category-box">
            <h4>Database</h4>
            <div className="service-item">RDS → Relational DB<br/><span className="sub-note">+ Monitoring + Additional Features</span></div>
            <div className="service-item">DynamoDB - NoSQL</div>
            <div className="service-item">DocumentDB (MongoDB)</div>
            <div className="service-item">Keyspaces (Cassandra)</div>
            <div className="service-item">Neptune - Graph DB</div>
            <div className="service-item">OpenSearch</div>
          </div>
        </div>
      </div>

      <div className="diagram-section">
        <h3 className="diagram-title">Caching & Configuration</h3>
        <div className="config-grid">
          <div className="service-item">ElastiCache</div>
          <div className="service-item">MemoryDB</div>
          <div className="service-item">Secrets Manager</div>
          <div className="service-item">App Config<br/><span className="sub-note">Feature flags & configuration management</span></div>
        </div>
      </div>

      <div className="diagram-section">
        <h3 className="diagram-title">AI Services</h3>
        <div className="ai-grid">
          <div className="service-card">
            <div className="service-name">Rekognition</div>
            <div className="service-detail">Image + Video Detection</div>
          </div>
          <div className="service-card">
            <div className="service-name">Polly</div>
            <div className="service-detail">Text to Speech</div>
          </div>
          <div className="service-card">
            <div className="service-name">Transcribe</div>
            <div className="service-detail">Audio to Text</div>
          </div>
          <div className="service-card">
            <div className="service-name">Bedrock</div>
            <div className="service-detail">Generative AI</div>
          </div>
          <div className="service-card">
            <div className="service-name">SageMaker</div>
            <div className="service-detail">Machine Learning</div>
          </div>
        </div>
      </div>

      <div className="diagram-section">
        <h3 className="diagram-title">Application Coordination</h3>
        <div className="coordination-diagram">
          <div className="sns-box">
            <div className="service-name">SNS Topic</div>
            <div className="broadcast-note">Broadcast Messages</div>
          </div>
          <div className="arrow-right">→</div>
          <div className="subscribers">
            <div className="subscriber">Subscribe to Different Applications</div>
            <div className="subscriber">Application Endpoints</div>
            <div className="subscriber">Other Topic Endpoints</div>
          </div>
        </div>
        <div className="coordination-services">
          <div className="service-item">SQS - Queue Service</div>
          <div className="service-item">EventBridge - Event Bus</div>
          <div className="service-item">Step Functions - Workflows</div>
        </div>
      </div>

      <div className="diagram-section">
        <h3 className="diagram-title">Authentication</h3>
        <div className="auth-box">
          <div className="service-name">Cognito</div>
          <div className="service-detail">Authentication Services</div>
        </div>
      </div>
    </div>
  )
}

export default AWSNotesDiagram
