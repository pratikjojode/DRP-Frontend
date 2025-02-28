import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Cloud.css";
import cloudImage from "../images/cloud_server.jpg"; // Import your image

const CloudSer = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container-cloud">
        {/* Hero Section with Image */}
        <div className="hero-section-cloud">
          <img
            src={cloudImage}
            alt="Cloud Services"
            className="hero-image-cloud"
          />
        </div>

        {/* Cloud Services Content */}
        <div className="content-wrapper-cloud">
          <h2 className="section-title-cloud">Types of Cloud Services</h2>
          <div className="grid-container-cloud">
            {/* Service Cards */}
            {[
              {
                title: "Infrastructure as a Service (IaaS)",
                desc: "Provides virtualized computing resources like servers, storage, and networking.",
                examples: "AWS EC2, Google Compute Engine, Azure VMs",
              },
              {
                title: "Platform as a Service (PaaS)",
                desc: "Offers development platforms with pre-configured environments.",
                examples: "Google App Engine, AWS Elastic Beanstalk, Heroku",
              },
              {
                title: "Software as a Service (SaaS)",
                desc: "Delivers software applications over the internet.",
                examples: "Google Workspace, Microsoft 365, Dropbox, Zoom",
              },
              {
                title: "Function as a Service (FaaS)",
                desc: "Runs code without managing servers, scaling automatically.",
                examples: "AWS Lambda, Google Cloud Functions, Azure Functions",
              },
            ].map((service, index) => (
              <div key={index} className="service-card-cloud">
                <h3 className="card-title-cloud">{service.title}</h3>
                <p className="card-description-cloud">{service.desc}</p>
                <p className="card-examples-cloud">
                  <strong>Examples:</strong> {service.examples}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Computing Benefits Section */}
        <div className="content-wrapper-cloud">
          <h2 className="section-title-cloud">Cloud Computing Benefits</h2>
          <div className="grid-container-cloud">
            {[
              {
                icon: "📈", // You can replace this with an actual icon or image
                title: "Scalability",
                desc: "Easily scale up or down as needed.",
              },
              {
                icon: "💰",
                title: "Cost-Efficiency",
                desc: "Pay-as-you-go pricing.",
              },
              {
                icon: "🔒",
                title: "Security",
                desc: "Data encryption & compliance features.",
              },
              {
                icon: "🌍",
                title: "Global Reach",
                desc: "Deploy applications worldwide.",
              },
              {
                icon: "🔄",
                title: "Disaster Recovery",
                desc: "Automatic backups & redundancy.",
              },
            ].map((benefit, index) => (
              <div key={index} className="benefit-card-cloud">
                <div className="benefit-icon-cloud">{benefit.icon}</div>
                <h3 className="card-title-cloud">{benefit.title}</h3>
                <p className="card-description-cloud">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Providers Section */}
        <div className="content-wrapper-cloud">
          <h2 className="section-title-cloud">Top Cloud Service Providers</h2>
          <div className="grid-container-cloud">
            {[
              {
                name: "Amazon Web Services (AWS)",
                desc: "Largest cloud provider, used by Netflix, Airbnb, NASA.",
                color: "aws-card",
              },
              {
                name: "Microsoft Azure",
                desc: "Best for enterprise solutions & integration with Microsoft products.",
                color: "azure-card",
              },
              {
                name: "Google Cloud Platform (GCP)",
                desc: "Strong in AI, ML, and big data analytics.",
                color: "gcp-card",
              },
            ].map((provider, index) => (
              <div key={index} className={`provider-card ${provider.color}`}>
                <h3 className="card-title-cloud">{provider.name}</h3>
                <p className="card-description-cloud">{provider.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CloudSer;
