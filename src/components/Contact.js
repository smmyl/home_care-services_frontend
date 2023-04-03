import axios from "axios";
import { useState, useEffect } from "react";
import Map from "./Google";

const Contact = (props) => {
  return (
    <div class="page">
      <div class="home-top">
        <div class="hometop-info">
          <h4 className="bluetop">
            HomeCare Services is a personal home response company that aids the
            elderly through personal care. The company's service solves an
            elderly home security issue by giving elderly a hand to avoid
            unforseen circumstances. Weather it be help with cleaning, food
            delivery or monitoring, HomeCare Services does it all.
          </h4>
          <p2>
            
            Email us at<span>HomeCareServices@gmail.com</span>
          </p2>
          <p2>
            
            or call us at <span>888-888-888</span>
          </p2>
          <ul className="links">
            <li>
              <a href="https://www.facebook.com/">
                <img src="https://freepngimg.com/thumb/facebook/62588-and-icons-facebook-computer-black-logo-white.png" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <img src="https://sguru.org/wp-content/uploads/2018/02/5a2fe479cc45e43754640849.png" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <img src="https://sguru.org/wp-content/uploads/2018/02/linkedin-png-linkedin-icon-1600.png" />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/">
                <img src="https://www.pngarts.com/files/8/Black-Github-Logo-PNG-Image-Background.png" />
              </a>
            </li>
          </ul>
        </div>
        <div class="hometop-img">
          <img src="https://images.pexels.com/photos/5585242/pexels-photo-5585242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
      </div>
      <div class="home-bot">
        <div class="hometop-img">
          <Map />
        </div>
        <div class="homebot-info1">
          <div>
            <h3>Hours of operation:</h3>
            <ul className="hours">
                <li>Monday: 8 AM - 7 PM</li>
                <li>Tuesday: 8 AM - 7 PM</li>
                <li>Wednesday: 8 AM - 7 PM</li>
                <li>Thursday: 8 AM - 7 PM</li>
                <li>Friday: 7 AM - 8 PM</li>
                <li>Saturday: 7 AM - 8 PM</li>
                <li>Sunday: 7 AM - 6 PM</li>
            </ul>
            <br />
            <h4>Our office is located at 177a Bleecker St, New York, NY 10012 </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;