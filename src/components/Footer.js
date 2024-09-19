import React from 'react'
import "./Footer.css";
const ft = () => {
  return (
    <>
    <div className="footer">
      {/* Subscription Section */}
      <div className="subscription-section">
        <h2>Join The Tarzan Way Community</h2>
        <p>Get Early Bird Deals, Extra Discounts & Priority Customer Support.</p>
        <div className="subscription-form">
          <input type="text" placeholder="First name" />
          <input type="email" placeholder="Email address" />
          <button type="submit">Subscribe Now</button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-main">
        <div className="footer-brand">
        <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9sb2dvLW9ubHkuc3ZnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjIsImhlaWdodCI6MTAwLCJmaXQiOiJjb3ZlciJ9fX0=" alt="logo" class="logo" />

          <p>
            The Tarzan Way is a travel-based startup with the vision to simplify
            travel and build immersive travel programs across India.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
          <p>Contact Us</p>
          <p>📞 +91 95821 25476</p>
          <p>📧 info@thetarzanway.com</p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Travel Destinations</h3>
            <p>Europe</p>
            <p>Asia</p>
            <p>North America</p>
            <p>South America</p>
            <p>Australia & New Zealand</p>
            <p>Africa</p>
            <p>Caribbean</p>
          </div>

          <div>
            <h3>Travel Styles</h3>
            <p>Personalise</p>
            <p>Workcation</p>
            <p>Volunteer</p>
            <p>Road Trips</p>
            <p>Unique</p>
          </div>

          <div>
            <h3>Company</h3>
            <p>Blogs</p>
            <p>For Corporates</p>
            <p>Testimonials</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>

          <div>
            <h3>Terms & Policies</h3>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>COVID-19 Safety</p>
            <p>Subscribe</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2018 - 2024 Tarzan Way Travels Private Limited • All Rights Reserved</p>
      </div>
    </div>
    </>
  )
}

export default ft
