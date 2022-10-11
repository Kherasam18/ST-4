import React from "react";
import MultiplePizzas from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        If you would like to experience the best of online shopping for men, 
        women and kids in India, you are at the right place. Shoper is the 
        ultimate destination for fashion and lifestyle, being host to a wide
        array of merchandise including clothing, footwear, accessories, 
        jewellery, personal care products and more. It is time to redefine 
        your style statement with our treasure-trove of trendy items. Our 
        online store brings you the latest in designer products straight out 
        of fashion houses. You can shop online at Shoper from the comfort of 
        your home and get your favourites delivered right to your doorstep.
        </p>
      </div>
    </div>
  );
}

export default About;
