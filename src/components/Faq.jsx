import React from "react";
import Accordian from "./Accordian";

const Faq = () => {
  return (
    <>
      <section className=" w-full h-[70%] flex p-28 flex-col items-start">
        <h1 className=" px-32 font-sf_sb text-6xl pt-20 text-[#0e3b95]">FAQ</h1>
        <div className=" flex flex-col items-start">
          <Accordian />
        </div>
      </section>
    </>
  );
};

export default Faq;
