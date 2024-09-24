import React from 'react';
import '../Body/Body.css'; // Correct path to the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

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

const Banner = () => {
  const teamMembers = [
    { name: 'Full Name 1', designation: 'Designation 1', image: `${process.env.PUBLIC_URL}/img/pic.jpg` },
    { name: 'Full Name 2', designation: 'Designation 2', image: `${process.env.PUBLIC_URL}/img/pic.jpg` },
    { name: 'Full Name 3', designation: 'Designation 3', image: `${process.env.PUBLIC_URL}/img/pic.jpg` },
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
    image: `${process.env.PUBLIC_URL}/img/1.jpg`,
    },
    {
    
      title: "Professional Staff",
      description: "Expertise Personified: Our Professional Staff Ensures Unmatched Web Development",
    image: `${process.env.PUBLIC_URL}/img/1.jpg`,
    },
    {
     
      title: "24/7 Support",
      description: "Your Success is Our Priority: Unwavering Support Every Step of the Way",
     image: `${process.env.PUBLIC_URL}/img/1.jpg`,
    },
  ];

  return (
    <>
      {/* About Section */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
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

      {/* Services Section */}
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
                  <img src={`${process.env.PUBLIC_URL}/img/4.png`} className="img-fluid w-100" alt="Water Solutions" />
                </div>
              </div>
              
              {/* Right Column Services */}
              <div className="col-lg-6 col-xl-4 wow fadeInRight" data-wow-delay="0.2s">
                {['Revenue Management ', 'Android App', 'SMS & Whatsapp API'].map((title, index) => (
                  <ServiceItem 
                    key={title}
                    title={title}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                    icon={`fa-${index === 0 ? 'assistive-listening-systems' : index === 1 ? 'recycle' : 'project-diagram'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container-xxl py-5">
        <div className="container text-center mx-auto mb-5">
          <h6 className="section-title bg-white text-center text-primary px-3">Our Team</h6>
          <h1 className="display-6 mb-4">We Are A Creative Team For Your Dream Project</h1>
          <div className="row g-4">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="position-relative py-10" style={{ background: 'whitesmoke' }}>
        <div className="container">
          <div className="row mb-lg-6">
            {projects.map((project) => (
              <div className="col-12 col-md-6 col-lg-3 col d-flex" key={project.id}>
                <article className="mb-4 mb-lg-0 d-flex w-100 bg-white">
                  <div className="d-flex flex-column w-100 position-relative">
                    <div className="overflow-hidden position-relative">
                      <div className="thumbnail">
                        <img src={project.image} className="img-fluid w-100" alt={project.title} />
                      </div>
                    </div>
                    <div className="px-3 px-md-5 pt-3 pb-6">
                      <h3 className="h3 cgColTitle mb-3 fwMedium"><strong id={project.id}>{project.title}</strong></h3>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
