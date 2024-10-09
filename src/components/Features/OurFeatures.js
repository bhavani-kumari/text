import React from 'react';
import './OurFeatures.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FeaturesSection = () => {
    return (
        <div className="container-fluid feature bg-light py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                    <h4 className="text-primary">Our Features</h4>
                    <h1 className="display-4 mb-4">Company Provides You a Better Future</h1>
                   
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="feature-item p-4 pt-0">
                            <div className="feature-icon p-4 mb-4">
                                <i className="far fa-handshake fa-3x"></i>
                            </div>
                            <h4 className="mb-4">Trusted Company</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...</p>
                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="feature-item p-4 pt-0">
                            <div className="feature-icon p-4 mb-4">
                                <i className="fa fa-dollar-sign fa-3x"></i>
                            </div>
                            <h4 className="mb-4">Anytime Money Back</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...</p>
                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="feature-item p-4 pt-0">
                            <div className="feature-icon p-4 mb-4">
                                <i className="fa fa-bullseye fa-3x"></i>
                            </div>
                            <h4 className="mb-4">Flexible Plans</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...</p>
                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="feature-item p-4 pt-0">
                            <div className="feature-icon p-4 mb-4">
                                <i className="fa fa-headphones fa-3x"></i>
                            </div>
                            <h4 className="mb-4">24/7 Fast Support</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...</p>
                            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
