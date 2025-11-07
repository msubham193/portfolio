"use client";
import React from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Profile Image */}
          <div className="relative flex justify-center">
            <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-xl ring-4 ring-blue-100 dark:ring-blue-900/40 transition-transform duration-500 hover:scale-105">
              <img
                src="./pic.png"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 right-10 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-semibold">
              1.5+ Years Experience
            </div>
          </div>

          {/* About Info */}
          <div className="bg-gray-50 dark:bg-gray-800/40 backdrop-blur-sm p-10 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-5 leading-snug">
              Full Stack Developer <br className="hidden md:block" /> with a
              passion for Generative AI
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a developer who loves crafting innovative web and mobile
              applications with modern technologies. My passion lies in merging
              creativity with code — especially exploring Generative AI to
              create unique digital experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I focus on writing clean, maintainable code and designing
              intuitive user interfaces. My aim is to build products that are
              both visually appealing and highly performant.
            </p>

            {/* Info Items */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-base">
                    Professional Experience
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Project Associate at GTIDS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-base">
                    Education
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Master of Computer Application, Centurion University
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-base">
                    Awards
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Best Coder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
