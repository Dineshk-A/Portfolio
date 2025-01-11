import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';

// Skills array with name and image URLs
const skills = [
  { name: "Kubernetes", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/Kubernetes.png" },
  { name: "Docker", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/docker.jpg" }, // Fixed URL
  { name: "Terraform", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/terraform.png" },
  { name: "AWS", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/aws.png" },
  { name: "Linux/Unix", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/windows.png" },
  { name: "Windows", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/linux.jpg" },
  { name: "Splunk", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/splunk.jpg" },
  { name: "Grafana", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/grafana.png" },
  { name: "Datadog", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/Datadog_Logo.jpg" },
  { name: "Python", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/python.jpg" },
  { name: "Bash", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/bash.png" },
  { name: "PowerShell", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/powershell.png" },
  { name: "Git", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/git.jpg" },
  { name: "Jenkins", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/jenkins.png" },
  { name: "Incident.IO", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/blameless.png"},
  { name: "Blameless", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/blameless.png" }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
          <div className="flex space-x-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center w-32 shrink-0">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-16 w-16 object-contain mb-2"
                />
                <p className="text-sm font-medium text-gray-600">{skill.name}</p>
              </div>
            ))}
          </div>
        </Scrollbars>
      </div>
    </section>
  );
}