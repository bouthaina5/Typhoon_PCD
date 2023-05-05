import React, { useState, useEffect, useRef } from "react";
import Contacts from "../components/User/Contacts/Contacts";
import Education from "../components/User/Importance/Importance";
import Experience from "../components/User/Concept/Concept";

import Footer from "../components/User/Footer/Footer";
import PageIntro from "../components/User/PageIntro/PageIntro";

import Skills from "../components/User/Skills/Skills";
import isLogin from "../shared/authorization";
import { useSelector } from "react-redux";
import Navbar from "../components/User/Navbar/Navbar";

const PortfolioUI = () => {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);
  const educationSection = useRef(null);
  const experienceSection = useRef(null);
  const skillSection = useRef(null);
  const contactSection = useRef(null);
  const homeSection = useRef(null);
  const aboutSection = useRef(null);

  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);

  const scrollUtil = (section) => {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: "smooth",
    });
  };
  const onLinkClick = (section) => {
    switch (section) {
        case "aboutSection":
          scrollUtil(aboutSection);
          break;
      case "educationSection":
        scrollUtil(educationSection);
        break;
      case "experienceSection":
        scrollUtil(experienceSection);
        break;
      case "skillSection":
        scrollUtil(skillSection);
        break;
      case "contactSection":
        scrollUtil(contactSection);
        break;
      case "homeSection":
        scrollUtil(homeSection);
        break;
      default:
        scrollUtil(homeSection);
    }
  };

  return (
    <div>
      {!isLogged && <Navbar onLinkClick={onLinkClick} />}
      <PageIntro reff={homeSection} />
      <Education reff={educationSection} />
      <Experience reff={experienceSection} />
      <Skills reff={skillSection} />
      <Contacts reff={contactSection} />
      <Footer onLinkClick={onLinkClick} />
    </div>
  );
};

export default PortfolioUI;