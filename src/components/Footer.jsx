import React from "react";
import logo from "../assets/images/logo.png";
import k from "../assets/images/ss.png";
import { IoIosAddCircle } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" p-10">
      <section className=" w-full h-max flex justify-between px-40 ">  
        <section className=" flex gap-5 h-max items-center">
          <img
            src={logo}
            alt="img"
            className=" w-20 rounded-full relative"
            style={{
              boxShadow: "0 4px 25px skyblue",
            }}
          />

          <div className=" w-max">
            <span className=" font-sf_bd text-gray-500">Published by</span>
            <img src={k} alt="img" />
          </div>
        </section>
        <section className=" flex items-center gap-2 h-max">
          <IoIosAddCircle size={50} color={`#1141a3`} />
          <span className="text-3xl font-sf_sb text-[#09307f]">
            Create Flashcard
          </span>
        </section>
      </section>
    </div>
  );
};

export default Footer;
