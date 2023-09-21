import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";
import Image from "./img/10276612_4421964.jpg";
import Graph from "./img/graph.png";
import Asthetic from "./img/asthetic.png";
import Faster from "./img/faster.png";
import Content from "./img/content.png";
import Optimized from "./img/optimized.png";
import Responsive from "./img/responsive.png";
import NeedWebsite from "./img/need-website.jpg";

const Services = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Website Design & Development Services</h1>
        <div className={styles.design}>
          <div className={styles.leftDesign}>
            Website design and development services encompass the creation and
            construction of websites. This involves planning, designing, coding,
            and optimizing websites for functionality, user experience, and
            aesthetics. It includes services such as front-end and back-end
            development, responsive design, e-commerce integration, and ensuring
            the site's security and performance.
          </div>
          <div className={styles.rightDesign}>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <h1>WHAT YOU REALLY NEED IS A GREAT WEBSITE</h1>
        <div className={styles.Cards}>
          <ServiceCard icon={Graph} heading={"Negligible bounce rate"} />
          <ServiceCard
            icon={Asthetic}
            heading={"Aesthetically good & functional"}
          />
          <ServiceCard icon={Content} heading={"Relevant content"} />
          <ServiceCard icon={Responsive} heading={"User friendly"} />
          <ServiceCard
            icon={Optimized}
            heading={"Optimised for social and search web"}
          />
          <ServiceCard icon={Faster} heading={"Faster user experience"} />
        </div>
      </div>

      <div className={styles.designSecond}>
        <div className={styles.leftDesign}>
          <h2>WHY DOES YOU NEED A WEBSITE?</h2>A website expands your business
          reach by providing a 24/7 online presence, reaching a global audience,
          showcasing products/services, and enabling customer interaction,
          leading to increased visibility, credibility, and growth
          opportunities.
        </div>
        <div className={styles.rightDesign}>
          <img src={NeedWebsite} alt="" />
        </div>
      </div>
      <div className={styles.chooseUs}>
        <h1>Let' Build Website</h1>
      </div>
    </>
  );
};

export default Services;

// Neon blue (#2272FF) black (#000)
