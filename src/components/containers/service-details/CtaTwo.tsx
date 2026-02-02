import React from "react";
import Link from "next/link";

const CtaTwo = () => {
  return (
    <section className="section footer-four">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-four__content">
              <div className="intro text-center">
                <h2 className="light-title text-uppercase title-anim">
                  Let&apos;s turn your ideas powerfull visual stories
                </h2>
              </div>
              <div className="row justify-content-center cta-t section__content-cta">
                <div className="col-12 col-md-8">
                  <h3>
                    <Link href="contact-us">
                      Let&apos;s Collaborate
                      <i className="fa-regular fa-comment-dots"></i>
                    </Link>
                  </h3>
                  <p>
                    Animation and visual production designed to communicate
                    clearly, creatively, and effectively
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTwo;
