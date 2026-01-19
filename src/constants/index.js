import {
  webxr,
  backend,
  fullstack,
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
  webgl,
  docker,
  ajnalens,
  ajnalens2,
  lookout,
  meta,
  starbucks,
  tesla,
  CSULA,
  remote_tool,
  flask_folium,
  ai_town,
  price_pilot,
  threejs,
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
    title: "Full-Stack Developer",
    icon: fullstack,
  },
  {
    title: "WebXR Developer",
    icon: webxr,
  },
  {
    title: "Three.JS Developer",
    icon: threejs,
  },
  {
    title: "WebGL Developer",
    icon: webgl,
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
    name: "WebGL",
    icon: webgl,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "LOOKOUT",
    icon: lookout,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Built an in-browser perception system (YOLOv7 + NVIDIA DeepStream) with Three.js, WebGPU acceleration for low-latency object detection and rendering of maritime targets.",
      "Engineered a 4K MJPEG streaming pipeline with dynamic camera switching (wide, zoom, IR, docking) over WebSockets using GPU-based decoding in Web Workers.",
      "Developed a horizon segmentation module using SAM3 and custom semantic logic for sky–sea boundary detection, enhancing navigable surface estimation.",
      "Applied Hungarian Matching for real-time multi-target association between CV detections and AR-rendered overlays."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "LOOKOUT",
    icon: lookout,
    iconBg: "#383E56",
    date: "May 2024 - May 2025",
    points: [
      "Built a time-synchronized replay and simulation framework for video, sensor telemetry, and perception outputs, enabling engineers to reconstruct and analyze real-world system behavior.",
      "Developed a 3D virtual navigation environment using Three.js, improving spatial accuracy of rendered vessel trajectories by ~80%.",
      "Designed a telemetry ingestion and querying layer using InfluxDB, supporting high-volume time-series data replay with live dashboards.",
      "Created internal debugging tools allowing engineers to scrub timelines, filter perception outputs, and annotate sessions, accelerating root-cause analysis.",
      "Integrated OTA configuration updates and sensor health monitoring, bridging onboard systems with offboard analysis tools.",
    ],
  },
  {
    title: " Senior Full-Stack Developer",
    company_name: "AjnaLens",
    icon: ajnalens2,
    iconBg: "#383E56",
    date: "Sep 2020 - April 2023",
    points: [
      "Engineered a 3D model scaling algorithm for universal Field of View (FOV) compatibility with an accuracy of 95%.",
      "Developed enterprise support with AR-based Remote Assistance software, reducing response time of on-field assistance by 97% for enterprise clients like Tata-Steel, and Mahindra.",
      "Innovated real-time XR app streaming from Cloud servers to HMD with < 20ms motion-to-photon latency.",
      "Collaboratively worked with Qualcomm to build award-winning software on 5G XR-Streaming at IMC-2022.",
      "Architected cloud-based GPU resource allocation for real-time users using Kubernetes cluster helping the company to optimize cloud resources.",
      "Spearheaded a team of 5 full-stack developers and 2 interns, demonstrating effective leadership in overseeing various projects."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Arpit joined our team as an intern and quickly demonstrated his exceptional professionalism through his outstanding agility, which ultimately led to his promotion as the team lead. One aspect of Arpit's work that I deeply appreciate is his openness to embracing novel ideas and approaches. He possesses a sincere enthusiasm for learning and consistently exhibits a keen interest in exploring innovative strategies. Arpit's remarkable agility in quickly grasping new concepts and seamlessly implementing them is truly praiseworthy.",
    name: "Kuldeep Kaur Makhija",
    designation: "Project Manager",
    company: "AjnaLens",
    image: "https://media.licdn.com/dms/image/D4D03AQFY40Y6LsaiJQ/profile-displayphoto-shrink_400_400/0/1684985939522?e=1709769600&v=beta&t=UvIJj6KwkfUw8EKxkacWrg2Oxo3jLVTjUeYpmQNdPso",
  }
];

const projects = [
  {
    name: "3D Remote Collaboration",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "WebXR",
        color: "green-text-gradient",
      },
      {
        name: "WebRTC",
        color: "pink-text-gradient",
      },
    ],
    image: remote_tool,
    source_code_link: "https://github.com/Vaishya26/CS-5337/",
  },
  {
    name: "AI Price Pilot",
    description:
      "A tool specially designed for e-commerce companies for staying ahead in the market of competition.Easy viewable historical as well as real time dynamic data without any human intervention. Analyse and helps you to restructure your price strategy based on the competition",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Web Crawlers",
        color: "green-text-gradient",
      },
      {
        name: "CNN-KNN",
        color: "pink-text-gradient",
      },
    ],
    image: price_pilot,
    source_code_link: "https://github.com/Vaishya26/vistul_1",
  },
  {
    name: "Stanford AI Town",
    description:
      "The project aimed to create a miniature RPG-style virtual world where AI-controlled characters, powered by ChatGPT and custom code, simulate realistic behaviors, interactions, and decision-making",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: ai_town,
    source_code_link: "https://github.com/Vaishya26/Stanford-Town-AI-Project",
  },
  {
    name: "Flask-Folium",
    description:
      "An easiest way to plot maps using python(Flask Framework) and Folium without using any Cloud Api's.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Folium",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: flask_folium,
    source_code_link: "https://github.com/Vaishya26/Flask-Folium",
  },
];

export { services, technologies, experiences, testimonials, projects };
