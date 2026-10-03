/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  duration: 800
};

const greeting = {
  title: "Hi, my name is Emmanuel Muturia...",
  subTitle: emoji(
    "Hi, my name is Emmanuel Muturia, and I help fight Crime on The Internet through my practice in Product Security Engineering. Since 2019, I have been practising Computer Networking & Cyber Security [Telecommunications] and have acquired the foundational Knowledge required for my Career in Cyber Security. I work with Cyber Security Teams to help Businesses and Companies secure their Digital Products, therefore saving Costs incurred by Cyber Attacks and Security Breaches. I intend to leverage my Brand and other Resources to empower The General Population [GenPop] to protect their Digital Assets through Education and Awareness in Cyber Security, thereby creating a safer Cyber Space..."
  ),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  x: "https://x.com/emmanuelmuturia",
  youtube:
    "https://www.youtube.com/channel/UCg2Ponw8OIvcSXKwR6F5mMw?sub_confirmation=1",
  linkedin: "https://www.linkedin.com/in/emmanuelmuturia",
  instagram: "https://www.instagram.com/emmanuelmuturia/",
  tiktok: "https://www.tiktok.com/@emmanuelmuturia",
  medium: "https://medium.com/@emmanuelmuturia",
  github: "https://github.com/emmanuelmuturia",
  discord: "https://discord.com/users/612415290478952451",
  reddit: "https://www.reddit.com/user/emmanuelmuturia",
  threads: "https://www.threads.com/@emmanuelmuturia",
  snapchat: "https://www.snapchat.com/add/emmanuelmuturia",
  display: true // Set true to display this section, defaults to false
};

const videoSection = {
  display: true // Set false to hide this section, defaults to true
};

const productsSection = {
  display: true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Tech Communities",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/Android254.png"),
      projectName: "Android254",
      projectDesc: "",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.meetup.com/Android254"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Kotlin Kenya.png"),
      projectName: "Kotlin Kenya",
      projectDesc: "",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.meetup.com/KotlinKenya"
        }
      ]
    },
    {
      image: require("./assets/images/Space Ya Tech.png"),
      projectName: "Space Ya Tech",
      projectDesc: "",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.spaceyatech.com/"
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
      title: "KCNA [Kubernetes and Cloud Native Associate]",
      image: require("./assets/images/The KCNA [Kubernetes and Cloud Native Associate] Badge.png"),
      imageAlt: "KCNA: Kubernetes and Cloud Native Associate",
      url: ""
    },
    {
      title: "AWS Certified Cloud Practitioner",
      image: require("./assets/images/AWS Certified Cloud Practitioner.png"),
      imageAlt: "AWS Certified Cloud Practitioner",
      url: ""
    },
    {
      title: "Microsoft SC-900",
      image: require("./assets/images/Microsoft SC-900.png"),
      imageAlt: "Microsoft SC-900",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/emmanuelmuturia/B8FCE3614A1AB26C?sharingId=7A0D56BE201DBB61"
    },
    {
      title: "Microsoft AZ-104",
      image: require("./assets/images/Microsoft AZ-104.png"),
      imageAlt: "Microsoft AZ-104",
      url: "https://learn.microsoft.com/api/credentials/share/en-us/emmanuelmuturia/A27A40BE7EF89F6A?sharingId=7A0D56BE201DBB61"
    },
    {
      title: "CCNA [Introduction To Networking]",
      image: require("./assets/images/CCNA [Introduction To Networks].png"),
      imageAlt: "CCNA [Introduction To Networking]",
      url: ""
    },
    {
      title: "CCNA [Routing & Switching]",
      image: require("./assets/images/CCNA [Routing & Switching].png"),
      imageAlt: "CCNA [Routing & Switching]",
      url: ""
    },

    {
      title: "HCIA Datacom",
      image: require("./assets/images/HCIA [Datacom].png"),
      imageAlt: "HCIA Datacom",
      url: ""
    },

    {
      title: "HCIA WLAN",
      image: require("./assets/images/HCIA [WLAN].png"),
      imageAlt: "HCIA WLAN",
      url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications",
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

// Talks Sections

const talkSection = {
  title: "Talks & Sessions",
  subtitle: "",

  talks: [
    {
      title: "Application Security with Cyber Shujaa",
      subtitle: "",
      event_url: "https://youtu.be/ThRR8PhzczQ?si=ZvdaT4fgopNCVtOZ"
    },
    {
      title:
        "The Web Application Security Demo [feat. The OWASP Top 10 and Burp Suite] with Cyber Shujaa",
      subtitle: "",
      event_url: "https://youtu.be/Y2dmWkDr35w?si=jdU30LAhhAo5xdfN"
    },
    {
      title:
        "The Application Security Demo [feat. Google Cloud Build and GitLeaks] with Cyber Shujaa",
      subtitle: "",
      event_url: "https://youtu.be/pi36hPuP8EQ?si=F2C-SJ3fjb34H6f8"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

export {
  greeting,
  socialMediaLinks,
  splashScreen,
  videoSection,
  productsSection,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection
};
