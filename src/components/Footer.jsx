import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: example@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cart">Products</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/cart">Checkout</Link></li>
            </ul>
          </div>
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <ul>
              <li><a href="https://twitter.com" target="blank" >Twitter</a></li>
              <li><a href="https://facebook.com" target="blank" >Facebook</a></li>
              <li><a href="https://instagram.com" target="blank" >Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}  All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
