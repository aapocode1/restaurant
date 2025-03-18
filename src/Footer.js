import React from "react";
import logo from "./images/Logo.png";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="logo" />
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
        </div>
        <div>
            <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </div>
        <div>
            <h3>Contact</h3>
            <ul>
                <li>Address: <br/> 123 Philadelphia, USA</li>
                <li>Phone Number: <br/> ++ 0123 456 789</li>
                <li>Email: <br/> littlelemon@lemon.com</li>
            </ul>
        </div>
        <div>
            <h3>Social Media Links</h3>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Threads</li>
            </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
