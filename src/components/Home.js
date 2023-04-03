import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";


const Home = (props) => {
  return (
    <div class="page">
      <Helmet>
      </Helmet>
      <div class="home-top">
        <div class="hometop-info">
          <h4 className="bluetop">
          Our company feels a great sense of fulfillment and purpose in serving 
          the elderly and giving back to those who have already contributed so 
          much to society. There is a deep respect and admiration for the wisdom, 
          experience, and knowledge that the elderly possess. Helping to improve the lives of our 
          seniors can be a rewarding experience, as it allows us to express gratitude 
          for all that they have done and to make a positive impact on their quality of life.
          </h4>
          <p className="homelink">
          <a onClick={props.showRegister}>Sign Up</a><br/>
          <a onClick=''>Login</a><br/>
          <a onClick={props.showContact}>Contact</a><br/>
          <p2>
            {" "}
            or call us at <span>888-888-888</span>
          </p2>
          </p>
        </div>
        <div class="hometop-img">
          <img src="https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
      </div>
      <div class="home-mid">
        <div class="homemid-info1">
          
          <h4>"One of the things I appreciate most about this job is the relationships I have built with our clients. They have such a wealth of knowledge and experience and it is an honor to be able to learn from them and provide them with the care and support they need. Seeing the impact our services have on their lives is incredibly fulfilling and motivates me to continue doing this work."<h3>- Wes (Caretaker)</h3></h4>
          </div>
        <div class="homemid-info2">
          <h4>"The staff members are all incredibly kind, patient, and understanding, and they truly go above and beyond to make sure that my needs are met. They make me feel like I am part of their family and always take the time to chat with me and listen to my stories. I appreciate that they take the time to get to know me on a personal level, which makes me feel valued and respected. The services they provide are top-notch, and I am grateful for their help in making my life easier and more enjoyable. I would highly recommend this organization to anyone looking for reliable and compassionate care for the elderly."<h3> - Daniel (Member)</h3></h4>
        </div>
      </div>
      <div class="home-bot">
      </div>
    </div>
  );
};

export default Home;
