import React, { useEffect, useRef, useState } from 'react';
import '../Body/Body.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Team Member Component
const TeamMember = ({ name, designation, image }) => (
  <div className="col-lg-4 col-md-6 wow fadeInUp">
    <div className="team-item text-center p-4">
      <img className="img-fluid border rounded-circle w-75 p-2 mb-4" src={image} alt={`${name} profile`} />
      <div className="team-text">
        <div className="team-title">
          <h5>{name}</h5>
          <span>{designation}</span>
        </div>
        <div className="team-social">
          <button className="btn btn-square btn-primary rounded-circle"><i className="fab fa-facebook-f"></i></button>
          <button className="btn btn-square btn-primary rounded-circle"><i className="fab fa-twitter"></i></button>
          <button className="btn btn-square btn-primary rounded-circle"><i className="fab fa-instagram"></i></button>
        </div>
      </div>
    </div>
  </div>
);

// Service Item Component
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
// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      title: 'Trusted Company',
      description: 'Setting the Gold Standard: Your Destination for Excellence in Web Development',
      icon: 'far fa-handshake',
    },
    {
      title: 'Anytime Money Back',
      description: 'Excellence Recognized: Where Award-Winning Web Development Thrives',
      icon: 'fa fa-award ',
    },
    {
      title: 'Flexible Plans',
      description: 'Expertise Personified: Our Plans Ensures Unmatched Web Development',
      icon: 'fa fa-bullseye',
    },
    {
      title: '24/7 Fast Support',
      description: 'Your Success is Our Priority: Unwavering Support Every Step of the Way',
      icon: 'fa fa-headphones',
    },
  ];

  return (
    <section className="container-fluid feature bg-light py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h2 className="text-primary">Our Features</h2>
          <h1 className="display-4 mb-4">Company Provides You a Better Future</h1>
          
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`${(index + 1) * 0.2}s`} key={feature.title}>
              <div className="feature-item p-4 pt-0">
                <div className="feature-icon p-4 mb-4">
                  <i className={`${feature.icon} fa-3x`}></i>
                </div>
                <h4 className="mb-4">{feature.title}</h4>
                <p className="mb-4">{feature.description}</p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

<section>
<div className="header-carousel-item bg-primary">
<div className="carousel-caption">
    <div className="container">
        <div className="row g-4 align-items-center">
            <div className="col-lg-7 animated fadeInLeft">
                <div className="text-sm-center text-md-start">
                    <h4 className="text-white text-uppercase fw-bold mb-4">Welcome To Our site</h4>
                    <h1 className="display-1 text-white mb-4">sugan Softech</h1>
                  
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
</div>
</section>
// About Section Component
const AboutSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
<div className="container-fluid bg-light about py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="about-item-content bg-white rounded p-5 h-100">
                                <h4 className="text-primary">About Our Company</h4>
                                {/* <h1 className="display-4 mb-4">High Range of Exploring Protection</h1> */}
                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Welcome to Sugan Softech Pvt. Ltd., your trusted partner in turning visionary ideas into innovative software solutions. With a dedicated team of skilled developers, we specialize in crafting bespoke digital products tailored to your business needs. From custom software applications to advanced web and mobile solutions, we leverage industry-leading technologies to deliver excellence at every step. Through collaboration, transparency, and efficiency, we ensure that your project is aligned with your goals and objectives. At Sugan Softech, we don't just deliver software; we deliver transformative solutions that empower your business to thrive in today's dynamic digital landscape.</p>
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
    
//     <section ref={sectionRef} className="container-xxl py-5">
//       <div className="container">
//         <div className="row g-5 align-items-center">
//           <div className={`col-lg-6 ${visible ? 'animate' : 'hidden'}`}>
//           <div className="img-border">
//   <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/carousel-2.png`} alt="About Us" />
// </div>

//           </div>
//           <div className={`col-lg-6 ${visible ? 'animate' : 'hidden-text'}`}>
//             <div className="h-100">
//               <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
//               <h1 className="display-6 mb-4">#1 Sugan Softech With <span className="text-primary">10 Years</span> Of Experience</h1>
//               <p>Welcome to Sugan Softech Pvt. Ltd., your trusted partner in turning visionary ideas into innovative software solutions. With a dedicated team of skilled developers, we specialize in crafting bespoke digital products tailored to your business needs. From custom software applications to advanced web and mobile solutions, we leverage industry-leading technologies to deliver excellence at every step. Through collaboration, transparency, and efficiency, we ensure that your project is aligned with your goals and objectives. At Sugan Softech, we don't just deliver software; we deliver transformative solutions that empower your business to thrive in today's dynamic digital landscape.</p>
//               <div className="d-flex align-items-center mb-4 pb-2">
//                 <img className="flex-shrink-0 rounded-circle" src={`${process.env.PUBLIC_URL}/img/pic.jpg`} alt="Randhir Kumar Sharma" style={{ width: '50px', height: '50px' }} />
//                 <div className="ps-4">
//                   <h6>Randhir Kumar Sharma</h6>
//                   <small>SEO & Founder</small>
//                 </div>
//               </div>
//               <button className="btn btn-primary rounded-pill py-3 px-5">Read More</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
  );
};


// Main Banner Component
const Banner = () => {
  const teamMembers = [
    { name: 'Full Name 1', designation: 'Designation 1', image: `${process.env.PUBLIC_URL}/img/Placeholder_Person.jpg` },
    { name: 'Full Name 2', designation: 'Designation 2', image: `${process.env.PUBLIC_URL}/img/Placeholder_Person.jpg` },
    { name: 'Full Name 3', designation: 'Designation 3', image: `${process.env.PUBLIC_URL}/img/Placeholder_Person.jpg` },
  ];

  const services = [
    { title: 'Web Application', description: 'Description for Web Application', icon: 'fa-laptop' },
    { title: 'Desktop Application', description: 'Description for App Development', icon: 'fa-mobile-alt' },
    { title: 'GIS Survey', description: 'Description for GIS Survey', icon: 'fa-search' },
  ];

  const projects = [
    {
      title: "Best In Industry",
      description: "Setting the Gold Standard: Your Destination for Excellence in Web Development",
      image: `${process.env.PUBLIC_URL}/img/1.jpg`,
    },
    {
      title: "Award Winning",
      description: "Excellence Recognized: Where Award-Winning Web Development Thrives",
      image: `${process.env.PUBLIC_URL}/img/15.jpg`,
    },
    {
      title: "Professional Staff",
      description: "Expertise Personified: Our Professional Staff Ensures Unmatched Web Development",
      image: `${process.env.PUBLIC_URL}/img/16.jpg`,
    },
    {
      title: "24/7 Support",
      description: "Your Success is Our Priority: Unwavering Support Every Step of the Way",
      image: `${process.env.PUBLIC_URL}/img/17.jpg`,
    },
  ];

  return (
    <>
      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <section className="container-xxl py-5">
        <div className="container text-center mx-auto mb-5">
          <h2 className="section-title bg-white text-center text-primary px-3">Services</h2>
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
                  <img src={`${process.env.PUBLIC_URL}/img/4.png`} className="img-fluid w-100" alt="" />
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
      className="service-item" // Add a class for specific styling
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
                <h2 className="text-primary">Some Important FAQ's</h2>
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
  );


      {/* Team Section */}
      <section className="container-xxl py-5">
        <div className="container text-center mx-auto mb-5">
          <h2 className="section-title bg-white text-center text-primary px-3">Our Team</h2>
          <h1 className="display-6 mb-4">We Are A Creative Team For Your Dream Project</h1>
          <div className="row g-4">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <FeaturesSection />


      {/* Projects Section */}
      <section className="container-fluid contact bg-light py-5">
    <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
            <h2 className="text-primary">Contact Us</h2>
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
                                    <textarea className="form-control border-0  blue-input " placeholder="Leave a message here" id="message" style={{ height: '120px' }}></textarea>
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
                            {/* <div className="contact-add-item">
                                <div className="contact-icon text-primary mb-4">
                                    <i className="fas fa-map-marker-alt fa-2x"></i>
                                </div>
                                <div>
                                    <h4>Address</h4>
                                    <p className="mb-0">New Mackchund Toli,Samlog,Ranchi,JHARKHAND</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
                            {/* <div className="contact-add-item">
                                <div className="contact-icon text-primary mb-4">
                                    <i className="fas fa-envelope fa-2x"></i>
                                </div>
                                <div>
                                    <h4>Mail Us</h4>
                                    <p className="mb-0">randhir3753@gmail.com</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.6s">
                            {/* <div className="contact-add-item">
                                <div className="contact-icon text-primary mb-4">
                                    <i className="fa fa-phone-alt fa-2x"></i>
                                </div>
                                <div>
                                    <h4>Telephone</h4>
                                    <p className="mb-0">(+091)9935103744 </p>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.8s">
                            {/* <div className="contact-add-item">
                                <div className="contact-icon text-primary mb-4">
                                    <i className="fab fa-firefox-browser fa-2x"></i>
                                </div>
                                <div>
                                    <h4>YourSite@ex.com</h4>
                                    <p className="mb-0">(+091)9935103744</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
                <div className="rounded">
                    <iframe
                        className="rounded w-100"
                        style={{ height: '400px' }}
                       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1899668.3919776478!2d82.944790142136!3d21.574607089323873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873e6714575a0d35%3A0x6b943b5958501466!2sSugan%20Softech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1728338097741!5m2!1sen!2sin" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</section> 

    </>
  );
};

export default Banner;
