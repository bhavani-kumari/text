import React from "react";
import "../Header/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social media icons

const Header = () => {
    return (
        <>
          

            {/* Topbar Start */}
            <div className="container-fluid bg-light px-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="row gx-0 align-items-center d-none d-lg-flex">
                    <div className="col-lg-6 px-5 text-start">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a className="small text-secondary" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="small text-secondary" href="#">Career</a></li>
                            <li className="breadcrumb-item"><a className="small text-secondary" href="#">Terms</a></li>
                            <li className="breadcrumb-item"><a className="small text-secondary" href="#">Privacy</a></li>
                        </ol>
                    </div>
                    <div className="col-lg-6 px-5 text-end">
                        <small>Follow us:</small>
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn-square text-primary border-end rounded-0" href="#"><FaFacebook /></a>
                            <a className="btn-square text-primary border-end rounded-0" href="#"><FaTwitter /></a>
                            <a className="btn-square text-primary border-end rounded-0" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn-square text-primary pe-0" href="#"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}

            {/* Brand & Contact Start */}
            <div className="container-fluid py-4 px-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="row align-items-center top-bar">
                    <div className="col-lg-4 col-md-12 text-center text-lg-start">
                        <a href="#" className="navbar-brand m-0 p-0">
                            <h1 className="fw-bold text-primary m-0"><i className="">
                            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/logo_1.png`} alt="About Us" style={{ width: '90px', height: 'auto' }}/>
                            </i>ugan Softech</h1>
                        </a>
                    </div>
                    <div className="col-lg-8 col-md-7 d-none d-lg-block">
                        <div className="row">
                            {[
                                { icon: "far fa-clock", title: "Opening Hour", text: "Mon - Sat, 10:00 - 6:00" },
                                { icon: "fa fa-phone", title: "Call Us", text: "+91 9931503744" },
                                { icon: "far fa-envelope", title: "Email Us", text: "randhir3753@gmail.com" },
                            ].map((item, index) => (
                                <div className="col-4" key={index}>
                                    <div className="d-flex align-items-center justify-content-end">
                                        <div className="flex-shrink-0 btn-lg-square border rounded-circle">
                                            <i className={item.icon + " text-primary"}></i>
                                        </div>
                                        <div className="ps-3">
                                            <p className="mb-2">{item.title}</p>
                                            <h6 className="mb-0">{item.text}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Brand & Contact End */}

            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="#" className="navbar-brand ms-3 d-lg-none">MENU</a>
                <button type="button" className="navbar-toggler me-3" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-3 p-lg-0"> {/* Change from me-auto to ms-auto */}
        <a href="index.html" className="nav-item nav-link active">Home</a>
        <a href="about.html" className="nav-item nav-link">About Us</a>
        <a href="service.html" className="nav-item nav-link">Services</a>
        <a href="project.html" className="nav-item nav-link">Projects</a>
        {/* Uncomment the dropdown if needed
        <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
                <a href="feature.html" className="dropdown-item">Features</a>
                <a href="team.html" className="dropdown-item">Our Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
            </div>
        </div> */}
    </div>
    
    <a href="https://htmlcodex.com/web-design-agency-html-template-pro" className="btn btn-sm btn-light rounded-pill py-2 px-4 d-none d-lg-block">Contact Us</a>
</div>

            </nav>
            {/* Navbar End */}

            {/* Carousel Start */}
            <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {[1, 2, 3].map((_, index) => (
                            <button key={index} type="button" data-bs-target="#header-carousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index + 1}`}>
                            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/banner.jpg`} alt="About Us" />
                            </button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                     {["carousel-1", "carousel-2", "carousel-3"].map((carouselItem, index) => (
                         <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                         <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/6.jpeg`} alt="About Us"  style={{ width: '2000px', height: '500px' }} />
                        <div className="wave wave1" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/wave.png)`, position: 'absolute', bottom: '0', left: '0', right: '0', height: 'auto', zIndex: '1' }}></div>
                        <div className="carousel-caption">
                        <div className="p-3" style={{ maxWidth: '900px', position: 'relative', zIndex: '2' }}>
                              <h4 className="text-white text-uppercase mb-4 animated zoomIn">We Are Leader In</h4>
                        <h1 className="display-1 text-white mb-0 animated zoomIn">Creative & Innovative Digital Solution</h1>
                   </div>
                   </div>
                 </div>
              ))}
              </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <section>
    <div class="w-100">
      <div class="marquee" onmouseover="pauseMarquee()" onmouseout="resumeMarquee()">
        <div class="whats-new rounded-r text-white">What's New:</div>
        <div class="marquee-content">
        <span class="fw-bolder" id="marquee item">Sugan Softech With 10 Years Of Experience</span>
       
        </div>
      </div>
    </div>

  </section>
            </div>
            {/* Carousel End */}
           
        </>
    );
};

export default Header;
