import React from "react";
import logo from "../../assets/Logo.svg";
import icon from "../../assets/navbar-icon.svg";
import Button from "../Button";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo-agency" className="self-center"></img>
        </div>

        <div className="sm:flex gap-10 hidden">
          <Button isActive={true} type="link">
            Home
          </Button>
          <Button isActive={false} type="link">
            About Us
          </Button>
          <Button isActive={false} type="link">
            Services
          </Button>
          <Button isActive={false} type="link">
            Testimonials
          </Button>
          <Button isActive={false} type="link">
            Our Works
          </Button>
          <Button isActive={false} type="link">
            Services
          </Button>
          <Button isOutline={true}>Have a Project?</Button>
        </div>
        <button className="sm:hidden">
          <img src={icon} alt="collapse-icon" />
        </button>
      </div>

      <div className="sm:hidden grid mt-4 ">
        <Button
          className="py-3 hover:bg-indigo-500 hover:text-white rounded-full"
          isActive={true}
          type="link"
        >
          Home
        </Button>
        <Button
          className="py-3 hover:bg-indigo-500 hover:text-white rounded-full"
          isActive={false}
          type="link"
        >
          About Us
        </Button>
        <Button
          className="py-3 hover:bg-indigo-500 hover:text-white rounded-full"
          isActive={false}
          type="link"
        >
          Services
        </Button>
        <Button
          className="py-3 hover:bg-indigo-500 hover:text-white rounded-full"
          isActive={false}
          type="link"
        >
          Testimonials
        </Button>
        <Button
          className="py-3 hover:bg-indigo-500 hover:text-white rounded-full"
          isActive={false}
          type="link"
        >
          Our Works
        </Button>
        <Button
          className="py-3 hover:bg-indigo-500 hover:text-white rounded-full mb-4"
          isActive={false}
          type="link"
        >
          Services
        </Button>
        <Button isOutline={true}>Have a Project?</Button>
      </div>
    </>
  );
}
