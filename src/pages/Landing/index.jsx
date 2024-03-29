import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Card from "../../components/Card";
import ServiceItem from "../../components/Landing/ServiceItem";
import Footer from "../../components/Footer";
import TestimonialCard from "../../components/Landing/TestimonialCard";
import arrowRight from "../../assets/ic_arrow_right_circle.svg";
import heroimage from "../../assets/heroimage.png";

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

    const handleOpenGoogleMaps = () => {
        window.open("https://goo.gl/maps/FtotQVgufJL1XzdV6", "_blank");
    };

    return (
        <>
            {/* <img className="absolute -z-40 h-full w-full" src={ellipse.svg} alt="" /> */}

            <div className="relative px-10 md:px-16 lg:px-20 xl:px-28 pt-14 pb-6 scroll-smooth ">
                <div className="absolute -z-10 top-0 right-0">
                    <svg
                        width="900"
                        height="900"
                        viewBox="0 200 400 1060"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1060 530C1060 822.711 822.711 1060 530 1060C237.289 1060 0 822.711 0 530C0 237.289 237.289 0 530 0C822.711 0 1060 237.289 1060 530ZM159 530C159 734.898 325.102 901 530 901C734.898 901 901 734.898 901 530C901 325.102 734.898 159 530 159C325.102 159 159 325.102 159 530Z"
                            fill="#F8FAFC"
                        />
                    </svg>
                </div>
                <div className="absolute -z-10 left-0 top-[100rem] lg:top-[55rem]  sm:top-[80rem]  ">
                    <svg
                        width="700"
                        height="700"
                        viewBox="300 0 1060 1060"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1060 530C1060 822.711 822.711 1060 530 1060C237.289 1060 0 822.711 0 530C0 237.289 237.289 0 530 0C822.711 0 1060 237.289 1060 530ZM159 530C159 734.898 325.102 901 530 901C734.898 901 901 734.898 901 530C901 325.102 734.898 159 530 159C325.102 159 159 325.102 159 530Z"
                            fill="#F8FAFC"
                        />
                    </svg>
                </div>
                <div className="absolute -z-10 right-0 top-[320rem] md:top-[180rem] lg:top-[140rem]">
                    <svg
                        width="700"
                        height="700"
                        viewBox="0 0 500 1060"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1060 530C1060 822.711 822.711 1060 530 1060C237.289 1060 0 822.711 0 530C0 237.289 237.289 0 530 0C822.711 0 1060 237.289 1060 530ZM159 530C159 734.898 325.102 901 530 901C734.898 901 901 734.898 901 530C901 325.102 734.898 159 530 159C325.102 159 159 325.102 159 530Z"
                            fill="#F8FAFC"
                        />
                    </svg>
                </div>
                <div className="absolute -z-10 left-0 bottom-0">
                    <svg
                        width="650"
                        height="650"
                        viewBox="200 0 1060 300"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1060 530C1060 822.711 822.711 1060 530 1060C237.289 1060 0 822.711 0 530C0 237.289 237.289 0 530 0C822.711 0 1060 237.289 1060 530ZM159 530C159 734.898 325.102 901 530 901C734.898 901 901 734.898 901 530C901 325.102 734.898 159 530 159C325.102 159 159 325.102 159 530Z"
                            fill="#F8FAFC"
                        />
                    </svg>
                </div>

                <Navbar />

                <section className="mt-28 gap-x-12 flex flex-col md:flex-row items-center sm:gap-y-6 lg:gap-y-0">
                    <div className="flex flex-col gap-12 w-full md:w-1/2 ">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-5xl font-bold leading-normal">
                                Bring the <span className="text-indigo-500">Best Solution</span>{" "}
                                for Your Need
                            </h1>
                            <p className="text-base text-slate-400 w-3/4">
                                We are website development agency that focused help you grow
                                your business online
                            </p>
                        </div>
                        <Button isPrimary={true} isLarge={false}>
                            See Our Works
                        </Button>
                    </div>
                    <div className="overflow-hidden lg:h-full lg:w-[31rem]">
                        <img
                            className="object-cover w-full h-full"
                            src={heroimage}
                            alt=""
                        />
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
                                    See Our Team
                                </button>
                                <img src={arrowRight} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col gap-14 mt-40">
                    <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between">
                        <div className="flex flex-col gap-4">
                            <h5 className="text-xl font-semibold text-indigo-500">
                                OUR WORKS
                            </h5>

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
                    <div className="relative grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto">
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
                                <div className="flex items-stretch gap-4 cursor-pointer" onClick={handleOpenGoogleMaps}>
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
                                <Button className="flex" isLarge={true}>
                                    <svg
                                        className="self-center mr-4 fill-white rotate-90"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 51 51"
                                    >
                                        <path d="M1.85432 2.17091C1.30197 2.72963 0.906906 3.42427 0.709062 4.18461C0.511218 4.94495 0.517606 5.74404 0.727579 6.50112L12.3485 47.6603C12.5919 48.5253 13.0933 49.2955 13.7858 49.8682C14.4782 50.4409 15.3288 50.7889 16.2241 50.8657C17.1194 50.9425 18.0169 50.7445 18.7968 50.2981C19.5767 49.8517 20.2019 49.1781 20.5891 48.3673L29.4042 29.7208L48.0507 20.9057C48.8076 20.5541 49.4474 19.9923 49.894 19.2872C50.3405 18.5822 50.5749 17.7636 50.5693 16.929V16.5534C50.4981 15.6551 50.1527 14.8004 49.5797 14.1049C49.0067 13.4094 48.2339 12.9068 47.3658 12.6651L6.18454 1.04417C5.42746 0.834194 4.62836 0.827806 3.86802 1.02565C3.10768 1.22349 2.41304 1.61856 1.85432 2.17091V2.17091ZM43.6321 17.1278L27.9682 24.5511L19.3077 15.8685C18.8097 15.3705 18.1342 15.0907 17.4298 15.0907C16.7255 15.0907 16.05 15.3705 15.5519 15.8685C15.0539 16.3666 14.7741 17.0421 14.7741 17.7464C14.7741 18.4508 15.0539 19.1263 15.5519 19.6243L24.2345 28.2848L16.8112 43.9487L6.27291 6.58949L43.6321 17.1278Z" />
                                    </svg>
                                    Send Messages
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
                <footer className="mt-40">
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default Landing;
