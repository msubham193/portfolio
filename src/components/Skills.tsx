import React from "react";
import {
  Code,
  Layout,
  Database,
  Lightbulb,
  PenTool,
  UsersRound,
} from "lucide-react";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and the tools I
            use to create amazing digital experiences.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            icon={<Code />}
            title="Frontend Development"
            description="Creating responsive, interactive user interfaces with modern frameworks and libraries."
            skills={[
              "React",
              "React Native",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Redux",
            ]}
          />

          <SkillCard
            icon={<Database />}
            title="Backend Development"
            description="Building robust server-side applications and APIs to power web applications."
            skills={[
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Flask",
              "Firebase",
              "Stripe",
            ]}
          />

          <SkillCard
            icon={<Layout />}
            title="UI/UX Design"
            description="Designing beautiful, intuitive user interfaces with a focus on user experience."
            skills={["Figma", "Adobe XD", "User Research", "Prototyping"]}
          />

          <SkillCard
            icon={<Lightbulb />}
            title="AI & Machine Learning"
            description="Building intelligent applications using advanced AI technologies."
            skills={["LLM", "Langchain", "Pinecone"]}
          />

          <SkillCard
            icon={<PenTool />}
            title="Creative Design"
            description="Creating visually appealing designs that communicate effectively."
            skills={["Typography", "Color Theory", "Illustration", "Animation"]}
          />

          <SkillCard
            icon={<UsersRound />}
            title="Team Collaboration"
            description="Working effectively with others to deliver exceptional results."
            skills={[
              "Agile Methodology",
              "Git",
              "Code Reviews",
              "Documentation",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description,
  skills,
}) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="text-blue-600 dark:text-blue-400 mb-4">
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>

      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
