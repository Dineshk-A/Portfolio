import React from 'react';

const experiences = [
  {
    company: "Agero Road Side Assistance",
    role: "Site Reliability Engineer",
    duration: "Dec 2021 - Present",
    description: "Responsible for building and maintaining scalable, reliable, and efficient infrastructure with a focus on automation, monitoring, and incident response.",
    projects: [
      {
        title: "Infrastructure Automation",
        description: "Automated the deployment of cloud infrastructure using Terraform and AWS CloudFormation, reducing provisioning time by 50%.",
        technologies: ["Terraform", "AWS", "Linux"]
      },
      {
        title: "Incident Response Automation",
        description: "Built an automated incident management pipeline using Splunk and PagerDuty, improving incident response times by 30%.",
        technologies: ["Splunk", "PagerDuty", "Python"]
      }
    ]
  },
  {
    company: "Amazon",
    role: "Transaction Risk Investigator",
    duration: "April 2021 - Dec 2021",
    description: "Managed CI/CD pipelines, containerized applications, and optimized infrastructure for scalability and performance.",
    projects: [
      {
        title: "CI/CD Pipeline Optimization",
        description: "Improved CI/CD pipelines with Jenkins and Docker, reducing build times by 40%.",
        technologies: ["Jenkins", "Docker", "Kubernetes"]
      },
      {
        title: "Containerized Applications",
        description: "Led the containerization of legacy applications using Docker, making them ready for Kubernetes deployment.",
        technologies: ["Docker", "Kubernetes"]
      }
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{experience.role} at {experience.company}</h3>
              <p className="text-sm text-gray-500">{experience.duration}</p>
              <p className="text-lg text-gray-700 mt-2">{experience.description}</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Key Projects</h4>
                <div className="space-y-4">
                  {experience.projects.map((project, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg">
                      <h5 className="text-md font-semibold">{project.title}</h5>
                      <p className="text-sm text-gray-600">{project.description}</p>
                      <p className="mt-2 text-xs text-gray-500">Technologies: {project.technologies.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}