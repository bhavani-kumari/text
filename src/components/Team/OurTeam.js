import React from 'react';
import './OurTeam.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
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

// Banner Component
const Banner = () => {
  const teamMembers = [
    { name: 'Full Name 1', designation: 'Designation 1', image: `${process.env.PUBLIC_URL}/img/Placeholder_Person.jpg` },
    { name: 'Full Name 2', designation: 'Designation 2', image: `${process.env.PUBLIC_URL}/img/Placeholder_Person.jpg` },
    { name: 'Full Name 3', designation: 'Designation 3', image: `${process.env.PUBLIC_URL}/img/Placeholder_Person.jpg` },
  ];

  return (
    // Team Section
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
  );
};

export default Banner;
