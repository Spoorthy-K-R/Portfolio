/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import brainAnimation from "../assets/lottie/brain1";
import movieAnimation from "../assets/lottie/movie";
import studentAnimation from "../assets/lottie/student";
import signal from "../assets/lottie/signal"; 
import splitSignal from "../assets/lottie/splitSignal"; 
// import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// // Splash Screen

// const splashScreen = {
//   enabled: true, // set false to disable splash screen
//   animation: splashAnimation,
//   duration: 2000 // Set animation duration as per your animation
// };

// // Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Spoorthy",
  java: "print(\"Hello World\")",
  title: "I'm Spoorthy",
  subTitle: [
    [
      "➤ I'm a Full Stack Developer and AI enthusiast, currently pursuing a Master's degree in Computer Science at ",
      "Texas A&M University",
      "."
    ],
    [
      "➤ Former Software Engineer at ",
      "JP Morgan Chase",
      " with 2+ years of experience building scalable microservices using Java-Spring Boot and React"
    ],
    ["➤ Now diving deeper into AI, backed by a strong academic foundation with a ",
    "gold medal",
    "  for graduating top of my class in B.Tech."
    ]
  ],
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/spoorthy-k-r",
  linkedin: "https://www.linkedin.com/in/spoorthy-k-r-1801/",
  gmail: "spoorthykr1801@gmail.com",
  medium: "https://medium.com/@spoorthykr1801",
  instagram: "https://www.instagram.com/spoorthy_1801/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER TURNED CS GRAD, EXPLORING THE WORLD OF AI",
  skills: [
    emoji(
      "⪼ Develop robust microservices using Spring Boot, MQ and Kafka for high-performance and scalable applications"
    ),
    emoji(
      "⪼ Develop highly interactive Front end / User Interfaces using React"
    ),
    emoji("⪼ Research and development of AI models to solve real-world problems using Python, TensorFlow and MATLAB"),
    emoji(
      "⪼ Integration of AI models into applications for intelligent features like recommendations, automation and natural language understanding"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Texas A&M University",
      logo: require("../assets/images/TAMULogo.jpg"),
      subHeader: "Masters Degree in Computer Science",
      duration: "August 2025 - May 2027",
      desc: "",
      descBullets: [
        "Coursework in AI, Software Engineering and Advanced Algorithms",
      ]
    },
    {
      schoolName: "PES University (CGPA 9.68/10)",
      logo: require("../assets/images/PESLogo.png"),
      subHeader: "B.Tech Electronics and Communication Engineering",
      duration: "August 2019 - May 2023",
      desc: "",
      descBullets: ["Gold Medalist",
        "Minor course in Data Structures and Cybersecurity",
        "Teaching Assistant for Digital Image Processing",
        "Class Representative for 3 years",
        "IEEE publications based on Deep Learning"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      // image: require("./assets/images/nextuLogo.webp"),
      id: 1,
      projectName: "Deep Learning for RSMA",
      projectDesc: "A deep learning-based framework to optimize resource allocation and signal decoding in Rate-Splitting Multiple Access (RSMA) systems.",
      
      repoLink: "https://github.com/Spoorthy-K-R/Deep-Learning-for-RSMA",
      publicationLink: "https://ieeexplore.ieee.org/document/10068068",
      conference: "2023 National Conference on Communications (NCC)",
      lottie: splitSignal
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      id: 2,
      projectName: "Genomage",
      projectDesc: "A Deep Learning Framework for Radiogenomic Classification of Brain Tumors",
      
      repoLink: "https://github.com/Spoorthy-K-R/Deep-Learning-based-approach-for-Radiogenomic-Classification-of-Brain-Tumor",
      publicationLink: "https://ieeexplore.ieee.org/document/10039760",
      conference: "2022 IEEE 19th India Council International Conference (INDICON)",
      lottie: brainAnimation
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      id: 4,
      projectName: "Deep Learning for NOMA",
      projectDesc: "A Deep Learning Approach for Signal Detection in Non-Orthogonal Multiple Access Systems",
      
      repoLink: "https://github.com/Spoorthy-K-R/Deep-Learning-for-Signal-Detection-in-NOMA-systems",
      lottie: signal
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      id: 3,
      projectName: "Sobus",
      projectDesc: "A platform that streamlines data-driven matchmaking between skilled job seekers, entrepreneurs, and potential investors or companies.",
    
      repoLink: "https://github.com/Spoorthy-K-R/NGO-website-cfg",
      lottie: studentAnimation
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      id: 5,
      projectName: "Movie Recommender System",
      projectDesc: "A recommender system using collaborative filtering to generate personalized suggestions based on user preferences and behavior.",
    
      repoLink: "https://github.com/Spoorthy-K-R/Deep-Learning-for-detection-of-Cognitive-Impairment",
      lottie: movieAnimation
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "JP Morgan Chase & Co.",
      companylogo: require("../assets/images/jpmorganlogo.png"),
      date: "Jun 2023 – Present",
      desc: [
        "Implemented features to improve the functionality and operational efficiency of services handling FX Options trade settlement"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "JP Morgan Chase & Co. - Spring Intern",
      companylogo: require("../assets/images/jpmorganlogo.png"),
      date: "Feb 2023 – May 2023",
      desc: [
        "Developed a React dashboard for real-time monitoring of microservices on Kubernetes cluster, with features for instance scaling and log streaming to enhance troubleshooting efficiency",
        "Implemented features to analyze individual trade flow and status, enabling quick identification of processing failures and boosting test environment support efficiency",
        "Created RESTful APIs using Spring Boot and integrated with frontend React components",
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Bosch - Summer Intern",
      companylogo: require("../assets/images/boschlogo.png"),
      date: "Jun 2022 – Jul 2022",
      desc: [
        "Researched and implemented deep learning models for signal processing applications",
        "Developed Python scripts for data preprocessing and model training",
        "Created visualization tools for analyzing model performance",
        "Presented findings and recommendations to the technical team"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Gold Medalist",
      subtitle:
        "First - to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("../assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Scholarships",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("../assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Schedule an INTERVIEW? My Inbox is open ",
  number: "+91-8660382649",
  mail: "spoorthykr1801@gmail.com",
  email_address: "spoorthykr1801@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  // splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable,
  resumeSection
};
