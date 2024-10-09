import React, { useEffect, useRef } from 'react';
import './AboutUs.css'; // Ensure this path is correct relative to this file
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
    const sectionRef = useRef(null);
  
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };
  
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
  
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
  
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
  
    return (
        <section ref={sectionRef} className="container-xxl py-5">
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
            {/* <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
        <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h4> */}

        {/* Add images here */}
        {/* <img
            src="img/your-image-1.jpg"
            alt="Description of Image 1"
            className="img-fluid mb-4"
            style={{ maxWidth: '100%', height: 'auto' }} // Adjust size as needed
        /> */}
        {/* <img
            src="img/bg-breadcrumb.jpg"
            alt="Description of Image 2"
            className="img-fluid mb-4"
            style={{ maxWidth: '100%', height: 'auto' }} // Adjust size as needed
        /> */}

        {/* <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active text-primary">About</li>
        </ol>
    </div>
</div> */}




            {/* Header End */}

            {/* About Start */}
            <div className="container-fluid bg-light about py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="about-item-content bg-white rounded p-5 h-100">
                                <h4 className="text-primary">About Our Company</h4>
                                {/* <h1 className="display-4 mb-4">High Range of Exploring Protection</h1> */}
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Sugan Softech Pvt. Ltd., your trusted partner in turning visionary ideas into innovative software solutions. With a dedicated team of skilled developers, we specialize in crafting bespoke digital products tailored to your business needs. From custom software applications to advanced web and mobile solutions, we leverage industry-leading technologies to deliver excellence at every step. Through collaboration, transparency, and efficiency, we ensure that your project is aligned with your goals and objectives. At Sugan Softech, we don't just deliver software; we deliver transformative solutions that empower your business to thrive in today's dynamic digital landscape.</p>
                                <p>Whether you're a startup looking to establish your online presence or an established
								enterprise
								seeking to optimize your digital strategy, we're here to empower your success. With Sugan
								Softech,
								your journey to digital excellence begins here.</p>
                                <p className="text-dark"><i className="fa fa-check text-primary me-3"></i>Innovative Solutions.</p>
                                <p className="text-dark"><i className="fa fa-check text-primary me-3"></i>Tailored Approach.</p>
                                <p className="text-dark mb-4"><i className="fa fa-check text-primary me-3"></i>Expertise Across Platforms.</p>
                                <a className="btn btn-primary rounded-pill py-3 px-5" href="#">More Information</a>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-white rounded p-5 h-100">
                                <div className="row g-4 justify-content-center">
                                    <div className="col-12">
                                        <div className="rounded bg-light">
                                            <img src="img/destop.png" className="img-fluid rounded w-100" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-control border-0 blue-input">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold">129</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Company Policies</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-control border-0 blue-input">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold">99</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Awards WON</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-control border-0 blue-input">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold">556</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Skilled Agents</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-control border-0 blue-input">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold">967</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Team Members</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            {/* Feature Start */}
            <div className="container-fluid feature bg-light pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                        <h4 className="text-primary">Our Features</h4>
                        <h1 className="display-4 mb-4">Company Provides You a Better Future</h1>
                        {/* <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.</p> */}
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="feature-item p-4 pt-0">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="far fa-handshake fa-3x"></i>
                                </div>
                                <h4 className="mb-4">Trusted Company</h4>
                                <p className="mb-4">Setting the Gold Standard: Your Destination for Excellence in Web Development</p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="feature-item p-4 pt-0">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fa fa-award fa-3x"></i>
                                </div>
                                <h4 className="mb-4">Award Winning</h4>
                                <p className="mb-4">Excellence Recognized: Where Award-Winning Web Development Thrives</p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="feature-item p-4 pt-0">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fas fa-shield-alt fa-3x"></i>
                                </div>
                                <h4 className="mb-4">Professional Staff</h4>
                                <p className="mb-4">Expertise Personified: Our Professional Staff Ensures Unmatched Web Development</p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="feature-item p-4 pt-0">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fa fa-headphones fa-3x"></i>
                                </div>
                                <h4 className="mb-4">24/7 Support</h4>
                                <p className="mb-4">Your Success is Our Priority: Unwavering Support Every Step of the Way</p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature End */}
        </section>
    );
};

export default AboutUs;
