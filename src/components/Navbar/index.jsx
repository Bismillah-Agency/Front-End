import React from "react";
import logo from "../../assets/Logo.svg";
import Button from "../Landing/Button";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <img src={logo} alt="" className="self-center"></img>
      </div>

      <div className="flex gap-10">
        <Button isActive={true} type="link">
          Home
        </Button>
        <Button isActive={false} type="link">
          About Us
        </Button>
        <Button isActive={false} type="link">
          Our Works
        </Button>
        <Button isActive={false} type="link">
          Services
        </Button>
        <Button isOutline={true}>Have a Project?</Button>
      </div>
    </div>
  );
}
