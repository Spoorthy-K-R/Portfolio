import React from "react";
import Header from "../components/header/Header";
import Greeting from "../components/greeting/Greeting";
import Profile from "../components/profile/Profile";
import Education from "../components/education/Education";
import Skills from "../components/skills/Skills";
import HorizontalSwipeStack from "../components/cards/Cards";
// import StackProgress from "../components/skillProgress/skillProgress";
// import GithubProfileCard from "../components/githubProfileCard/GithubProfileCard";
// import {openSource} from "../components/portfolio";
// import SplashScreen from "./splashScreen/SplashScreen";
// import {splashScreen} from "../portfolio";
// import {StyleProvider} from "../contexts/StyleContext";
// import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.css";
import WorkExperience from "../components/workExperience/WorkExperience";
import Achievement from "../components/achievement/Achievement";

const Main = () => {
  // const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  // const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  // const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
  //   useState(true);

  // useEffect(() => {
  //   if (splashScreen.enabled) {
  //     const splashTimer = setTimeout(
  //       () => setIsShowingSplashAnimation(false),
  //       splashScreen.duration
  //     );
  //     return () => {
  //       clearTimeout(splashTimer);
  //     };
  //   }
  // }, []);

  // const changeTheme = () => {
  //   setIsDark(!isDark);
  // };

  return (

    
    <div className="main-container">
      <Header />        
      <Greeting />
      <Skills />
      {/* <StackProgress /> */}
      <WorkExperience />
      <Education />
      <HorizontalSwipeStack/>
      {/* <Achievement /> */}
      <Profile/>
    </div>
    // <div className={isDark ? "dark-mode" : null}>
    //   <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
    //     {isShowingSplashAnimation && splashScreen.enabled ? (
    //       <SplashScreen />
    //     ) : (
    //       <>
    //         <Header />
    //         <Greeting />
    //       </>
    //     )}
    //   </StyleProvider>
    // </div>
  );
};

export default Main;
