import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Job Portal",
    description: "A Job Portal Website built using the MERN stack is a platform that connects recruiters and students (job seekers).",
    image: "/assets/Job Portal.png",
    technologies: ["MERN Stack", "Redux","Multer","Cloudinary"],
    githubUrl: "https://github.com/NekhilBhaskar/JobPortal",
    liveUrl: "https://jobportal-12gp.onrender.com/ "
  },
  {
    id: 2,
    title: "Chat App",
    description: "A real-time chat application built using the MERN stack and Socket.io enables seamless and instant messaging between users. ",
    image: "/assets/chatapp2.png",
    technologies: ["MERN Stack","Socket.io"],
    githubUrl: "https://github.com/NekhilBhaskar/ChatApp",
    liveUrl: "https://chatapp-7o3i.onrender.com/"
  },
  {
    id: 2,
    title: "Sorting Visualizer",
    description: "An interactive web-based tool that visually demonstrates how different sorting algorithms work.",
    image: "/assets/sorter.png",
    technologies: ["WebDev", "JS", "React"],
    githubUrl: "https://github.com/NekhilBhaskar/Sorting-Visualizer",
    liveUrl: "https://sorting-visualizer-nekhil-bhaskar.vercel.app/"
  }
];
// https://github.com/guytesting85/Sorting-Visualizer
// https://sorting-visualizer-three-iota.vercel.app/