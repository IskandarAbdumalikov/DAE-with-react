import React from "react";
import logo from "../../logo.svg";
import pocket from "../../images/packet.svg";
import hamburger from "../../images/hamburger.svg"

const Header = () => {
  return (
    <>
      <header>
        <div className="header__top">
          <p>Free Shipping on US Orders Over $60</p>
        </div>
        <div className="container">
          <nav className="header__nav df jcsb">
            <div className="nav__left">
              <img className="hamburger" src={hamburger} alt="" />
              <ul className="nav__left__link df gap-50">
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">The Edit</a>
                </li>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
              </ul>
            </div>
            <div className="nav__middle df gap-50">
              <div className="nav__logo">
                <a href="#">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="nav__right">
              <div className="nav__btns df gap-50">
                <a href="#">Account</a>
                <img src={pocket} alt="" />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
