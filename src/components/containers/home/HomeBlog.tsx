import React from "react";
import Script from "next/script";

const HomeBlog = () => {
  return (
    <section className="section blog fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Instagram Feed
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">follow our instagram</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Elfsight Instagram Feed */}
            <div
              className="elfsight-app-8a19b82d-bbe6-4d33-ba06-c9f90db07110"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />
    </section>
  );
};

export default HomeBlog;
