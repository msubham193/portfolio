import React from "react";
import { Smartphone, Globe, Brain, Layout, Server, Link } from "lucide-react";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Services I Provide
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the range of professional services I offer to bring your
            ideas to life, from mobile apps to AI-powered solutions.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Smartphone />}
            title="Mobile App Development"
            description="Building high-performance, cross-platform mobile applications with seamless user experiences."
            tools={["React Native", "TypeScript", "Firebase", "Redux"]}
          />

          <ServiceCard
            icon={<Globe />}
            title="Web App Development"
            description="Creating responsive and scalable web applications tailored to your business needs."
            tools={["React", "Next.js", "Tailwind CSS", "Redux"]}
          />

          <ServiceCard
            icon={<Brain />}
            title="AI Chatbot Development"
            description="Developing intelligent chatbots powered by advanced AI to enhance user engagement."
            tools={["LLM", "Langchain", "Pinecone", "Flask"]}
          />

          <ServiceCard
            icon={<Layout />}
            title="UI/UX Design"
            description="Crafting intuitive and visually appealing interfaces with a focus on user satisfaction."
            tools={["Figma", "Adobe XD", "User Research", "Prototyping"]}
          />

          <ServiceCard
            icon={<Server />}
            title="Backend Development"
            description="Building robust server-side solutions to power your applications efficiently."
            tools={["Node.js", "Express", "MongoDB", "PostgreSQL"]}
          />

          <ServiceCard
            icon={<Link />}
            title="API Integration"
            description="Seamlessly integrating third-party APIs to enhance application functionality."
            tools={["Firebase", "Stripe", "Express", "REST APIs"]}
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  tools,
}) => {
  return (
    <div className="bg-white/10 dark:bg-gray-900/5 backdrop-blur-md border border-white/20 dark:border-gray-700/35 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-blue-600 dark:text-blue-400 mb-4">
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>

      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tools.map((tool, i) => (
          <span
            key={i}
            className="text-sm bg-white/20 dark:bg-gray-700/20 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Services;
