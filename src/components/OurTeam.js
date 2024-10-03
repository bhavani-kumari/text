import React from 'react';
import './OurTeam.css'; // Ensure this path is correct relative to this file
import 'bootstrap/dist/css/bootstrap.min.css';

const OurTeam = () => {
    return (
        <>
            {/* Spinner Start */}
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> */}
            {/* Spinner End */}

            {/* Topbar Start */}
            <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
                <div className="container">
                    <div className="row gx-0 align-items-center">
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <div className="border-end border-primary pe-3">
                                    <a href="#" className="text-muted small">
                                        <i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location
                                    </a>
                                </div>
                                <div className="ps-3">
                                    <a href="mailto:example@gmail.com" className="text-muted small">
                                        <i className="fas fa-envelope text-primary me-2"></i>example@gmail.com
                                    </a>
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
                                    <a href="#" className="dropdown-toggle text-dark" data-bs-toggle="dropdown">
                                        <small><i className="fas fa-globe-europe text-primary me-2"></i> English</small>
                                    </a>
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
            </div>
            {/* Topbar End */}

            {/* Navbar & Hero Start */}
            <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
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
                                <div className="nav-item dropdown active">
                                    <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                        <span className="dropdown-toggle">Pages</span>
                                    </a>
                                    <div className="dropdown-menu">
                                        <a href="feature.html" className="dropdown-item">Our Features</a>
                                        <a href="team.html" className="dropdown-item active">Our team</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="FAQ.html" className="dropdown-item">FAQs</a>
                                        <a href="404.html" className="dropdown-item">404 Page</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
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
            </div>
            {/* Navbar & Hero End */}

            {/* Modal Search Start */}
            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center bg-primary">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                <span id="search-icon-1" className="btn bg-light border input-group-text p-3">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal Search End */}

            {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Team</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item active text-primary">Team</li>
                    </ol>    
                </div>
            </div>
            {/* Header End */}

            {/* Team Start */}
            <div className="container-fluid team py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                        <h4 className="text-primary">Our Team</h4>
                        <h1 className="display-4 mb-4">Meet Our Expert Team Members</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.</p>
                    </div>
                    <div className="row g-4">
                        {/* Team Member 1 */}
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-1.jpg" className="img-fluid rounded-top w-100" alt="David James" />
                                    <div className="team-icon">
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-0" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-title p-4">
                                    <h4 className="mb-0">David James</h4>
                                    <p className="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-2.jpg" className="img-fluid rounded-top w-100" alt="David James" />
                                    <div className="team-icon">
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-0" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-title p-4">
                                    <h4 className="mb-0">David James</h4>
                                    <p className="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-3.jpg" className="img-fluid rounded-top w-100" alt="David James" />
                                    <div className="team-icon">
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-0" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-title p-4">
                                    <h4 className="mb-0">David James</h4>
                                    <p className="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 4 */}
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-4.jpg" className="img-fluid rounded-top w-100" alt="David James" />
                                    <div className="team-icon">
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-primary btn-sm-square rounded-pill mb-0" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-title p-4">
                                    <h4 className="mb-0">David James</h4>
                                    <p className="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
        </>
    );
};

export default OurTeam;
