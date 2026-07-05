<<<<<<< HEAD
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">EyeCare Centre</span>
            </a>
            <div className="footer-contact pt-3">
              <p>123 Main Street</p>
              <p>Cityville, State, Zip Code</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+1 123 456 7890</span></p>
              <p><strong>Email:</strong> <span>info@eyecarecentre.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="https://twitter.com/"><i className="bi bi-twitter"></i></a>
              <a href="https://facebook.com/"><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com/"><i className="bi bi-instagram"></i></a>
              <a href="https://linkedin.com/"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><a href="/contacts">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="/services#eye-exams">Eye Exams</a></li>
              <li><a href="/services#glasses">Glasses Fitting</a></li>
              <li><a href="/services#contact-lenses">Contact Lenses</a></li>
              <li><a href="/services#lasik">LASIK Consultation</a></li>
              <li><a href="/services#emergency">Emergency Eye Care</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/resources">Patient Education</a></li>
              <li><a href="/insurance">Insurance Information</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="/support">Customer Support</a></li>
              <li><a href="/#faq">FAQs</a></li>
              <li><a href="/appointment">Appointment Booking</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/sitemap.xml">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">EyeCare Centre</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you've purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">EyeCare Centre</span>
            </a>
            <div className="footer-contact pt-3">
              <p>123 Main Street</p>
              <p>Cityville, State, Zip Code</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+1 123 456 7890</span></p>
              <p><strong>Email:</strong> <span>info@eyecarecentre.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="https://twitter.com/"><i className="bi bi-twitter"></i></a>
              <a href="https://facebook.com/"><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com/"><i className="bi bi-instagram"></i></a>
              <a href="https://linkedin.com/"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><a href="/contacts">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="/services#eye-exams">Eye Exams</a></li>
              <li><a href="/services#glasses">Glasses Fitting</a></li>
              <li><a href="/services#contact-lenses">Contact Lenses</a></li>
              <li><a href="/services#lasik">LASIK Consultation</a></li>
              <li><a href="/services#emergency">Emergency Eye Care</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/resources">Patient Education</a></li>
              <li><a href="/insurance">Insurance Information</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="/support">Customer Support</a></li>
              <li><a href="/#faq">FAQs</a></li>
              <li><a href="/appointment">Appointment Booking</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/sitemap.xml">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">EyeCare Centre</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you've purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> fae6ed1 (Fix accessibility: replace placeholder href with valid links)
