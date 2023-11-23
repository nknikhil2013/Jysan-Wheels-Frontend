import React from "react";
import DefaultLayout from '../components/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../components/StyleSheets/About.css';

const About = () => {
  return (
    <DefaultLayout>
      <div className="about-body container mt-5">

        <div className="About text-center">
          <h1>About Our Car Rental Service</h1>
          <div className="About-content mt-4">
            <h3>Welcome to Jysan-Wheels, your go-to destination for hassle-free car rentals. Our MERN-based application is designed to provide you with a seamless and enjoyable experience from reservation to drop-off. Here's a glimpse into who we are and what we stand for:</h3>
          </div>
        </div>

        <div className="Profile mt-5">
          <h1 className="text-center">Meet the Team</h1>
          <div className="row mt-4">
            <div className="col-sm text-center">
              <h4>Nikhil Kumar</h4>
              <p>21BCE0227</p>
              <p>HOME PAGE AND DESIGN</p>
            </div>
            <div className="col-sm text-center">
              <h4>Soumya Rathi</h4>
              <p>21BBS0038</p>
              <p>CAR BOOKING PAGE</p>
            </div>
            <div className="col-sm text-center">
              <h4>Aviral Jain</h4>
              <p>21BCT0153</p>
              <p>LOGIN AND REGISTRATION PAGE</p>
            </div>
            <div className="col-sm text-center">
              <h4>Jayakrishna V</h4>
              <p>21BBS0261</p>
              <p>CAR TRANSACTION AND HISTORY PAGE</p>
            </div>
            <div className="col-sm text-center">
              <h4>Yash Jain</h4>
              <p>21BCT0198</p>
              <p>FEEDBACK AND ABOUT US PAGE</p>
            </div>
          </div>
        </div>

        <div className="Mission mt-5 text-center">
          <h1>Our Mission</h1>
          <div className="Mission-content mt-4">
            <h3>At Jysan-Wheels, our mission is to redefine the car rental experience. We aim to offer a user-friendly platform that simplifies the process of renting a car while ensuring reliability, transparency, and customer satisfaction.</h3>
          </div>
        </div>

        <div className="Tech-stack mt-5 text-center">
          <h1>Our Technology Stack</h1>
          <div className="Tech-stack-content mt-4">
            <h3>We leverage the power of the MERN stack to deliver a robust and efficient car rental platform:</h3>
            <div className="text-center mt-2">
              <p>1. MongoDB: Our database solution for storing and retrieving data.</p>
              <p>2. Express.js: The backend framework that powers our API development.</p>
              <p>3. React.js: The frontend library for building dynamic user interfaces.</p>
              <p>4. Node.js: The runtime environment for executing server-side code.</p>
            </div>
          </div>
        </div>

        <div className="Journey mt-5 text-center">
          <h1>Development Journey</h1>
          <div className="Journey-content mt-4">
            <h3>Our journey to create [Jysan-Wheels] has been filled with challenges, successes, and a passion for innovation. We've overcome hurdles and achieved milestones, all with the goal of providing you with the best car rental experience possible.</h3>
          </div>
        </div>

        <div className="Contact mt-5 text-center">
          <h1>Contact Us</h1>
          <div className="Contact-content mt-4">
            <h3>Have questions, feedback, or suggestions? We'd love to hear from you! Reach out to us at nknikhil2013@gmail.com or connect with us on [social media links].</h3>
          </div>
        </div>

        <div className="Acknowledgments mt-5 text-center">
          <h1>Acknowledgments</h1>
          <div className="Acknowledgments-content mt-4">
            <h3>We extend our gratitude to [VIT Vellore] for providing the educational foundation and support for the development of Jysan-wheels. Special thanks to Ethnus, our trainer company, for their guidance and training, which has been invaluable in shaping our skills and contributing to the success of this project.</h3>
          </div>
        </div>

        <div className="Plans mt-5 text-center">
          <h1>Future Plans</h1>
          <div className="Plans-content mt-4">
            <h3>Exciting things are on the horizon! We're actively working on new features and improvements to make your car rental experience even better.</h3>
          </div>
        </div>

        <div className="final mt-5 text-center">
          <h3>Thank you for choosing Jysan-wheels. We look forward to serving you on your next journey!</h3>
        </div>
        
      </div>
    </DefaultLayout>
  );
};

export default About;

