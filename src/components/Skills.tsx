import React, { useState } from "react";

const skills = [
  { name: "Kubernetes", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/Kubernetes.png" },
  { name: "Docker", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/docker.jpg" },
  { name: "Terraform", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/terraform.png" },
  { name: "AWS", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/aws.png" },
  { name: "Linux/Unix", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/windows.png" },
  { name: "Windows", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/linux.jpg" },
  { name: "Splunk", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/splunk.jpg" },
  { name: "Grafana", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/grafana.png" },
  { name: "Datadog", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/Datadog_Logo.jpg" },
  { name: "Python", image: "https://images-for-protfolio.s3.ap-southeast-2.amazonaws.com/python.jpg" },
];

export function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < skills.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>

        <div className="relative overflow-hidden">
          <div className="flex transition-all duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-1/4 p-2">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="h-16 w-16 object-contain mb-2"
                />
                <p className="text-sm font-medium text-gray-600">{skill.name}</p>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10"
            onClick={prev}
            disabled={currentIndex === 0}
          >
            &#8249;
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10"
            onClick={next}
            disabled={currentIndex >= skills.length - 4}
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}