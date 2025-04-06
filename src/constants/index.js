import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    visualvibe,
    ex2,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
        title: "Web Designer",
        icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developement Intern",
      company_name: "Cloud Counselage Pvt. Ltd.",
      icon: git,
      iconBg: "#383E56",
      date: "July 2023 - October 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "AI Training & Coding Expert",
      company_name: "Outlier",
      icon: docker,
      iconBg: "#E6DEDD",
      date: "October 2023 - Present",
      points: [
        "Training AI on the basis of multiple aspects.",
        "Involvement in multiple Python-related projects and programming web interfaces",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "Zidio Development",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "December 2024 - March 2025",
      points: [
        "Developed a task management web app using Next.js, leveraging server-side rendering (SSR) and API routes for efficient task handling.",
        "Designed a responsive UI with Tailwind CSS and implemented state management for real-time task updates.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "Acmegrade",
      icon: docker,
      iconBg: "#E6DEDD",
      date: "October 2023 - Present",
      points: [
        "Building multiple web applications using MERN stack.",
        "Developing and maintaining web applications using React.js and other related technologies.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Worked really well under",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "VisualVibe",
      description:
        "Next.js and TypeScript-based video conferencing app using WebRTC for real-time calls, Clerk for authentication, and Socket.io for signaling, ensuring a seamless and secure experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: visualvibe,
      source_code_link: "https://github.com/GitDaksh/visualvibe",
    },
    {
      name: "Archive",
      description:
        "A secure, scalable University Library Management System built with industry best practices—featuring role-based access, media uploads, caching, DDoS protection, advanced queries, and automated workflows.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ex2,
      source_code_link: "https://github.com/GitDaksh/archive",
    },
    {
      name: "GitFlow",
      description:
        "An AI-powered Git commit summarizer using Google Gemini AI, designed to generate clear, concise, and context-aware commit messages. Analyzes git diffs, highlights key changes, and provides meaningful summaries for better version control.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/GitDaksh/gitflow",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
