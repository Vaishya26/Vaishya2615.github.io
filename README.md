# Arpit Vaishya - 3D Portfolio

<div align="center">
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">3D Developer Portfolio</h3>
  
  <p align="center">
    <a href="https://arpitvaishya.tech">Live Demo</a> •
    <a href="https://github.com/Vaishya26/Vaishya2615.github.io">Repository</a>
  </p>
</div>

## 🤖 Introduction

A modern, interactive 3D portfolio website showcasing my work as a Full-Stack Developer specializing in WebXR, AR/VR/XR technologies, and 3D web development. Built with React, Three.js, and modern web technologies to create an immersive user experience.

## ⚙️ Tech Stack

- **Frontend Framework**: React.js
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Email Service**: EmailJS
- **Deployment**: GitHub Pages

## 🔋 Features

- **3D Hero Section**: Interactive 3D desktop PC model with customizable monitor display
- **Work Experience Timeline**: Animated vertical timeline showcasing professional experience
- **3D Technologies Section**: Skills displayed using 3D geometries
- **Projects Showcase**: Animated project cards with descriptions and links
- **Contact Section**: 3D Earth model with integrated contact form
- **3D Stars Background**: Procedurally generated starfield using Three.js
- **Smooth Animations**: Consistent animations throughout using Framer Motion
- **Responsive Design**: Fully responsive layout optimized for all devices

## 🤸 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v16 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vaishya26/Vaishya2615.github.io.git
cd Vaishya2615.github.io
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Set up environment variables (optional, for contact form):
Create a `.env` file in the root directory:
```env
VITE_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_APP_EMAILJS_TO_EMAIL=your_email_address
```

**Note**: If environment variables are not set, the component will use default values. However, it's recommended to set up your own EmailJS account for production use.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

### Deploying to GitHub Pages

```bash
npm run deploy
```

This will build the project and deploy it to the `master` branch for GitHub Pages.

## 📁 Project Structure

```
├── public/
│   ├── desktop_pc/          # 3D desktop PC model and textures
│   ├── planet/              # 3D Earth model
│   └── logo.svg
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # React components
│   │   ├── canvas/          # 3D canvas components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/           # Data constants
│   ├── hoc/                 # Higher-order components
│   ├── utils/               # Utility functions
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## 🌐 Live Website

Visit the live portfolio at: **[arpitvaishya.tech](https://arpitvaishya.tech)**

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For inquiries or collaborations, please reach out through the contact form on the website or connect via the links provided in the portfolio.

---

Built with ❤️ by Arpit Vaishya
