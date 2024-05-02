import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div
          className="container footer df
        jcsb"
        >
          <div className="footer__left df jcsb">
            <ul className="footer__list">
              <li>Sustainability</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Careers</li>
            </ul>
            <ul className="footer__list">
              <li>Privacy Policy</li>
              <li>CA Privacy Rights</li>
              <li>Terms of Use</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className="footer__right">
            <h3>ONLY GOOD HAIR DAES AHEAD—AND 10% OFF YOUR FIRST ORDER</h3>
            <form action="" className="footer__form">
              <input type="text" />
              <a href="#">SUBSCRIBE</a>
            </form>
            <p>Want to shop in person? Swing by our showroom.</p>
            <p>M-F, 10am-2pm 5051 E Indigo St, Suite 105, Mesa, AZ 85205</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2021dae . All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
