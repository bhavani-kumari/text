import React, { useState } from "react";
import "../Header/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  // State for the spinner (if needed)
  const [loading, setLoading] = useState(true);

  // Simulate loading for demonstration
  setTimeout(() => setLoading(false), 2000);

  return (
    <>
      {loading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <div className="border-end border-primary pe-3">
                  <Link to="#" className="text-muted small">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    Find A Location
                  </Link>
                </div>
                <div className="ps-3">
                  <a
                    href="mailto:example@gmail.com"
                    className="text-muted small"
                  >
                    <i className="fas fa-envelope text-primary me-2"></i>
                    randhir3753@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex justify-content-end">
                <div className="d-flex border-end border-primary pe-3">
                  <a className="btn p-0 text-primary me-3" href="#">
                    <FaFacebook />
                  </a>
                  <a className="btn p-0 text-primary me-3" href="#">
                    <FaTwitter />
                  </a>
                  <a className="btn p-0 text-primary me-3" href="#">
                    <FaInstagram />
                  </a>
                  <a className="btn p-0 text-primary me-0" href="#">
                    <FaLinkedin />
                  </a>
                </div>
                {/* <div className="dropdown ms-3">
                  <a
                    href="#"
                    className="dropdown-toggle text-dark"
                    data-bs-toggle="dropdown"
                  >
                    <small>
                      <i className="fas fa-globe-europe text-primary me-2"></i>{" "}
                      English
                    </small>
                  </a>
                  <div className="dropdown-menu rounded">
                    <a href="#" className="dropdown-item">
                      English
                    </a>
                    <a href="#" className="dropdown-item">
                      Bangla
                    </a>
                    <a href="#" className="dropdown-item">
                      French
                    </a>
                    <a href="#" className="dropdown-item">
                      Spanish
                    </a>
                    <a href="#" className="dropdown-item">
                      Arabic
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="#" className="navbar-brand p-0">
              <h1 className="text-primary mb-0">
                <i className="">
                  <img
                    className="flex-shrink-0 rounded-circle"
                    src={`${process.env.PUBLIC_URL}/img/logo_1.png`}
                    style={{ width: "50px", height: "50px" }}
                  />
                </i>
                ugan Softech
              </h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-0 mx-lg-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/services" className="nav-item nav-link">
                  Services
                </Link>
                 <Link to="/ourfeatures" className="nav-item nav-link">
                  Our Features
                </Link>
                <Link to="/ourteam" className="nav-item nav-link">
                  Our team
                </Link>
              </div>
            </div>

            <div className="nav-btn px-3">
              {/* <button
                className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search"></i>
              </button> */}
              <Link
                to="/ContactUs"
                className="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0"
              >
                {" "}
                Contact Us
              </Link>
            </div>

            {/* <div className="d-none d-xl-flex flex-shrink-0 ps-4">
              <Link
                to="#"
                className="btn btn-light btn-lg-square rounded-circle position-relative wow tada"
                data-wow-delay=".9s"
              > */}
                {/* <i className="fa fa-phone-alt fa-2x"></i> */}
                {/* <div
                  className="position-absolute"
                  style={{ top: "7px", right: "12px" }}
                >
                  <span>
                    <i className="fa fa-comment-dots text-secondary"></i>
                  </span>
                </div> */}
              {/* </Link> */}
              {/* <div className="d-flex flex-column ms-3">
                <span>Call to Our Experts</span>
                <a href="tel:+01234567890">
                  <span className="text-dark">Free: +91 9931503744</span>
                </a>
              </div> */}
            {/* </div> */}
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}

      {/* Modal Search Start */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search by keyword
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center bg-primary">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span
                  id="search-icon-1"
                  className="btn bg-light border input-group-text p-3"
                >
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Search End */}

      {/* Carousel Start */}

       {/* <div className="header-carousel owl-carousel">
                <div className="header-carousel-item bg-primary">
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-7 animated fadeInLeft">
                                    <div className="text-sm-center text-md-start">
                                        <h4 className="text-white text-uppercase fw-bold mb-4">Welcome To Our site</h4>
                                        <h6 className="display-1 text-white mb-4"> Always have a goal, a plan & the tool as the enabler.</h6>
                                      
                                        <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                            <Link to="#" className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"><i className="fas fa-play-circle me-2"></i> Watch Video</Link>
                                            <Link to="#" className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 animated fadeInRight">
                                    <div className="carousel-img" style={{ objectFit: "cover" }}>
                                        <img src="img/destop.png" className="img-fluid w-100" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   */}
      {/* Repeat for other carousel items... */}
       {/* </div>    */}
      {/* Carousel End */}
    </>
  );
};

export default Header;
