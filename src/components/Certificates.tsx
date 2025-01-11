import React from 'react';

const certificates = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    organization: "Amazon Web Services",
    date: "January 2023",
    certificateUrl: "https://example.com/aws-cert",
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-2">{cert.organization}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
