import React, { useEffect, useRef } from 'react';
import '../AboutUs/AboutUs.css'; // Correct path to the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutSection = () => {
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
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="img-border">
                <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/2.png`} alt="About Us" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                <h1 className="display-6 mb-4">#1 Sugan Softech With <span className="text-primary">10 Years</span> Of Experience</h1>
                <p>Welcome to Sugan Softech Pvt. Ltd., your trusted partner in turning visionary ideas into innovative software solutions. With a dedicated team of skilled developers, we specialize in crafting bespoke digital products tailored to your business needs. From custom software applications to advanced web and mobile solutions, we leverage industry-leading technologies to deliver excellence at every step. Through collaboration, transparency, and efficiency, we ensure that your project is aligned with your goals and objectives. At Sugan Softech, we don't just deliver software; we deliver transformative solutions that empower your business to thrive in today's dynamic digital landscape.</p>
                <div className="d-flex align-items-center mb-4 pb-2">
                  <img className="flex-shrink-0 rounded-circle" src={`${process.env.PUBLIC_URL}/img/pic.jpg`} alt="Randhir Kumar Sharma" style={{ width: '50px', height: '50px' }} />
                  <div className="ps-4">
                    <h6>Randhir Kumar Sharma</h6>
                    <small>SEO & Founder</small>
                  </div>
                </div>
                <button className="btn btn-primary rounded-pill py-3 px-5">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };