import React from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src="./pic.png"
                alt="Professional portrait"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">1.5+ Years Experience</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Full Stack Developer with a passion for Generative AI
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a developer with a deep interest in Web Development, Mobile
              App Development, Full Stack solutions, and Generative AI. Over the
              past 1.5 years, I've contributed to various impactful projects and
              continue to explore the intersection of code and creativity.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My goal is to build applications that are not only technically
              sound but also provide delightful user experiences. I focus on
              writing clean, scalable code and staying updated with modern
              technologies to build smart, responsive, and future-ready
              solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    Professional Experience
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Project Associate at GTIDS
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    Education
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Master of Computer Application, Centurion University
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    Awards
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">Best Coder</p>
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
