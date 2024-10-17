import React from 'react';
import './ServicesUs.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ServiceItem = ({ title, description, icon }) => (
  <div className="service-item rounded p-4 mb-4">
    <div className="d-flex">
      <div className="pe-4">
        <div className="service-btn"><i className={`fas ${icon} text-white fa-2x`}></i></div>
      </div>
      <div className="service-content">
        <a href="#" className="h4 d-inline-block mb-3">{title}</a>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  </div>
);

const ServicesUs = () => { 
  const services = [
    { title: 'Web Application', description: 'Description for Web Application', icon: 'fa-laptop' },
    { title: 'Desktop Application', description: 'Description for App Development', icon: 'fa-mobile-alt' },
    { title: 'GIS Survey', description: 'Description for GIS Survey', icon: 'fa-search' },
  ];

  return ( 
    <>
      <section className="container-xxl py-5">
        <div className="container text-center mx-auto mb-5">
          <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
          <h1 className="display-6 mb-4">We Focus On Making The Best In All Sectors</h1>
        </div>

        <div className="container-fluid service bg-light overflow-hidden py-5">
          <div className="container py-5">
            <div className="row gx-0 gy-4 align-items-center">
              {/* Left Column Services */}
              <div className="col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay="0.2s">
                {services.map(service => (
                  <ServiceItem 
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                ))}
              </div>

              {/* Image Column */}
              <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="bg-transparent">
                  <img src={`${process.env.PUBLIC_URL}/img/4.png`} className="img-fluid w-100" alt="Service" />
                </div>
              </div>

              {/* Right Column Services */}
              <div className="col-lg-6 col-xl-4 wow fadeInRight" data-wow-delay="0.2s">
                {[{
                  title: 'Revenue Management', description: 'Description for Revenue Management.', icon: 'fa-assistive-listening-systems'
                },
                {
                  title: 'Android App', description: 'Description for Android App.', icon: 'fa-recycle'
                },
                {
                  title: 'SMS & Whatsapp API', description: 'Description for SMS & Whatsapp API.', icon: 'fa-project-diagram'
                }].map((service) => (
                  <ServiceItem 
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid faq-section bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-xl-6">
              <div className="h-100">
                <div className="mb-5">
                  <h4 className="text-primary">Some Important FAQ's</h4>
                  <h1 className="display-4 mb-0">Common Frequently Asked Questions</h1>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Q: What happens during Freshers' Week?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body rounded">
                        A: Leverage agile frameworks to provide a robust synopsis for high-level overviews.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Q: What is the transfer application process?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        A: Leverage agile frameworks to provide a robust synopsis for high-level overviews.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Q: Why should I attend community college?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        A: Leverage agile frameworks to provide a robust synopsis for high-level overviews.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
              <img src="img/carousel-2.png" className="img-fluid w-100" alt="FAQ Illustration" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesUs;
