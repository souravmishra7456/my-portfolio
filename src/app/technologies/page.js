'use client';

import React, { useState } from 'react';
import {
    Code,
    Database,
    Globe,
    Wrench,
    Star,
    BarChart4
} from 'lucide-react';

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const skillCategories = {
        languages: {
            title: "Programming Languages",
            icon: <Code className="w-6 h-6" />,
            color: "from-blue-500 to-blue-600",
            skills: [
                {
                    name: "Java",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                },
                {
                    name: "Python",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                },
                {
                    name: "JavaScript",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                },
                {
                    name: "TypeScript",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                }
            ]
        },

        web: {
            title: "Web Development",
            icon: <Globe className="w-6 h-6" />,
            color: "from-green-500 to-green-600",
            skills: [
                {
                    name: "HTML",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                },
                {
                    name: "CSS",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                },
                {
                    name: "React.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                },
                {
                    name: "Next.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                },
                {
                    name: "Node.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                },
                {
                    name: "Express.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                },
                {
                    name: "Tailwind CSS",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s"
                }
            ]
        },

        databases: {
            title: "Databases",
            icon: <Database className="w-6 h-6" />,
            color: "from-purple-500 to-purple-600",
            skills: [
                {
                    name: "MongoDB",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                },
                {
                    name: "MySQL",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                },
                {
                    name: "SQL",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                }
            ]
        },

        dataAI: {
            title: "Data & AI",
            icon: <BarChart4 className="w-6 h-6" />,
            color: "from-indigo-500 to-indigo-600",
            skills: [
                {
                    name: "Microsoft Excel",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftoffice/microsoftoffice-original.svg"
                },
                {
                    name: "Power BI",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg"
                },
                {
                    name: "Tableau",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg"
                },
                {
                    name: "Data Analysis",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                },
                {
                    name: "AI Applications",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                }
            ]
        },

        tools: {
            title: "Tools & Technologies",
            icon: <Wrench className="w-6 h-6" />,
            color: "from-orange-500 to-orange-600",
            skills: [
                {
                    name: "VS Code",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                },
                {
                    name: "Git",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                },
                {
                    name: "GitHub",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                },
                {
                    name: "Chrome DevTools",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg"
                },
                {
                    name: "Postman",
                    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                },
                {
                    name: "Jira",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
                },
                {
                    name: "Mintlify",
                    logo: "https://mintlify.com/favicon.ico"
                }
            ]
        }
    };

    const getAllSkills = () => {
        return Object.values(skillCategories).flatMap(category =>
            category.skills.map(skill => ({
                ...skill,
                category: category.title
            }))
        );
    };

    const getFilteredSkills = () => {
        if (selectedCategory === 'all') {
            return getAllSkills();
        }

        return (
            skillCategories[selectedCategory]?.skills.map(skill => ({
                ...skill,
                category: skillCategories[selectedCategory].title
            })) || []
        );
    };

    const categories = [
        {
            key: 'all',
            label: 'All Skills',
            icon: <Star className="w-4 h-4" />
        },
        {
            key: 'languages',
            label: 'Languages',
            icon: <Code className="w-4 h-4" />
        },
        {
            key: 'web',
            label: 'Web Dev',
            icon: <Globe className="w-4 h-4" />
        },
        {
            key: 'databases',
            label: 'Databases',
            icon: <Database className="w-4 h-4" />
        },
        {
            key: 'dataAI',
            label: 'Data & AI',
            icon: <BarChart4 className="w-4 h-4" />
        },
        {
            key: 'tools',
            label: 'Tools',
            icon: <Wrench className="w-4 h-4" />
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 md:pt-16 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Technical Skills
                    </h1>

                    <p className="text-lg text-gray-600">
                        Frontend development, data analysis, testing, and AI technologies
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            onClick={() =>
                                setSelectedCategory(category.key)
                            }
                            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                                selectedCategory === category.key
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                            }`}
                        >
                            {category.icon}
                            <span>{category.label}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Overview Cards */}
                {selectedCategory === 'all' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                        {Object.entries(skillCategories).map(
                            ([key, category]) => (
                                <div
                                    key={key}
                                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div
                                        className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mb-4`}
                                    >
                                        {category.icon}
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {category.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm">
                                        {category.skills.length} technologies
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                )}

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {getFilteredSkills().map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Skill Header */}
                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                                    <img
                                        src={skill.logo}
                                        alt={`${skill.name} logo`}
                                        className="w-8 h-8 object-contain"
                                        onError={(e) => {
                                            e.currentTarget.style.display =
                                                'none';

                                            if (
                                                e.currentTarget
                                                    .nextSibling
                                            ) {
                                                e.currentTarget.nextSibling.style.display =
                                                    'flex';
                                            }
                                        }}
                                    />

                                    <div
                                        className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600"
                                        style={{ display: 'none' }}
                                    >
                                        {skill.name.charAt(0)}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        {skill.name}
                                    </h3>

                                    {selectedCategory === 'all' && (
                                        <p className="text-sm text-gray-500">
                                            {skill.category}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">
                        Ready to Collaborate?
                    </h3>

                    <p className="text-blue-100 leading-relaxed mb-6">
                        With experience across frontend development,
                        system testing, data analysis, and AI applications,
                        I'm equipped to build reliable and user-focused
                        digital solutions.
                    </p>

                    <button
                        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Get In Touch
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Skills;
