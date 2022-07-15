import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const OurWorks = () => {
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
  return (
    <div className="relative px-28 pt-14">
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
      <section className="flex flex-col gap-14 mt-36">
        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-4">
            <h5 className="text-xl font-semibold text-indigo-500">OUR WORKS</h5>

            <h2 className="text-4xl font-bold">Our latest cool projects</h2>
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
      <section>
        <div className="mt-40 mb-4">
          <Footer />
        </div>
      </section>
    </div>
  );
};
export default OurWorks;
