import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience" className="text-center">
      <div className="row g-3">
        <div className="col-md-12 ">
          <h5 className="section-subtitil">What Skills I Have</h5>
          <h2 className="section-title">My Experience</h2>
        </div>
        <div className="col-md-6 ">
          <div className="experience__frontend ">
            <h3 className="pb-4">Frontend Development</h3>
            <div className="experience__content ">
              <div className="row">
                <div className="col-md-6">
                  <article className="experience__details my-3">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>HTML</h4>
                      {/* <small className="text-light">Experienced</small> */}
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  <article className="experience__details my-3">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>CSS</h4>
                      {/* <small className="text-light">Intermediate</small> */}
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  <article className="experience__details my-3">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>JavaScript</h4>
                      {/* <small className="text-light">Intermediate</small> */}
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  <article className="experience__details my-3">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>Bootstrap</h4>
                      {/* <small className="text-light">Intermediate</small> */}
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  <article className="experience__details my-3">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>JQuery</h4>
                      {/* <small className="text-light">Intermediate</small> */}
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  <article className="experience__details my-3">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>SASS</h4>
                      {/* <small className="text-light">Intermediate</small> */}
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  <article className="experience__details my-3">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>React</h4>
                      {/* <small className="text-light">Intermediate</small> */}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="experience__backend">
            <h3 className="pb-4">Backend Development</h3>
            <div className="experience__content">
              <div className="row">
                <div className="col-md-6">
                  <article className="experience__details my-3">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>Node JS</h4>
                      {/* <small className="text-light">Experienced</small> */}
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  {" "}
                  <article className="experience__details my-3">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>MongoDB</h4>
                      {/* <small className="text-light">Intermediate</small> */}
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  {" "}
                  <article className="experience__details my-3">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>Express JS</h4>
                      {/* <small className="text-light">Intermediate</small> */}
                    </div>
                  </article>
                </div>
                <div className="col-md-6">
                  {" "}
                  <article className="experience__details my-3">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>MySQL</h4>
                      {/* <small className="text-light">Basic</small> */}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="container experience__container">
        
       
      
      </div> */}
    </section>
  );
};

export default Experience;
