import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- IIITM Block View"
          />
        </div>
        <p className={styles.content}>
          <br />
          Welcome to Rotaract Club ABV-IIITM, a dynamic community of young, passionate individuals dedicated to creating a positive impact on society. As a student-led organization, we believe in the power of service, leadership, and personal growth, striving to contribute meaningfully to the world around us. Our club is more than just a platform for social initiatives—it is a movement where like-minded individuals come together to inspire change, develop leadership skills, and build lifelong connections.
          <br />
          <br />
          Rooted in the values of Rotary International, we uphold the spirit of "Service Above Self" by addressing some of the most pressing social, environmental, and educational challenges. We take pride in organizing and executing various initiatives that contribute to the betterment of society. Whether it is conducting community service programs, raising awareness on important social issues, or providing resources to those in need, we believe that even the smallest efforts can lead to significant change. Through our activities, we aim to empower individuals, foster inclusivity, and encourage a sense of responsibility among students.
          <br />
          <br />
          At Rotaract Club ABV-IIITM, we are committed to holistic development. Our projects range from organizing environmental sustainability drives, tree plantations, and clean-up campaigns to supporting education through mentorship programs, book donation drives, and skill-building workshops. Health and well-being are also at the core of our mission, and we actively conduct blood donation camps, health awareness sessions, and mental wellness programs. Through these efforts, we work towards building a compassionate and empowered community that values service and social responsibility.
          <br />
          <br />
          If you are someone who is eager to make a difference, contribute to meaningful causes, and be a part of a supportive and inspiring community, then Rotaract Club ABV-IIITM is the perfect place for you. Together, we can create positive change, uplift communities, and work towards a better tomorrow. Join us today and become a part of this transformative journey!
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
