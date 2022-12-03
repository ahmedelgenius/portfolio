import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";
import CV from "../../assets/Ahmed_Hany_Resume.pdf";
const Header = () => {
  return (
    <header className="mb-5">
      <div className="row ">
        <div className="col-md-4 col-sm-12 me-md-5 ">
          <div className="profile-picture ">
            <div className="profile-picture-background "></div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 ms-md-5 ">
          <div className="profile-details">
            <div className="row">
              <div className="col-md-12">
                <div className="profile-details-name">
                  <span className="primary-text">
                    {" "}
                    Hello, I'M{" "}
                    <span className="highlighted-text">Ahmed Hany</span>
                  </span>
                </div>
                <div className="profile-details-role">
                  <span className="primary-text">
                    {" "}
                    <h2>
                      <TypeAnimation
                        sequence={[
                          "Front End Developer", // Types 'One'
                          1500, // Waits 1s
                          "MERN Stack Developer", // Deletes 'One' and types 'Two'
                          2000, // Waits 2s
                          // Types 'Three' without deleting 'Two'
                          () => {
                            // console.log("Done typing!"); // Place optional callbacks anywhere in the array
                          },
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: "1em" }}
                      />
                    </h2>
                    <span className="profile-role-tagline">
                      l can building applications with frontend and backend
                      operations
                    </span>
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="profile-options">
                  <a href="#contact" className="btn primary-btn">
                    {" "}
                    Hire Me {""}
                  </a>
                  <a href={CV} download="Ahmed_Hany_Resume.pdf">
                    <button className="btn highlighted-btn">Get Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
