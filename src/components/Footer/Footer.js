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
    <>
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-9">
              <div className="mb-5">
                <div className="row g-4">
                <div className="col-md-6 col-lg-6 col-xl-5">
    <div className="footer-item">
        <a href="index.html" className="p-0">
            <h3 className="text-white">
                <i className="far fa-handshake"></i> Contact Us
            </h3>
            <p className="text-white mb-3">
                If your culture doesn't like geeks, you are in real trouble.
            </p>
        </a>
        <div className="footer-btn d-flex mt-999"> {/* Add margin top for spacing */}
            <a className="btn btn-md-square rounded-circle me-3" href="#">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-md-square rounded-circle me-3" href="#">
                <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-md-square rounded-circle me-3" href="#">
                <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-md-square rounded-circle me-0" href="#">
                <i className="fab fa-linkedin-in"></i>
            </a>
        </div>
    </div>
</div>

  {/* <div className="col-md-6 col-lg-6 col-xl-3">
    <div className="footer-item">
        <h4 className="text-white mb-4">Useful Links</h4>
        <div className="footer-links">
            <a href="#"><i className="fas fa-angle-right me-2"></i> About Us</a>
            <a href="#"><i className="fas fa-angle-right me-2"></i> Features</a>
            <a href="#"><i className="fas fa-angle-right me-2"></i> Services</a>
            <a href="#"><i className="fas fa-angle-right me-2"></i> FAQ's</a>
            <a href="#"><i className="fas fa-angle-right me-2"></i> Contact</a>
        </div>
    </div>
</div> */}

                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="footer-item">
                      <h4 className="mb-4 text-white">Instagram</h4>
                      <div className="row g-3">
                        {galleryImages.map((image, index) => (
                          <div className="col-4" key={index}>
                            <div className="footer-instagram rounded">
                              <img src={image} className="img-fluid w-100" alt={`Instagram ${index + 1}`} />
                              <div className="footer-search-icon">
                                <a href={image} data-lightbox={`footerInstagram-${index + 1}`} className="my-auto">
                                  <i className="fas fa-link text-white"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="row g-0">
                  <div className="col-12">
                    <div className="row g-4">
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fas fa-map-marker-alt fa-2x"></i>
                          </div>
                          <div>
                            <h4 className="text-white">Address</h4>
                            <p className="mb-0">Mackchund Toli,Samlog,Ranchi,JHARKHAND</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fas fa-envelope fa-2x"></i>
                          </div>
                          <div>
                            <h4 className="text-white">Mail Us</h4>
                            <p className="mb-0">randhir3753@gmail.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fa fa-phone-alt fa-2x"></i>
                          </div>
                          <div>
                            <h4 className="text-white">Telephone</h4>
                            <p className="mb-0">(+091)9935103744</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="text-white mb-3">You can have all the right strategies in the world; if you don't have the right culture, you're dead.</p>
                <div className="position-relative rounded-pill mb-4">
                  <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                  <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                </div>
                <div className="d-flex flex-shrink-0">
                  <div className="footer-btn">
                    <a href="#" className="btn btn-lg-square rounded-circle position-relative wow tada" data-wow-delay=".9s">
                      <i className="fa fa-phone-alt fa-2x"></i>
                      <div className="position-absolute" style={{ top: '2px', right: '12px' }}>
                        <span><i className="fa fa-comment-dots text-secondary"></i></span>
                      </div>
                    </a>
                  </div>
                  <div className="d-flex flex-column ms-3 flex-shrink-0">
                    <span>Call to Our Experts</span>
                    <a href="tel:+01234567890"><span className="text-white">Free: + 0123 456 7890</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container-fluid copyright py-4">
    <div className="container">
        <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
                <span className="text-body">
                    <a href="#" className="border-bottom text-white">
                        <i className="fas fa-copyright text-light me-2"></i>Sugan Softech pvt.ltd. All rights reserved.
                    </a>
                </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-body">
                <a className="border-bottom text-white" href="https://htmlcodex.com">Designed By Sugan Softech</a>
            </div>
        </div>
    </div>
</div>

    </>
  );
};

export default Footer;
