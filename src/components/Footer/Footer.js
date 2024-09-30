import React from 'react';
import './Footer.css'; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css';

const galleryImages = [
  `${process.env.PUBLIC_URL}/img/7.png`,
  `${process.env.PUBLIC_URL}/img/13.png`,
  `${process.env.PUBLIC_URL}/img/12.png`,
  `${process.env.PUBLIC_URL}/img/10.jpg`,
  `${process.env.PUBLIC_URL}/img/11.jpg`,
  `${process.env.PUBLIC_URL}/img/14.png`,
];

const GallerySection = () => {
  return (
    <div className="col-lg-4 col-md-4">
      <h5 className="text-light mb-4">Gallery</h5>
      <div className="row g-2">
        {galleryImages.map((image, index) => (
          <div className="col-4" key={index}>
            <img className="img-fluid rounded" src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-body footer mt-5 pt-5">
      <div className="container py-5">
        <div className="row g-5">
          {/* Address Section */}
          <div className="col-lg-2 col-md-2">
    <h5 className="text-light mb-3">Address</h5>
    <p className="text-white mb-2">
        <i className="fa fa-map-marker-alt me-3"></i>Makchund Toli Chutia, Ranchi, Jharkhand.
    </p>
    <p className="text-white mb-2">
        <i className="fa fa-phone-alt me-3"></i>+91 9931503744
    </p>
    <p className="text-white mb-2">
        <i className="fa fa-envelope me-3"></i>randhir3753@gmail.com
    </p>
    <div className="d-flex pt-2 align-items-center">
        <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href="#"><i className="fab fa-twitter"></i></a>
        <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href="#"><i className="fab fa-facebook-f"></i></a>
        <a className="btn btn-square btn-outline-secondary rounded-circle me-1" href="#"><i className="fab fa-youtube"></i></a>
        <a className="btn btn-square btn-outline-secondary rounded-circle me-0" href="#"><i className="fab fa-linkedin-in"></i></a>
    </div>
</div>


          {/* Quick Links Section */}
          <div className="col-lg-2 col-md-2">
            <h5 className="text-light mb-4">Quick Links</h5>
            <ul className="quick-links list-unstyled">
              <li><a className="text-white mb-2 d-block" href="#">About Us</a></li>
              <li><a className="text-white mb-2 d-block" href="#">Contact Us</a></li>
              <li><a className="text-white mb-2 d-block" href="#">Our Services</a></li>
              <li><a className="text-white mb-2 d-block" href="#">Terms & Conditions</a></li>
              <li><a className="text-white mb-2 d-block" href="#">Support</a></li>
            </ul>
          </div>

          {/* Gallery Section */}
          <GallerySection />

          {/* Newsletter Section */}
          <div className="col-lg-4 col-md-4">
            <h5 className="text-light mb-4 mt-4">Newsletter</h5>
            <p className="text-white mb-2">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white">
              &copy; <a className="text-white" href="#">Copyright</a>, 2024. Sugan Softech Pvt. Ltd. All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end text-white">
              Designed By <a className="text-white" href="https://htmlcodex.com">Sugan Softech Pvt. Ltd.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
