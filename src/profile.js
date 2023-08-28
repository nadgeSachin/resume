const animation = {
  animate: true,
  duration: 750,
  once: false,
};
const header = {
  name: "Nadge Sachin Laxi",
};
const background = {
  type: "Snow",
};
const section2title = "About Me";
const about = {
  paragraph:
    "I am currently pursuing my Master of Computer Applications (MCA) at MNNIT Allahabad, with a strong interest in software development, web development, and data structures & algorithms. I am passionate about designing and implementing efficient algorithms, building responsive web applications, and creating seamless user experiences. I am constantly learning and staying updated with the latest technologies in the field of computer science. With my skills and knowledge, I am eager to contribute to the world of technology and make a meaningful impact. Please refer to my resume for more details about my education, skills, and projects.",
};
const skillsBar = [
  {
    name: "HTML5",
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];
const section3Title = "Past Projects";
const projects = [
  {
    id: "project1",
    name: "PDF Toolbox",
    skills: ["Python, PyPDF2, Pillow, React, Flask, HTML/CSS"],
    about: "Created a software application using Python, PyPDF2, and Pillow that enables users to merge, split, and add images to PDFs. Designed a user-friendly interface(React) to enhance user experience and improve productivity when working with PDFs. ",
    url: "https://github.com/nadgesachin",
    images: [
      require('./images/d1.png'),
      require('./images/d2.png'),
      require('./images/d3.png'),
      require('./images/d4.png'),
      require('./images/d5.png')
    ]

  },
  {
    id: "project2",
    name: "Algorithm Visualizer",
    skills: ["React, Node.js, Express, HTML/CSS, Algorithms"],
    about:"This software developer has created a data structure and algorithm visualizer using React and Node.js. The visualizer includes sorting algorithms and other algorithm visualizations that are easy to understand. The application simplifies complex concepts and helps users visualize algorithm behavior in real-time. ",
    url: "https://github.com/nadgesachin",
    images: [
      require('./images/dsa.png'),
      require('./images/p1.png'),
      require('./images/p4.png'),
      require('./images/p5.png'),
      require('./images/p6.png')
    ]
  },
  {
    id: "project3",
    name: "Download Manager",
    skills: ["Java, JavaFX, Multithreading,Java Networking"],
    about:"Creating a download manager using JavaFX and multithreading allows multiple download links to be processed concurrently. This project involves creating a user interface, implementing multithreading, using the Java networking API, displaying progress updates, handling errors, and allowing the user to pause, resume, and cancel downloads.",
    url: "https://github.com/nadgesachin",
  },
  {
    id: "project4",
    name: "Gmail Clone",
    skills: ["React, Node.js, MongoDB, MUI, Axios"],
    about: "This repository showcases a Gmail-clone crafted with React, MUI, and MongoDB. Designed responsively, it ensures optimal UX across devices. The application facilitates categorized email viewing like Inbox, Starred, and Bin. Users can star/unstar emails, manage drafts, and send or bin emails. The robust backend is developed using Node.js, Express, and MongoDB, supported by RESTful API endpoints for smooth email CRUD operations.",
    url: "https://github.com/nadgesachin",
    images: [
      require('./images/p8.png'),
      require('./images/p3.png'),
      require('./images/p7.png'),
    ],
  },
  {
    id: "project5",
    name: "WhatsApp Clone",
    skills: ["React, Node.js, Socket.io, MongoDB, Google OAuth"],
    about: "A robust WhatsApp clone built using the MERN stack, facilitating real-time chat functionalities. The app incorporates Google OAuth for authentication, and uses Socket.io to ensure instantaneous message delivery. The UI closely mirrors the original WhatsApp design, ensuring a familiar experience for users.",
    url: "https://github.com/nadgesachin",
    images: [
      require('./images/p9.png'),
      require('./images/p10.png'),
      require('./images/p11.png'),
      require('./images/p12.png'),
      require('./images/p13.png'),
    ],
  },
  {
    id: "project6",
    name: "Ecommerce Website",
    skills: ["HTML, CSS, JS"],
    about:"",
    url: "https://github.com/nadgesachin",
  },
  {
    id: "project6",
    name: "Intagram Clone",
    skills: ["HTML, CSS, JS"],
    about:"",
    url: "https://github.com/nadgesachin",
  },
  {
    id: "project6",
    name: "Blog Website",
    skills: ["HTML, CSS, JS"],
    about:"",
    url: "https://github.com/nadgesachin",
  },
  {
    id: "project6",
    name: "Music Player",
    skills: ["Java, Android Studio, XML"],
    about:"Android App",
    url: "https://github.com/nadgesachin",
  },
  {
    "id": "project7",
    "name": "Music Player",
    "skills": ["Java", "Android Studio", "XML"],
    "about": "An Android App designed to play music files from the user's device. It lists all available songs and provides playback controls such as play, pause, skip to next/previous, and repeat options (single, all).",
    "url": "https://github.com/nadgesachin"
  }
  
  
];
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    id: "misc1",
    name: "Miscellaneous 1",
    about:"",
    url: "https://github.com/kaustubhai",
  }
];
const section5Title = "Contact me";
const contact = {
  pitch:"Available for inquiries, collaborations, and freelance opportunities. Your feedback is valuable. Let's connect and explore how we can work together to achieve our goals.",
  copyright: "Nadge Sachin ",
  contactUrl: "https://formspree.io/f/mwkdkywy",
};
const social = {
  github: "https://github.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  resume: "https://novoresume.com/",
};
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};

