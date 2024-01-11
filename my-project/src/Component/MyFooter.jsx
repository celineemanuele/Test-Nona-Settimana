import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import { FaThLarge, FaTh } from "react-icons/fa";

const MyFooter = () => {
  return (
    <Container fluid>
      <div className="row text-center mt-5">
        <div className="col-6 offset-3">
          <div className="row">
            <div className="col col-12 text-left mb-2">
              <i className="fa fa-facebook footer-icon"></i>
              <i className="fa fa-instagram footer-icon"></i>
              <i className="fa fa-twitter footer-icon"></i>
              <i className="fa fa-youtube footer-icon"></i>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Audio and Subtitles</a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Media Center</a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Privacy</a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Contact us</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Audio Description</a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Investor Relations</a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Legal Notices</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Help Center</a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Jobs</a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Cookie Preferences</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Gift Cards</a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Terms of Use</a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" style={{ textDecoration: 'none' }}>Corporate Information</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 text-left mb-2">
              <button
                type="button"
                className="btn btn-sm footer-button rounded-0 mt-3"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 text-left mb-2 mt-2 copyright">
              © 1997-2022 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyFooter;