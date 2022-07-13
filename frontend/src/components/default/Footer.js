import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/images/icons8-facebook-150.svg";
import InstagramIcon from "../../assets/images/icons8-instagram-150.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <h2>Shop and Learn</h2>
          <div className="footer-content">
            <Link to="/sign-up">Sign up</Link>
            <Link to="/sign-in">Sign in</Link>
            <Link to="/">Item lists</Link>
          </div>
        </div>
      </div>

      <hr className="line" />
      <p className="copyright">
        Copyright © 2021 HIVE techwear. All rights reserved. Privacy Policy|Term
        of Use Sales Policy|Legal|Site|Map
      </p>
    </footer>
  );
};

export default Footer;
