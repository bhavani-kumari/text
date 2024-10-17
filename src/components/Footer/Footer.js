import React from 'react';
import './Footer.css'; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer_info" style={{ fontSize: '1.5rem' }}>
              <h4><i className="fa-solid fa-house-chimney"></i>&nbsp;Address</h4>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '26px' }}>
                <strong>Sugan Softech Pvt Ltd,</strong>  <br />
               New Makchund Toli , <br />
                 Ranchi
                Jharkhand - 834001<br />
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4><i className="fa-solid fa-phone-volume"></i>&nbsp;Phone</h4>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '26px' }}>
                +91 9931503744 <br />
                <strong>Mon - Sat <br />
                10:00 am - 6:00 pm</strong>
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4><i className="fa-solid fa-envelope"></i>&nbsp;Mail</h4>
              <p style={{ fontSize: '14px', color: '#ffffff', lineHeight: '26px' }}>
                info@sugansoftech.net <br />
                randhir3753@gmail.com
              </p>
              <p style={{ fontSize: '14px', color: '#ffffff' }}><strong>Sugan Softech Pvt Ltd</strong></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="copyright" style={{ color: '#fff', fontSize: '1.3rem' }}>
            Copyright &copy; <span id="copyright">2024</span> <a href="#" className="text-green">Sugan Softech Pvt Ltd</a>. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
