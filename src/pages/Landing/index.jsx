import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Card from "../../components/Card";
import ServiceItem from "../../components/Landing/ServiceItem";
import Footer from "../../components/Footer";
import TestimonialCard from "../../components/Landing/TestimonialCard";
import arrowRight from "../../assets/ic_arrow_right_circle.svg";
import dedi from "../../assets/dedi.jpg";
import {
  personalWebIcon,
  olshopIcon,
  compIcon,
  moreIcon,
  circle,
  dot,
  instagramIcon,
  emailIcon,
  phoneIcon,
  locationIcon,
  telegramIcon,
} from "../../assets";

const Landing = () => {
  const cardData = [
    {
      img: "https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Shayna Online Shop",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      title: "Shayna Online Shop",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
      title: "Shayna Online Shop",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img: "https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Shayna Online Shop",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      title: "Shayna Online Shop",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
      title: "Shayna Online Shop",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
  ];

  const serviceData = [
    {
      title: "Company Title",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      icon: compIcon,
    },
    {
      title: "Online Shop",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      icon: olshopIcon,
    },
    {
      title: "Personal Website",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      icon: personalWebIcon,
    },
    {
      title: "And Many More",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      icon: moreIcon,
    },
  ];

  const testimonialData = [
    {
      imgLink:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: 4,
      review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      userName: "Gisani Miftahul Rahma",
      userDetail: "Owner of My Heart",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: 3,
      review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      userName: "Gisani Miftahul Rahma",
      userDetail: "Owner of My Heart",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: 4,
      review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      userName: "Gisani Miftahul Rahma",
      userDetail: "Owner of My Heart",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: 4,
      review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      userName: "Gisani Miftahul Rahma",
      userDetail: "Owner of My Heart",
    },
    {
      imgLink:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: 4,
      review: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
      userName: "Gisani Miftahul Rahma",
      userDetail: "Owner of My Heart",
    },
  ];

  return (
    <div className="px-10 md:px-16 lg:px-20 xl:px-28 py-14 scroll-smooth">
      <Navbar />
      <section className="mt-28 gap-x-12 flex flex-col lg:flex-row items-center sm:gap-y-6 lg:gap-y-0">
        <div className="flex flex-col gap-12 w-full lg:w-1/2 ">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-bold leading-normal">
              Bring the <span className="text-indigo-500">Best Solution</span>{" "}
              for Your Need
            </h1>
            <p className="text-base text-slate-400 w-3/4">
              We are website development agency that focused help you grow your
              business online
            </p>
          </div>
          <Button isPrimary={true} isLarge={false}>
            See Our Works
          </Button>
        </div>
        <div className="sm:rounded-xl lg:rounded-full overflow-hidden sm:h-56 sm:w-full lg:h-[31rem] lg:w-[31rem] sm:order-first lg:order-last">
          <img className="object-cover w-full h-full" src={dedi} alt="" />
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-40">
        <h5 className="text-xl font-semibold text-indigo-500">ABOUT US</h5>
        <div className="flex flex-col lg:flex-row gap-8">
          <h3 className="text-4xl font-bold">
            We are Twillio, an agency that focuses on service and website
            creation
          </h3>
          <div className="flex flex-col gap-8 w-4/5">
            <p className="text-lg text-slate-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div className="flex items-stretch">
              <button className="self-center text-base mr-2 font-semibold text-orange-400">
                Read More
              </button>
              <img src={arrowRight} alt="arrow" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-14 mt-40">
        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-4">
            <h5 className="text-xl font-semibold text-indigo-500">OUR WORKS</h5>
            <h2 className="text-4xl font-bold">Our latest cool projects</h2>
          </div>
          <div className="lg:self-center">
            <Button isOutline={true}>See More Works</Button>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mx-auto">
          {cardData.map((item, itemIdx) => (
            <Card
              key={itemIdx}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-14 mt-20">
        <div className="flex flex-col gap-4">
          <h5 className="text-xl font-semibold text-center text-indigo-500">
            SERVICES
          </h5>
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold text-center">
              Our Provided Services
            </h2>
            <p className="text-lg text-slate-400 text-center">
              We can create websites of your needs, such as
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto">
          {serviceData.map((item, itemIdx) => (
            <ServiceItem
              key={itemIdx}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-14 mt-40">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h5 className="text-xl font-semibold text-indigo-500">
            WHAT THEY SAY
          </h5>
          <h2 className="text-4xl font-bold">
            Their experience after using our services
          </h2>
        </div>
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-8 md:flex-row testi_box flex-nowrap overflow-x-auto overflow-y-hidden">
          {testimonialData.map((item, itemIdx) => (
            <TestimonialCard
              key={itemIdx}
              userImg={item.imgLink}
              userRating={item.rating}
              userReview={item.review}
              userName={item.userName}
              userDetail={item.userDetail}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between mt-40">
        <div className="flex flex-col self-center gap-16 w-full lg:w-2/5">
          <div>
            <h5 className="text-xl font-semibold text-indigo-500 mb-4">
              CONTACT US
            </h5>
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold">
                Are you interested to start work with us?
              </h2>
              <p className="text-lg text-slate-400">
                We can create websites of your needs, such as
              </p>
            </div>
          </div>
          <div className="flex sm:flex-col md:flex-row lg:flex-col gap-8 lg:justify-between">
            <div className="flex flex-col gap-9">
              <div className="flex items-stretch gap-4">
                <img src={phoneIcon} alt="arrow" />
                <p className="self-center text-xl mr-2 font-semibold">
                  +6285740564139
                </p>
              </div>
              <div className="flex items-stretch gap-4">
                <img src={emailIcon} alt="arrow" />
                <p className="self-center text-xl mr-2 font-semibold">
                  hello@twillio.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <div className="flex items-stretch gap-4">
                <img src={instagramIcon} alt="arrow" />
                <p className="self-center text-xl mr-2 font-semibold">
                  @twillio.agency
                </p>
              </div>
              <div className="flex items-stretch gap-4">
                <img src={locationIcon} alt="arrow" />
                <p className="self-center text-xl mr-2 font-semibold">
                  Open Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 p-14">
          <img className="absolute top-0 right-0" src={circle} alt="circle" />
          <img className="absolute bottom-0 left-0" src={dot} alt="dot" />
          <div className="relative flex flex-col gap-8 p-8 rounded-2xl bg-white shadow-lg z-40">
            <h3 className="text-2xl font-bold z-50">
              Get in <span className="text-indigo-500">touch</span>
            </h3>
            <form className="z-50">
              <div className="flex flex-col mb-8 gap-3">
                <label for="email" className="text-base font-semibold">
                  Your email
                </label>
                <input
                  className="rounded-xl text-base text-slate-500 p-3 bg-slate-100"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col mb-8 gap-3">
                <label for="email" className="text-base font-semibold">
                  Messages
                </label>
                <input
                  className="rounded-xl text-base text-slate-500 p-3 bg-slate-100"
                  type="email"
                  id="email"
                  placeholder="Enter your messages"
                />
              </div>
              <Button isLarge={true}>Send Messages</Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="mt-40">
        <Footer />
      </footer>
    </div>
  );
};

export default Landing;
