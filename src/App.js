import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./global.css";
import "./reset.css";
import baskLogo from "./assets/logos/bask-logo.svg";
import memberConnect from "./assets/icons/member-connect.svg";
import homePhone from "./assets/images/homephone.png";
import home4 from "./assets/images/home4.png";
import desk4 from "./assets/images/desk4@2x.png";
import grayPhone from "./assets/icons/phone-icon-grey.svg";
import twitterIcon from "./assets/icons/twitter-icon.svg";
import lindedinIcon from "./assets/icons/linkedin-icon.svg";
import facebookIcon from "./assets/icons/facebook-icon.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <head>
          <link rel="stylesheet" href="./reset.css" />
          <link rel="stylesheet" href="./global.css" />
          <link rel="stylesheet" href="./aboutus.css" />
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>About us</title>
        </head>

        <body>
          <header class="header-wrapper">
            <div class="inner-header">
              <img class="header-logo" src={baskLogo} alt="bask logo" />
              <ul class="desktopNav">
                <a class="headerLink" href="">
                  Why Bask
                </a>
                <a class="headerLink" href="">
                  Product
                </a>
                <a class="headerLink" href="">
                  Pricing
                </a>
                <a class="headerLink" href="">
                  Contact Us
                </a>
              </ul>
              <button class="connect-button">
                <img
                  class="memberContactIcon"
                  src={memberConnect}
                  alt="member connect icon"
                />
                <p class="header-button-text">Member Connect</p>
              </button>
            </div>
            <div class="desktopTitle center">
              <h1 class="whiteTitle">About us</h1>
              <p class="header-paragraph center">
                At Bask we only hire people who take pride in their work –it’s
                not just about reading a shiny resume for us, but about
                recognizing good people with good ethical values. This is what
                makes us more than just tech support, we are people support.
              </p>
            </div>
          </header>

          <img
            class="mobile-img whiteSpace32 center"
            src={homePhone}
            alt="woman on phone"
          />
          <div class="desktopWrapper">
            <img class="desktopImg " src={home4} alt="woman on phone2" />
            <div class="desktopBlock">
              <div class="desktopBlockContent whiteSpace48">
                <h1 class="mobile-title-left whiteSpace32">Our goal?</h1>
                <p class="mobile-gray-text whiteSpace16">
                  To solve your tech issues. Whatever your device, whatever your
                  problem, our whole team strives towards one central goal of
                  quickly and effectively resolving it.
                </p>
                <p class="mobile-gray-text whiteSpace32">
                  We know how frustrating it is when computers, phones or other
                  devices around your home start to go wrong, that’s why we own
                  your problem from the moment you get in touch until the moment
                  we are certain it is fully fixed.
                </p>
                <button class="mobileRedButton center">
                  Get better service now
                </button>
              </div>
            </div>
          </div>

          <div class="desktopWrapper ">
            <div class="desktopBlock">
              <img
                class="mobile-img center whiteSpace32"
                src={homePhone}
                alt="woman on phone"
              />
              <div class="desktopBlockContent">
                <h1 class="mobile-title-left whiteSpace32">
                  Our team. Our values.
                </h1>
                <p class="mobile-gray-text whiteSpace16">
                  Our approach stems from having some of the most caring,
                  experienced and dedicated tech and customer service agents in
                  the USA on our team to help you out directly.
                </p>
                <p class="mobile-gray-text whiteSpace16">
                  We have a bunch of the most talented and experienced
                  engineers, developers, analysts, marketers and technology
                  innovators on the planet behind the scenes creating new
                  software and hardware.
                </p>
                <p class="mobile-gray-text whiteSpace32">
                  We are truly unique in being able to offer you a whole home
                  tech support solution.
                </p>
                <button class="mobileRedButton center">
                  Get better service now
                </button>
              </div>
            </div>
            <img class="desktopImg" src={desk4} alt="group on phone" />
          </div>

          <div class="whiteSpacemobile64" />
          <img
            class="mobile-img center whiteSpace32"
            src={homePhone}
            alt="woman on phone"
          />
          <div class="desktopWrapperBottom whiteSpace64">
            <img class="desktopImg" src={home4} alt="woman on phone" />
            <div class="desktopBlock">
              <div class="desktopBlockContent">
                <h1 class="mobile-title-left whiteSpace32">
                  Our core difference.
                </h1>
                <p class="mobile-gray-text whiteSpace16">
                  We offer a guarantee on all our fixes. We believe there is no
                  better way to show confidence in what we do then to back it up
                  with a 14-day guarantee.
                </p>
                <p class="mobile-gray-text whiteSpace32">
                  No if’s, no but’s and certainly no form filling – if we fix
                  something and the same problem reoccurs within 14 days, simply
                  call us right back.{" "}
                </p>
                <button class="mobileRedButton center">
                  Get better service now
                </button>
              </div>
            </div>
          </div>

          <h1 class="mobile-title-center whiteSpace32">Our team</h1>
          <div class="teamWrapper whiteSpace32">
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
            <div class="teamMember">
              <div class="teamImage" />
              <h3 class="teamName">John Johnsonville</h3>
              <p class="teamTitle">Chief Marketing Officer</p>
            </div>
          </div>

          <footer class="footer-wrapper">
            <div class="footerDesktop">
              <ul class="footerLinks">
                <li class="footerLink">
                  <a href="#">AboutUs</a>
                </li>
                <li class="footerLink">
                  <a href="#">Partners</a>
                </li>
                <li class="footerLink">
                  <a href="#">Careers</a>
                </li>
                <li class="footerLink">
                  <a href="#">Privacy</a>
                </li>
                <li class="footerLink">
                  <a href="#">Press</a>
                </li>
                <li class="footerLink">
                  <a href="#">Blog</a>
                </li>
              </ul>
              <div class="footerContactDesktop ">
                <p class="footerText">Call to get a free diagnosis!</p>
                <img
                  class="greyPhoneIcon"
                  src={grayPhone}
                  alt=""
                />
                <p class="footerText" id="phoneNumber">
                  1-855-436-4621
                </p>
              </div>
            </div>

            <div class="innerFooter">
              <div class="logoDesktop">
                <img
                  class="header-logo"
                  src={baskLogo}
                  alt="bask logo"
                />
                <div class="social-media-icon-wrapper">
                  <img
                    class="social-media-icon"
                    src={twitterIcon}
                    alt="Twitter Icon"
                  />
                  <img
                    class="social-media-icon"
                    src={lindedinIcon}
                    alt="LinkedIn Icon"
                  />
                  <img
                    class="social-media-icon"
                    src={facebookIcon}
                    alt="Facebook Icon"
                  />
                </div>
              </div>
              <div class="copyrightText">
                <p class="footerText copyrightTextDesktop">
                  © Bask. All Rights Reserved.
                </p>
              </div>
            </div>

            <div class="footerContact mobile">
              <p class="footerText">Call to get a free diagnosis!</p>
              <img
                class="greyPhoneIcon"
                src={grayPhone}
                alt=""
              />
              <p class="footerText" id="phoneNumber">
                1-855-436-4621
              </p>
            </div>
            <div class="copyrightText">
              <p class="footerText mobile">© Bask. All Rights Reserved.</p>
            </div>
          </footer>
        </body>
      </div>
    );
  }
}

export default App;
