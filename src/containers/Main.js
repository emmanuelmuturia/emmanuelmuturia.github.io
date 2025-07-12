import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import "./Main.scss";
import Labs from "./labs/Labs";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  return (
    <div className="dark-mode">
      {isShowingSplashAnimation && splashScreen.enabled ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Projects />
          <StartupProject />
          <Achievement />
          <Blogs />
          <Labs />
          <Talks />
          <Twitter />
          <Podcast />
          <Profile />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
};

export default Main;
