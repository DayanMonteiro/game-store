import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="social-icons">
        <FaFacebook className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaTwitter className="social-icon" />
      </div>
    </div>
  );
};

export default Footer;
