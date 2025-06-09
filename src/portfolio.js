/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Emmanuel Muturia",
  title: "Hi, my name is Emmanuel Muturia...",
  subTitle: emoji("I practise Cyber Security, specialising in Mobile..."),
  resumeLink: "", // Set to empty to hide the button
  profileImage: require("./assets/images/profile_photo.png"),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/emmanuelmuturia",
  twitter: "https://x.com/emmanuelmuturia",
  linkedin: "https://www.linkedin.com/in/emmanuelmuturia",
  medium: "https://medium.com/@emmanuelmuturia",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  skills: [
    "- Mobile App Development [Android]...",
    "- Mobile Design [UI/UX]...",
    "- Mobile Security [Mobile Apps]..."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Strathmore University",
      logo: require("./assets/images/strathmoreUniversityLogo.png"),
      subHeader: "Bachelor of Science [BSc.] in Telecommunications",
      desc: "I took up Leadership roles in the following Clubs & Societies:",
      descBullets: [
        "Google Developer Student Clubs [GDSC]...",
        "Millenium Campus Network [MCN]...",
        "Strathmore Business Club [SBC]..."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android Engineering",
      company: "DroidCon Kenya",
      companylogo: require("./assets/images/droidcon_kenya.png"),
      date: "June 2023 – Present",
      descBullets: [
        "Resolved a critical issue on the “Filter” button in the “Sessions” tab, enhancing Jetpack Compose UI stability and reducing app crashes leading to the release of the final product with over 100 downloads",
        "Optimised Android SDK components by eliminating redundant String declarations and improving CI/CD processes"
      ]
    },
    {
      role: "Android Development [Contract]",
      company: "CIFOR-ICRAF",
      companylogo: require("./assets/images/cifor_icraf.jpeg"),
      date: "June 2024 – Sep 2024",
      descBullets: [
        "Improved the User Experience [UX] by testing the Regreening App and facilitating knowledge sharing in a team environment by participating in workshops that improved team productivity and alignment",
        "Debugged and optimised RESTful API calls and leveraged Room [SQLite] for offline data storage, reducing data synchronisation time"
      ]
    },
    {
      role: "Network Operations Centre Engineering [Internship]",
      company: "Kinde Engineering Works Ltd.",
      companylogo: require("./assets/images/kinde_engineering_works.png"),
      date: "Feb 2023 – April 2023",
      descBullets: [
        "Acknowledged assigned tickets on the Remedy BMC platform and reached out to the technicians assigned to the regions adjacent to the location of the Fibre faults"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Tech Communities",
  subtitle:
    "Besides my Technical Skills, I also help organise these Tech communities:",
  projects: [
    {
      image: require("./assets/images/android254.png"),
      projectName: "Android254",
      projectDesc:
        "Android254 brings together Android Engineers to learn more about Android, best practices and also hear talks from industry experts...",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.meetup.com/Android254"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/kotlinKenya.png"),
      projectName: "Kotlin Kenya",
      projectDesc:
        "Karibu Kotlin Kenya! We are a collective bunch of lovely people from all different backgrounds interested in this fun[ctional] language that has been taking the programming world by storm [well, at least in the JVM arena]...",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.meetup.com/KotlinKenya"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  achievementsCards: [
    {
      title: "CCNA [Introduction To Networking]",
      image: require("./assets/images/ccna.png"),
      imageAlt: "CCNA [Introduction To Networking]",
      url: ""
    },
    {
      title: "CCNA [Routing & Switching]",
      image: require("./assets/images/ccnaRS.png"),
      imageAlt: "CCNA [Routing & Switching]",
      url: ""
    },

    {
      title: "AWS Certified Cloud Practitioner",
      image: require("./assets/images/awsCloudPractitioner.png"),
      imageAlt: "AWS Certified Cloud Practitioner",
      url: ""
    },

    {
      title: "HCIA Datacom",
      image: require("./assets/images/hciaDatacom.png"),
      imageAlt: "HCIA Datacom",
      url: ""
    },

    {
      title: "HCIA WLAN",
      image: require("./assets/images/hciaWLAN.png"),
      imageAlt: "HCIA WLAN",
      url: ""
    },

    {
      title: "Microsoft SC-900",
      image: require("./assets/images/sc900.png"),
      imageAlt: "Microsoft SC-900",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/emmanuelmuturia/B8FCE3614A1AB26C?sharingId=7A0D56BE201DBB61"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// src/portfolio.js
const labsSection = {
  display: true,
  displayLabs: "true",
  title: "Labs",
  labs: [
    {
      pdfUrl: "/pdfs/lab1.pdf",
      title: "Lab #1 [Microsoft Identity and Access Management Solutions Lab]"
    },
    {
      pdfUrl: "/pdfs/lab2.pdf",
      title: "Lab #2 [Describe Capabilities of Microsoft Security Solutions]"
    },
    {
      pdfUrl: "/pdfs/lab3.pdf",
      title: "Lab #3 [Manage Microsoft Entra ID Identities]"
    },
    {
      pdfUrl: "/pdfs/lab4.pdf",
      title: "Lab #4 [Capabilities of Microsoft Compliance Solution]"
    },
    {
      pdfUrl: "/pdfs/lab5.pdf",
      title: "Lab #5 [Manage Subscriptions and RBAC]"
    },
    {
      pdfUrl: "/pdfs/lab6.pdf",
      title: "Lab #6 [Manage Governance via Azure Policy]"
    },
    {
      pdfUrl: "/pdfs/lab7.pdf",
      title:
        "Lab #7 [Manage Azure resources by using Azure Resource Manager Templates]"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("Here are a few presentations that I have given..."),

  talks: [
    {
      title: "Unlocking Passkeys in Android (feat. Credentials Manager)",
      subtitle: "Android254 Monthly Meetup",
      slides_url:
        "https://speakerdeck.com/emmanuelmuturia/unlocking-passkeys-in-android-feat-credentials-manager",
      event_url: "https://www.meetup.com/android254"
    },
    {
      title: "The 3 Musketeers of Android Security (feat. Africa's Talking)",
      subtitle: "Africa's Talking Summit 2023",
      slides_url:
        "https://speakerdeck.com/emmanuelmuturia/the-3-musketeers-of-android-security-feat-africas-talking",
      event_url: "https://summit.africastalking.com/"
    },
    {
      title: "How To Build Insecure Android Apps (feat. Sanitizers)",
      subtitle: "DroidCon Kenya 2023",
      slides_url:
        "https://speakerdeck.com/emmanuelmuturia/how-to-build-insecure-android-apps-feat-sanitizers",
      event_url: "https://droidcon.co.ke/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact"),
  email_address: "science@emmanuelmuturia.com"
};

// Twitter Section

const twitterDetails = {
  userName: "emmanuelmuturia", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  labsSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
