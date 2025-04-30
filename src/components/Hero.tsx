import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const titles = [
  "Creative Developer",
  "UI/UX Enthusiast",
  "AI & ML Enthusiast",
  "I Build Web & Mobile Apps",
];

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentTitleIndex]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/10 blur-lg animate-pulse"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 mb-6">
          {text}
          <span className="animate-blink text-white">|</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-300 mb-10 animate-fade-in opacity-0"
          style={{ animationDelay: "2s", animationFillMode: "forwards" }}
        >
          I love crafting bold interfaces & seamless digital experiences.
        </p>

        <div
          className="animate-fade-in opacity-0"
          style={{ animationDelay: "3s", animationFillMode: "forwards" }}
        >
          <button
            onClick={scrollToNextSection}
            className="relative group inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold transition-all duration-500 hover:scale-105 shadow-lg overflow-hidden"
          >
            <span className="relative z-10">Explore my work</span>
            <ArrowDown className="ml-2 h-4 w-4 animate-bounce relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
