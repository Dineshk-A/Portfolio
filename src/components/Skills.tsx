import React from "react";

const skills = [
  { name: "Kubernetes", image: "/images/kubernetes.png" },
  { name: "Docker", image: "/images/docker.png" },
  { name: "Terraform", image: "/images/terraform.png" },
  { name: "AWS", image: "/images/aws.png" },
  { name: "Linux/Unix", image: "/images/linux.png" },
  { name: "Splunk", image: "/images/splunk.png" },
  { name: "Grafana", image: "/images/grafana.png" },
  { name: "Datadog", image: "/images/datadog.png" },
  { name: "Python", image: "/images/python.png" },
  { name: "Bash", image: "/images/bash.png" },
  { name: "PowerShell", image: "/images/powershell.png" },
  { name: "Jenkins", image: "/images/jenkins.png" },
  { name: "Blameless", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/blameless.png"}
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center w-32 shrink-0"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="h-16 w-16 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-600">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
