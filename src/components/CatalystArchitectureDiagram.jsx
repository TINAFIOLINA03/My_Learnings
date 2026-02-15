import React from 'react'
import './CatalystArchitectureDiagram.css'

function CatalystArchitectureDiagram() {
  return (
    <div className="catalyst-diagram">
      <div className="architecture-flow">
        {/* User Entry Point */}
        <div className="user-entry">
          <div className="user-icon">👤</div>
          <div className="user-label">User</div>
        </div>

        {/* Web Tier */}
        <div className="tier web-tier">
          <h3 className="tier-title">Web Tier</h3>
          <div className="tier-content">
            <div className="adc-box">
              <div className="component-name">ADC</div>
              <div className="component-details">
                <div className="detail-item">L3 Load Balancer</div>
                <div className="detail-item">L7 Load Balancer</div>
                <div className="detail-note">DNS, Security, Traffic Routing</div>
              </div>
            </div>
            <div className="arrow-down">↓</div>
            <div className="api-gateway-box">
              <div className="component-name">API Gateway</div>
              <div className="component-details">
                <div className="detail-note">Single Entry Point</div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Tier */}
        <div className="tier app-tier">
          <h3 className="tier-title">Application Tier</h3>
          <div className="tier-content app-tier-grid">
            <div className="app-servers-box">
              <div className="component-name">App Servers</div>
              <div className="servers-list">
                <div className="server-item">Server 1</div>
                <div className="server-item">Server 2</div>
                <div className="server-item">Server n</div>
              </div>
              <div className="component-note">Stateless, Auto-scaling</div>
            </div>
            <div className="functions-box">
              <div className="component-name">ZFaaS</div>
              <div className="component-details">
                <div className="detail-note">Serverless Functions</div>
                <div className="detail-note">Event-driven execution</div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Tier */}
        <div className="tier data-tier">
          <h3 className="tier-title">Data Tier</h3>
          <div className="tier-content data-tier-grid">
            <div className="data-category">
              <div className="category-label">OLTP</div>
              <div className="db-item">MySQL</div>
              <div className="db-item">PostgreSQL</div>
            </div>
            <div className="data-category">
              <div className="category-label">OLAP</div>
              <div className="db-item">Cirrus</div>
              <div className="category-note">Analytics & Warehousing</div>
            </div>
            <div className="data-category">
              <div className="category-label">Object Storage</div>
              <div className="db-item">Stratus</div>
              <div className="category-note">Files & Unstructured Data</div>
            </div>
          </div>
        </div>

        {/* Backup Tier */}
        <div className="tier backup-tier">
          <h3 className="tier-title">Backup Tier</h3>
          <div className="tier-content">
            <div className="backup-box">
              <div className="component-name">Backup Servers</div>
              <div className="component-details">
                <div className="detail-note">Streams from Data Tier</div>
              </div>
            </div>
            <div className="arrow-right">→</div>
            <div className="dr-site">
              <div className="component-name">Disaster Recovery Site</div>
              <div className="component-note">Off-site replication</div>
            </div>
          </div>
        </div>
      </div>

      {/* Supporting Services */}
      <div className="supporting-services">
        <h3 className="services-title">Supporting Services</h3>
        <div className="services-grid">
          <div className="service-category">
            <div className="service-category-name">Authentication</div>
            <div className="service-item">IAM</div>
            <div className="service-note">Identity & Access Management</div>
          </div>

          <div className="service-category">
            <div className="service-category-name">Message Bus</div>
            <div className="service-item">WMS</div>
            <div className="service-note">Event messaging</div>
          </div>

          <div className="service-category">
            <div className="service-category-name">Scheduler</div>
            <div className="service-item">Task Engine</div>
            <div className="service-note">Job scheduling</div>
          </div>

          <div className="service-category">
            <div className="service-category-name">Queue</div>
            <div className="service-item">MQueue</div>
            <div className="service-note">Message queue</div>
          </div>

          <div className="service-category">
            <div className="service-category-name">Cache</div>
            <div className="service-item">Redis</div>
            <div className="service-note">Performance caching</div>
          </div>

          <div className="service-category">
            <div className="service-category-name">Utility</div>
            <div className="service-item">PdfGen</div>
            <div className="service-note">PDF generation</div>
          </div>

          <div className="service-category">
            <div className="service-category-name">Monitoring</div>
            <div className="service-item">MI</div>
            <div className="service-note">System monitoring</div>
          </div>

          <div className="service-category">
            <div className="service-category-name">Tracking</div>
            <div className="service-item">MICS</div>
            <div className="service-note">Analytics tracking</div>
          </div>

          <div className="service-category">
            <div className="service-category-name">Management</div>
            <div className="service-item">ZAC</div>
            <div className="service-note">Platform management</div>
          </div>
        </div>
      </div>

      {/* IaaS Layer */}
      <div className="iaas-layer">
        <h3 className="iaas-title">Infrastructure as a Service (IaaS)</h3>
        <div className="iaas-grid">
          <div className="iaas-item">Hardware</div>
          <div className="iaas-item">OS Provisioning</div>
          <div className="iaas-item">DNS</div>
          <div className="iaas-item">DHCP</div>
          <div className="iaas-item">NTP</div>
          <div className="iaas-item">SMTP</div>
          <div className="iaas-item">VM</div>
          <div className="iaas-item">Containers</div>
          <div className="iaas-item highlight">ZContainer</div>
        </div>
        <div className="iaas-note">
          All infrastructure managed by Zoho Cloud Platform
        </div>
      </div>
    </div>
  )
}

export default CatalystArchitectureDiagram
