import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/teams/Fajarruddin Achmad Muharom.png";
import two from "public/images/teams/Gifton Rahmatan.png";
import three from "public/images/teams/Irfan Kerisnanto Putro.png";
import four from "public/images/teams/Rafi Putra Wibowo.png";

interface TeamMember {
  image: StaticImageData;
  name: string;
  role: string;
  description: string;
  skills: { name: string; percent: string }[];
  extraText: string;
}

const teamData: TeamMember[] = [
  {
    image: one,
    name: "Hershel J. Jackson",
    role: "Sr. Product Designer",
    description:
      "Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus, cursus mauris in, placerat libero. Morbi tincidunt venenatis",
    skills: [
      { name: "Wireframe", percent: "75%" },
      { name: "Visual Design", percent: "90%" },
    ],
    extraText:
      "Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem feugiat",
  },
  {
    image: two,
    name: "Hershel J. Jackson",
    role: "Sr. Product Designer",
    description:
      "Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus, cursus mauris in, placerat libero. Morbi tincidunt venenatis",
    skills: [
      { name: "Wireframe", percent: "75%" },
      { name: "Visual Design", percent: "90%" },
    ],
    extraText:
      "Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem feugiat",
  },
  {
    image: three,
    name: "Hershel J. Jackson",
    role: "Sr. Product Designer",
    description:
      "Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus, cursus mauris in, placerat libero. Morbi tincidunt venenatis",
    skills: [
      { name: "Wireframe", percent: "75%" },
      { name: "Visual Design", percent: "90%" },
    ],
    extraText:
      "Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem feugiat",
  },
  {
    image: four,
    name: "Hershel J. Jackson",
    role: "Sr. Product Designer",
    description:
      "Aenean sed fringilla purus, sed convallis sem. Morbi fringilla nulla tempus, cursus mauris in, placerat libero. Morbi tincidunt venenatis",
    skills: [
      { name: "Wireframe", percent: "75%" },
      { name: "Visual Design", percent: "90%" },
    ],
    extraText:
      "Morbi non urna fringilla, luctus arcu vel, malesuada est. Vestibulum at lorem feugiat",
  },
];

// Duplicate slides for stable Swiper loop with slidesPerView: 3
const slides = [...teamData, ...teamData];

const TeamSlide = ({ member }: { member: TeamMember }) => (
  <div className="team-s__slider-single">
    <div className="team-wrap">
      <div className="thumb">
        <Link href="team-single">
          <Image src={member.image} alt="Image" width={450} height={550} />
        </Link>
        <div
          className="thumb__content"
          style={{ backgroundImage: "url('/images/teams/bg.png')" }}
        >
          <div className="info">
            <p>
              &ldquo;Lorem ipsum dolor sit amet consectetur adipiscing elit
            </p>
          </div>
          <h4>
            <Link href="team-single">Sana p. Lesh</Link>
          </h4>
          <p>Senior engineer</p>
          <div className="social-alt">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="share us on twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href="https://www.pinterest.com/"
              target="_blank"
              aria-label="share us on pinterest"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="intro">
          <h5>
            <Link href="team-single">{member.name}</Link>
          </h5>
          <p>{member.role}</p>
        </div>
        <hr />
        <div className="inner">
          <p>{member.description}</p>
          <div className="skill-wrap">
            {member.skills.map((skill, i) => (
              <div className="skill-bar-single" key={i}>
                <div className="skill-bar-title">
                  <p>{skill.name}</p>
                </div>
                <div className="skill-bar-wrapper" data-percent={skill.percent}>
                  <div className="skill-bar">
                    <div className="skill-bar-percent">
                      <span className="percent-value"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p>{member.extraText}</p>
        </div>
        <div className="social">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            aria-label="share us on facebook"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link
            href="https://www.twitter.com/"
            target="_blank"
            aria-label="share us on twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link
            href="https://www.pinterest.com/"
            target="_blank"
            aria-label="share us on pinterest"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="share us on instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const TeamMembers = () => {
  return (
    <section className="section team-slider-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      our awesome crew
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">
                      our dayana team members
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-teams"
                      className="btn btn--primary text-capitalize"
                    >
                      view all teams
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            speed={800}
            loop={true}
            centeredSlides={false}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".next-team-s",
              prevEl: ".prev-team-s",
            }}
            className="team-s__slider"
            breakpoints={{
              768: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              576: {
                slidesPerView: 2,
              },
            }}
          >
            {slides.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamSlide member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
