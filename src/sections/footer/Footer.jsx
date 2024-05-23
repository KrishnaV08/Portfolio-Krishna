import { socials, links } from "./data";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="conatainer footer__container">
        <ul className="nav__menu">
          {links.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          <p className="krishna"> Portfolio by Krishna Verma</p>
        </div>
      </div>
      <div className="footer__copyright">
      </div>
    </footer>
  );
};

export default Footer;
