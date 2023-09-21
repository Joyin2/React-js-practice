import React from "react";
import styles from "./About.module.css";
import ServiceCard from "../services/ServiceCard";
import Image from "./img/about.svg";
import Graph from "./img/graph.png";
import Asthetic from "./img/asthetic.png";
import Faster from "./img/faster.png";
import Content from "./img/content.png";
import Optimized from "./img/optimized.png";
import Responsive from "./img/responsive.png";
import NeedWebsite from "./img/need-website.jpg";
import Creative from "./img/creative.png"
import OnlinePresence from "./img/onlinepresence.png"
import Quick from "./img/Quick.png"
import WhyUs from "./img/whyus.jpg"
import Automobile from "./img/Automibiles.png"
import Ecommerce from "./img/ecomerce.png"
import Education from "./img/education.png"
import Electronics from "./img/electronics.png"
import Events from "./img/event.png"
import Food from "./img/food.png"
import Healthcare from "./img/Healthcare.png"
import Hospitality from "./img/Hospitality.png"
import Hardware from "./img/Hardware.png"
import Industries from "./img/Industries.png"
import Mall from "./img/Mall.svg"
import RealEstate from "./img/RealEstate.svg"

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>About Us</h1>
        <div className={styles.design}>
          <div className={styles.leftDesign}>
            Flerid stands as a premier startup in Website and App Development.
            Our dedicated team consists of Digital Marketers, Search Engine
            Specialists, Graphic Designers, and Web Developers, collectively,
            we're Experience Designers. We possess an innate understanding of
            the internet's intricacies. Our primary mission is to deliver
            exceptional value to our clients, fostering business growth through
            digital marketing and SEO. Ultimately, our goal is to turn our
            clients' enterprises into profitable ventures, harnessing the full
            potential of the digital landscape. At Flerid, we're committed to
            realizing your business's true potential.
          </div>
          <div className={styles.rightDesign}>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <h1>WHY CHOOSE OUR SERVICES ?</h1>
        <div className={styles.Cards}>
          <ServiceCard icon={Asthetic} heading={"INNOVATIVE WORKFORCE"} />
          <ServiceCard
            icon={Content}
            heading={"COMPREHENSIVE CONTENT"}
          />
          <ServiceCard icon={Creative} heading={"CREATIVE WORK"} />
          <ServiceCard icon={OnlinePresence} heading={"STRONG ONLINE PRESENCE"} />
          <ServiceCard
            icon={Graph}
            heading={"MEASUREABLE RESULT"}
          />
          <ServiceCard icon={Quick} heading={"QUICK SUPPORT"} />
        </div>
      </div>

      <div className={styles.designSecond}>
        <div className={styles.leftDesign}>
          <h2>WHAT MADE US UNIQUE?</h2>
          <p>What sets us apart is our holistic approach to digital solutions. Flerid blends expertise in website and app development with the art of digital marketing, SEO, and design. We're not just developers; we're Experience Designers who decode the internet's inner workings. Our focus is on delivering tangible value, amplifying your business, and making it a thriving and profitable digital success story.</p>
          <button className={styles.btn}>CONTACT US</button>
        </div>
        <div className={styles.rightDesign}>
          <img src={WhyUs} alt="" />
        </div>
      </div>
      <div className={styles.banner}>
      <h1>DOMAINS WE HAVE WORKED FOR</h1>
        <div className={styles.Cards}>
          <div className={styles.domain}>
            <img src={Automobile}/>
            <h3>Automobile</h3>
          </div>
          <div className={styles.domain}>
            <img src={Ecommerce}/>
            <h3>Ecommerce</h3>
          </div>
          <div className={styles.domain}>
            <img src={Education}/>
            <h3>Education</h3>
          </div>
          <div className={styles.domain}>
            <img src={Electronics}/>
            <h3>Electronics</h3>
          </div>
          <div className={styles.domain}>
            <img src={Events}/>
            <h3>Events</h3>
          </div>
          <div className={styles.domain}>
            <img src={Food}/>
            <h3>Food</h3>
          </div>
          <div className={styles.domain}>
            <img src={Healthcare}/>
            <h3>Healthcare</h3>
          </div>
          <div className={styles.domain}>
            <img src={Hospitality}/>
            <h3>Hospitality</h3>
          </div>
          <div className={styles.domain}>
            <img src={Hardware}/>
            <h3>Hardware</h3>
          </div>
          <div className={styles.domain}>
            <img src={Industries}/>
            <h3>Industries</h3>
          </div>
          <div className={styles.domain}>
            <img src={Mall}/>
            <h3>Mall</h3>
          </div>
          <div className={styles.domain}>
            <img src={RealEstate}/>
            <h3>Real Estate</h3>
          </div>
        </div>

      </div>
      <div className={styles.chooseUs}>
        <h1>Let' Work Together</h1>
      </div>
    </>
  );
};

export default About;
