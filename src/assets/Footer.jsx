import React from "react";
import you from "../assets/you.png";
import link from "../assets/link.png";
import inst from "../assets/inst.png";
import face from "../assets/face.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="icon">
          <img src={link} alt="LinkedIn" />
          <img src={you} alt="YouTube" />
          <img src={inst} alt="Instagram" />
          <img src={face} alt="Facebook" />
        </div>

        <p className="mar">
          Bandal Capital, 7, Paud Rd, Left <br />
          Bhusari Colony, Bharti Nagar, <br />
          Kothrud, Pune, Maharashtra 411038
        </p>
      </div>

      <div className="footer-right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.735064837602!2d73.79276974672592!3d18.50764538441906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb40c6c0001%3A0xc3d1e144b471b733!2sBandal%20Capital%2C%207%2C%20Paud%20Rd%2C%20Left%20Bhusari%20Colony%2C%20Bharti%20Nagar%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1784441682008!5m2!1sen!2sin"
          title="Google Map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;