'use client';

import React, { useState } from 'react';
import {
    Calendar, MapPin, Code, Shield, FileText,
    BarChart3, Wrench, Package, Database, BarChart4, FileSpreadsheet
} from 'lucide-react';

const WorkExperience = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

const workExperiences = [
    {
        company: "KPMG India",
        role: "Analyst – G & PS (GovTech)",
        duration: "Aug 2025 – Present",
        type: "Gumla, Jharkhand, India",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLvx1x8oeXs-DidUVmNti1LMUwkdDG3Fn0Q&s",
        color: "bg-green-500",
        achievements: [
            {
                icon: <Code className="w-4 h-4" />,
                text: "Contributed to the frontend development of Doctor Data and Infrastructure Tracking Portals using React.js and TypeScript, supporting healthcare workforce and infrastructure monitoring."
            },
            {
                icon: <Shield className="w-4 h-4" />,
                text: "Executed User Acceptance Testing (UAT) for web portals, identified functional and usability gaps, and coordinated with development teams for resolution."
            },
            {
                icon: <Wrench className="w-4 h-4" />,
                text: "Coordinated with internal stakeholders, field teams, government officials, and implementation agencies to resolve system-level and operational issues."
            },
            {
                icon: <BarChart4 className="w-4 h-4" />,
                text: "Conducted comprehensive gap analysis across health infrastructure, service delivery, and resource utilization to support targeted interventions."
            },
            {
                icon: <Database className="w-4 h-4" />,
                text: "Conducted exploratory data analysis (EDA) on large district datasets using Excel, deriving actionable insights for project planning and monitoring."
            }
        ]
    },
    {
        company: "Reverie Language Technologies",
        role: "Product Engineer Intern",
        duration: "Aug 2024 – May 2025",
        type: "Bengaluru, Karnataka, India",
        logo: "https://revup.reverieinc.com/logo.svg",
        color: "bg-blue-500",
        achievements: [
            {
                icon: <Wrench className="w-4 h-4" />,
                text: <>
                    Built an interactive API Playground -{" "}
                    <a
                        href="https://revup.reverieinc.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        RevUp
                    </a>{" "}
                    that allows users and developers to test and explore Reverie's APIs in real time.
                </>
            },
            {
                icon: <Code className="w-4 h-4" />,
                text: "Developed a dynamic and responsive web application using Next.js, delivering an optimized front-end experience across various devices and screen sizes."
            },
            {
                icon: <Package className="w-4 h-4" />,
                text: "Developed and published modular NPM packages for Reverie's APIs, supporting developer-friendly JavaScript SDKs and simplifying API integration."
            },
            {
                icon: <Shield className="w-4 h-4" />,
                text: "Addressed critical VAPT (Vulnerability Assessment and Penetration Testing) issues in RevUp, improving product security and compliance."
            },
            {
                icon: <FileText className="w-4 h-4" />,
                text: <>
                    Authored comprehensive API documentation using{" "}
                    <a
                        href="https://docs.reverieinc.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Mintlify
                    </a>
                    , ensuring clear developer onboarding and integration through structured documentation and examples.
                </>
            },
            {
                icon: <BarChart3 className="w-4 h-4" />,
                text: "Collaborated in the development of an Admin Dashboard providing visualizations of user activity, system performance, and usage analytics."
            }
        ]
    }
];

const allSkills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "Jira",
    "Tailwind CSS",
    "MS Excel",
    "Power BI",
    "SQL",
    "Mintlify"
];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 md:pt-18 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h1>
                    <p className="text-lg text-gray-600">Professional journey and career progression</p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-blue-200 to-gray-200 md:left-8"></div>

                    <div className="space-y-12">
                        {workExperiences.map((experience, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <div className={`absolute left-4 w-4 h-4 ${experience.color} rounded-full border-4 border-white shadow-lg z-10 md:left-6`}></div>

                                {/* Experience Card */}
                                <div className="ml-12 md:ml-16">
                                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                        <div className="p-6 pb-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                                                            {experience.company === "KPMG India" ? (
                                                                <img
                                                                    src={experience.logo}
                                                                    alt={`${experience.company} Logo`}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={experience.logo}
                                                                    alt={`${experience.company} Logo`}
                                                                    className="w-full h-full object-contain p-1"
                                                                />
                                                            )}
                                                        </div>


                                                        <div>
                                                            <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
                                                            <a
                                                                href={experience.company === "KPMG India" ? "https://home.kpmg/in/en/home.html" : "https://www.reverieinc.com"}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-lg text-blue-600 font-semibold hover:underline"
                                                            >
                                                                {experience.company}
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            <span className="font-medium">{experience.duration}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="w-4 h-4" />
                                                            <span>{experience.type}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div className="px-6 pb-6">
                                            <ul className="space-y-3">
                                                {experience.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="text-gray-500 mt-0.5">
                                                            {achievement.icon}
                                                        </div>
                                                        <p className="text-gray-700 text-sm leading-relaxed">{achievement.text}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Technical Skills & Technologies</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {allSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Internship Certificate Section */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Internship Certificate</h3>
                    <div className="flex flex-col items-center justify-center space-y-4">
                        {/* Modal Trigger Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                        >
                            View Certificate
                        </button>

                        {/* Download Button */}
                        <a
                            href="/InternshipCertificate_SouravMishra.pdf"
                            download
                            className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition"
                        >
                            Download Certificate
                        </a>
                    </div>
                </div>

                {/* Certificate Modal */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div
                            className="bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full relative transition-all duration-300 transform scale-100"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
                            >
                                &times;
                            </button>

                            <div className="mt-6">
                                <img
                                    src="/image.png"
                                    alt="Internship Certificate"
                                    className="w-full rounded-lg border max-h-[90vh] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkExperience;
