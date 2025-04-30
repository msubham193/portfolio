import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Drips Water",
    description:
      "Drips Water is a delivery app for ordering water bottles and beverages online with fast, smooth doorstep delivery.",
    image:
      "https://play-lh.googleusercontent.com/_64TmxYvOj88l2tSAhqiexSkkqGb_e8nsDKOQpBbdqdJlxy9YzLAMhkxYP7PDKTSQQ=w832-h470-rw",
    category: "Mobile App",
    technologies: [
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
    ],
    githubUrl: "https://github.com/msubham193/Drips-Water",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.dripswater&hl=en_IN",
  },
  {
    id: 2,
    title: "Krishi Aadhar",
    description:
      "Empower your farming journey with Krishiaadhar, a revolutionary digital farming solution designed for both farmers and AgriExperts",
    image: "./ka.png",
    category: "Mobile App",
    technologies: [
      "React Native",
      "Redux",
      "Firebase",
      "Express",
      "Nodejs",
      "MongoDB",
    ],
    githubUrl: "https://github.com/msubham193/krishiaadhar-frontend",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.krishiaadhar&hl=en_IN",
  },
  {
    id: 3,
    title: "CUTM GPT",
    description:
      "Centurion GPT is an AI chatbot for Centurion University, providing instant answers to queries about exams, admissions, courses, and campus info.",
    image: "/cutm.png",
    category: "Web App",
    technologies: ["Next.js", "LLM", "Langchain", "Flask", "Pinecone"],
    githubUrl: "https://github.com/msubham193/CUTM-GPT",
    liveUrl: "cutm-gpt.vercel.app",
  },
  {
    id: 4,
    title: "Careers Centurion University",
    description:
      "CUTM Careers Page simplifies job applications for Centurion University, enabling easy online submissions.",
    image: "./careers.png",
    category: "Web App",
    technologies: ["React", "Nodejs", "Express", "PostgreSQL", "Redux"],
    githubUrl: "https://github.com/msubham193/cutm-careers",
    liveUrl: "https://cutm-careers.vercel.app/",
  },
  {
    id: 5,
    title: "Skill Assessment",
    description:
      "Revolutionizing assessments with advanced technology for accurate, insightful, and actionable results.",
    image: "./sa.png",
    category: "Web App",
    technologies: [
      "React.js",
      "Firebase",
      "Nodejs",
      "Stripe",
      "Express",
      "MongoDB",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://skillassessment-frontend.vercel.app/",
  },
  {
    id: 6,
    title: "Flow transact Transaction App",
    description:
      "Flow Transact is a simple and secure app built for managing and tracking digital transactions effortlessly.",
    image: "./ft.png",
    category: "Mobile App",
    technologies: ["React Native", "MongoDB", "Firebase", "Nodejs", "Express"],
    githubUrl: "https://github.com/msubham193/Flow-transact",
    liveUrl: "https://flowtransact.live/",
  },
];
