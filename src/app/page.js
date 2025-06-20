'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, ArrowRight, Download, ChevronDown, ExternalLink } from 'lucide-react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const quickStats = [
    { label: 'Experience', value: '9+ Months' },
    { label: 'Projects', value: '15+' },
    { label: 'CGPA', value: '8.79' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Section */}
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for opportunities
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Sourav
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl text-slate-600 mb-6 font-light">
              Product Engineer
            </p>

            {/* Brief Description */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Full Stack Developer passionate about building scalable web applications
              and innovative solutions using modern technologies.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                <Mail size={20} />
                Let's Connect
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 hover:border-slate-400 transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={20} />
                Resume
              </button>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center text-slate-600 mb-16">
              <a href="mailto:mishra.sourav79@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail size={18} />
                mishra.sourav79@gmail.com
              </a>
              <a href="tel:+918249979473" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone size={18} />
                +91-8249979473
              </a>
              <a href="https://github.com/souravmishra" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className={`py-20 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Role Highlight */}
        <div className={`py-20 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Currently Working
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                Product Engineer Intern
              </h3>
              <p className="text-xl text-blue-600 font-semibold mb-4">
                Reverie Language Technologies
              </p>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Building scalable web applications and API solutions that serve millions of users.
                Working with cutting-edge technologies to create innovative products.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['Next.js', 'React.js', 'Node.js', 'MongoDB', 'API Development'].map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group">
              Learn more about my work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Navigation to Other Sections */}
        <div className={`py-20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Explore More</h3>
            <p className="text-xl text-slate-600">Discover my work, skills, and projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'My Work', description: 'Professional experience & achievements', icon: '💼' },
              { title: 'Technologies', description: 'Skills & tools I work with', icon: '🛠️' },
              { title: 'Projects', description: 'Featured work & case studies', icon: '🚀' },
              { title: 'Contact', description: 'Let\'s discuss opportunities', icon: '📧' }
            ].map((section, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{section.title}</h4>
                  <p className="text-slate-600 text-sm mb-4">{section.description}</p>
                  <div className="flex items-center justify-center gap-1 text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Explore
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className={`py-20 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's connect and discuss how we can work together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Mail size={20} />
                  Start a Conversation
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <ExternalLink size={20} />
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}