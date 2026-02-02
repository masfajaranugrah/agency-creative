import React, { useState } from "react";

const UxProcess = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process bg-tertiary fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                UX Process
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">How We Bring Stories to life</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Concept Development</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We develop the core idea, goals, and creative direction
                    to align the project with it's intended message.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Script & Storyboard</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We structure the story and visuals to define flow, timing,
                    and narrative clarity before production.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Design & Asset Creation</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We design visual styles, characters, and assets that
                    support the story and animation needs.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Production Shooting</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We produce live-action footage or visual references 
                    when required to support the animation process.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 4 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Animation Production</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We animate scenes based on approved designs and storyboards
                    with attention to motion and detail.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 5 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Composing & Rendering</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We combine all visual elements and finalize lighting, effects,
                    and output quality.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 6 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Final Review & Delivery</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We refine, review, and deliver the final content
                    according to project requirements.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 6 ? -1 : 6)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UxProcess;
