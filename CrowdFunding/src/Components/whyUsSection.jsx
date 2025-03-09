import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why us ?</h1>
          <p className={styles.para}>
          Our crowdfunding platform is built on the belief that collective support can create meaningful change. We provide a secure and transparent space where individuals and organizations can raise funds for causes that matter. With a seamless and user-friendly interface, launching and managing campaigns has never been easier. Every campaign goes through a verification process to ensure credibility, fostering trust among donors and fundraisers. Our global community connects people with shared goals, allowing anyone to contribute and make a real impact. With fast and secure payment options, we ensure a smooth donation process, making it easy for supporters to help bring positive change. By joining us, you become part of a movement that turns aspirations into reality, one contribution at a time.
          </p>
        </div>
        <div className="col-md-4">
          <img className={styles.image} src={ChildImage} alt="HappyKids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
