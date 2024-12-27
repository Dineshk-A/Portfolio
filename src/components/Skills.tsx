import React from 'react';
import { Server, Cloud, GitBranch, Terminal, Database, LineChart } from 'lucide-react';

const skills = [
  {
    category: "Infrastructure",
    icon: Server,
    items: ["Kubernetes", "Docker", "Terraform", "AWS", "Linux/Unix"]
  },
  {
    category: "Monitoring",
    icon: LineChart,
    items: ["Splunk", "Grafana", "Datadog", "incident.io", "pagerduty"]
  },
  {
    category: "DevOps",
    icon: GitBranch,
    items: ["CI/CD", "Jenkins", "GitHub Actions"]
  },
  {
    category: "Scripting",
    icon: Terminal,
    items: ["Python", "Bash", "Powershell", "Infrastructure as Code"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <skill.icon className="h-6 w-6 text-indigo-600" />
                <h3 className="font-semibold text-lg">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
