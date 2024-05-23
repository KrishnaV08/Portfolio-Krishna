import { useEffect } from "react";
import headerimg from "../../assests/IMG_3364 2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={headerimg} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Krishna Verma</h3>
        <p data-aos="fade-up">
          Dedicated individual with expertise in Data Structures and Algorithms (DSA) and a  background in Front-End Web Development and Back-End Web Development. Armed with a solid academic foundation in Information Technology, I bring a dynamic skill set that includes proficiency in HTML, CSS, JavaScript, and modern web frameworks. I am adept at problem-solving, quick to adapt to emerging technologies, and thrive in collaborative environments. Football Enthusiast and a part of the university gold medalist football team (Zonals and States Gold).
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contacts" className="btn primary">
            Get In Touch
          </a>
        </div>
        <div className="header__socials">
        </div>
      </div>
    </header>
  );
};

export default Header;
