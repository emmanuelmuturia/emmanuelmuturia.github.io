import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Videos from "./videos/Videos";
import Products from "./products/Products";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import "./Main.scss";

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
          <Videos />
          <Products />
          <Projects />
          <StartupProject />
          <Achievement />
          <Blogs />
          <Talks />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
};

export default Main;
