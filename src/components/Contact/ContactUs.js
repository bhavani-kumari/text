import React from 'react';
import './ContactUs.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ContactUs = () => {
    return (
        <>
           

            {/* Topbar Start */}
            {/* <header className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
                <div className="container">
                    <div className="row gx-0 align-items-center">
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <div className="border-end border-primary pe-3">
                                    <a href="#" className="text-muted small"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                                </div>
                                <div className="ps-3">
                                    <a href="mailto:example@gmail.com" className="text-muted small"><i className="fas fa-envelope text-primary me-2"></i>example@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-flex justify-content-end">
                                <div className="d-flex border-end border-primary pe-3">
                                    <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="btn p-0 text-primary me-0" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <div className="dropdown ms-3">
                                    <a href="#" className="dropdown-toggle text-dark" data-bs-toggle="dropdown"><small><i className="fas fa-globe-europe text-primary me-2"></i> English</small></a>
                                    <div className="dropdown-menu rounded">
                                        <a href="#" className="dropdown-item">English</a>
                                        <a href="#" className="dropdown-item">Bangla</a>
                                        <a href="#" className="dropdown-item">French</a>
                                        <a href="#" className="dropdown-item">Spanish</a>
                                        <a href="#" className="dropdown-item">Arabic</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}
            {/* Topbar End */}

            {/* Navbar & Hero Start */}
            {/* <main className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light"> 
                        <a href="#" className="navbar-brand p-0">
                            <h1 className="text-primary mb-0"><i className="fab fa-slack me-2"></i> LifeSure</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-0 mx-lg-auto">
                                <a href="index.html" className="nav-item nav-link">Home</a>
                                <a href="about.html" className="nav-item nav-link">About</a>
                                <a href="service.html" className="nav-item nav-link">Services</a>
                                <a href="blog.html" className="nav-item nav-link">Blog</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                        <span className="dropdown-toggle">Pages</span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <a href="feature.html" className="dropdown-item">Our Features</a>
                                        <a href="team.html" className="dropdown-item">Our Team</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="FAQ.html" className="dropdown-item">FAQs</a>
                                        <a href="404.html" className="dropdown-item">404 Page</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link active">Contact</a>
                                <div className="nav-btn px-3">
                                    <button className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search"></i></button>
                                    <a href="#" className="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0"> Get a Quote</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-xl-flex flex-shrink-0 ps-4">
                            <a href="#" className="btn btn-light btn-lg-square rounded-circle position-relative wow tada" data-wow-delay=".9s">
                                <i className="fa fa-phone-alt fa-2x"></i>
                                <div className="position-absolute" style={{ top: '7px', right: '12px' }}>
                                    <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                </div>
                            </a>
                            <div className="d-flex flex-column ms-3">
                                <span>Call to Our Experts</span>
                                <a href="tel:+01234567890"><span className="text-dark">Free: + 0123 456 7890</span></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </main> */}
            {/* Navbar & Hero End */}

            {/* Modal Search Start */}
            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                        <img src="img/contact-img.png" className="img-fluid w-100" alt="Image" />
                            <h5 className="modal-title" id="searchModalLabel">Search by keyword</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center bg-primary">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                <span id="search-icon-1" className="btn bg-light border input-group-text p-3"><i className="fa fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search End */}

            {/* Header Start */}
            

            {/* Header End */}

            {/* Contact Start */}
            <section className="container-fluid contact bg-light py-5">
    <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
            <h4 className="text-primary">Contact Us</h4>
            <h1 className="display-4 mb-4">If you have any comments please apply now</h1>
        </div>
        <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="contact-img d-flex justify-content-center">
                    <div className="contact-img-inner">
                        <img src="img/contact-img.png" className="img-fluid w-100" alt="Image" />
                    </div>
                </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
                <div>
                    <h4 className="text-primary">Send Your Message</h4>
                    {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className="text-primary fw-bold" href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
                    <form>
                        <div className="row g-3">
                            <div className="col-lg-12 col-xl-6">
                            <div className="form-floating">
    <input type="text" className="form-control border-0 blue-input" id="name" placeholder="Your Name" />
    <label htmlFor="name">Your Name</label>
</div>

                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control border-0 blue-input" id="email" placeholder="Your Email" />
                                    <label htmlFor="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="tel" className="form-control border-0 blue-input" id="phone" placeholder="Phone" />
                                    <label htmlFor="phone">Your Phone</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control border-0 blue-input" id="project" placeholder="Project" />
                                    <label htmlFor="project">Your Project</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control border-0 blue-input" id="subject" placeholder="Subject" />
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control border-0 " placeholder="Leave a message here" id="message" style={{ height: '120px' }}></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-12">
                <div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="contact-add-item">
                                <div className="contact-icon text-primary mb-4">
                                    <i className="fas fa-map-marker-alt fa-2x"></i>
                                </div>
                                <div>
                                    <h4>Address</h4>
                                    <p className="mb-0">New Mackchund Toli,Samlog,Ranchi,JHARKHAND</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="contact-add-item">
                                <div className="contact-icon text-primary mb-4">
                                    <i className="fas fa-envelope fa-2x"></i>
                                </div>
                                <div>
                                    <h4>Mail Us</h4>
                                    <p className="mb-0">randhir3753@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="contact-add-item">
                                <div className="contact-icon text-primary mb-4">
                                    <i className="fa fa-phone-alt fa-2x"></i>
                                </div>
                                <div>
                                    <h4>Telephone</h4>
                                    <p className="mb-0">(+091)9935103744 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="contact-add-item">
                                <div className="contact-icon text-primary mb-4">
                                    <i className="fab fa-firefox-browser fa-2x"></i>
                                </div>
                                <div>
                                    <h4>YourSite@ex.com</h4>
                                    <p className="mb-0">(+091)9935103744</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
                <div className="rounded">
                    <iframe
                        className="rounded w-100"
                        style={{ height: '400px' }}
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625.3157794851493!2d85.3067076767278!3d23.35481583054853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e100235e743b%3A0xe4a4f2abc230eaa2!2sBira%20Ventures%20(OPC)%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1722319013509!5m2!1sen!2sin" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</section>

            {/* Contact End */}

            {/* Footer Start */}
            {/* <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-9">
                            <div className="mb-5">
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-6 col-xl-5">
                                        <div className="footer-item">
                                            <a href="index.html" className="p-0">
                                                <h3 className="text-white"><i className="fab fa-slack me-3"></i> LifeSure</h3>
                                            </a>
                                            <p className="text-white mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                                            <div className="footer-btn d-flex">
                                                <a className="btn btn-md-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-md-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a>
                                                <a className="btn btn-md-square rounded-circle me-3" href="#"><i className="fab fa-instagram"></i></a>
                                                <a className="btn btn-md-square rounded-circle me-0" href="#"><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-3">
                                        <div className="footer-item">
                                            <h4 className="text-white mb-4">Useful Links</h4>
                                            <a href="#"><i className="fas fa-angle-right me-2"></i> About Us</a>
                                            <a href="#"><i className="fas fa-angle-right me-2"></i> Features</a>
                                            <a href="#"><i className="fas fa-angle-right me-2"></i> Services</a>
                                            <a href="#"><i className="fas fa-angle-right me-2"></i> FAQ's</a>
                                            <a href="#"><i className="fas fa-angle-right me-2"></i> Blogs</a>
                                            <a href="#"><i className="fas fa-angle-right me-2"></i> Contact</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4">
                                        <div className="footer-item">
                                            <h4 className="mb-4 text-white">Instagram</h4>
                                            <div className="row g-3">
                                                {/* Instagram images placeholder */}
                                            {/* </div>
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
                                                        <p className="mb-0">123 Street New York, USA</p>
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
                                                        <p className="mb-0">info@example.com</p>
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
                                                        <p className="mb-0">(+012) 3456 7890</p>
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
                                <p className="text-white mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                                        <a href="tel:+01234567890"><span className="text-white">Free: +012 345 67890</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */} 
            {/* Footer End */}

            {/* Copyright Start */}
            {/* <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        {/* Copyright content */}
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */} 
            {/* Copyright End */}
        </>
    );
};

export default ContactUs;
