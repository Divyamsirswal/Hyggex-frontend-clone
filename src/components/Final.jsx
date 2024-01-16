import img from "../assets/images/hyggexlogo.png";
import { GoHome, GoChevronRight } from "react-icons/go";
import { LuRotateCw } from "react-icons/lu";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GoScreenFull } from "react-icons/go";

import Card from "./card";
const Final = () => {
  let txt = `Relations and Functions (  Mathematics ) `;
  let val = `01/10`;
  return (
    <>
      <main className=" w-full h-full items-center flex-col flex">
        <section className="  w-10/12 p-10 h-1/6 flex justify-between items-center ">
          <img
            src={img}
            alt="Hyggex"
            className=" w-[200px] h-[65px] mix-blend-multiply"
          />
          <div className=" text-gray-400 items-center justify-center text-base font-sf_sb  gap-10 flex ">
            <div className=" text-black hover:*:cursor-pointer  flex gap-8">
              <span>Home</span>
              <span>Flashcard</span>
              <span>Contact</span>
            </div>
            <span className=" hover:text-black hover:outline-black hover:p-3 transition-all duration-500 ease-in-out cursor-pointer">
              FAQ
            </span>
            <button
              className="border px-8 py-2 rounded-3xl text-white duration-700 transition-all ease-in-out transform hover:scale-105"
              style={{
                background:
                  "linear-gradient(20deg,rgba(22, 78, 192, 1), rgba(6, 40, 110, 1))",
              }}
            >
              Login
            </button>
          </div>
        </section>

        <section className=" font-sf_sb  hover:*:cursor-pointer flex mt-5  -translate-x-[109%] items-center transition-all duration-500 ease-in-out">
          <GoHome size={18} color="gray" />
          <GoChevronRight className=" text-[#07296e]" size={20} />
          <span className="text-gray-500">Flashcard</span>
          <GoChevronRight className=" text-[#07296e]" size={20} />
          <span className="text-gray-500">Mathematics</span>
          <GoChevronRight className=" text-[#07296e]" size={20} />
          <h2 className=" text-[#07296e] text-lg font-[600]">
            Relation and Function
          </h2>
        </section>
        <section className="mt-10 w-full px-[13vw] h-max flex items-start">
          <span className=" text-3xl flex w-max font-sf_sb text-[#0f3f9c] ">
            {txt}
          </span>
        </section>

        <section className=" mt-16 w-max h-max ">
          <div className=" flex gap-10 text-xl items-baseline justify-center">
            <div className=" flex flex-col gap-1">
              <span className=" cursor-pointer font-sf_bd text-[#07296e] ">
                Study
              </span>
              <div className=" h-[.1vw] w-18 bg-[#07296e]"></div>
            </div>
            <span className="text-gray-500 hover:cursor-pointer">Quiz</span>
            <span className="text-gray-500 hover:cursor-pointer">Test</span>
            <span className="text-gray-500 hover:cursor-pointer">Game</span>
            <span className="text-gray-500 hover:cursor-pointer">Others</span>
          </div>
        </section>

        <section className=" mt-6">
          <Card />
        </section>

        <section className=" w-max flex text-[#1346b0]  items-center justify-center">
          <div className=" hover:*:cursor-pointer flex items-center gap-20 p-5 text-4xl">
            <LuRotateCw fontWeight={500} />
            <IoIosArrowDropleftCircle size={60} />
            <h1 className=" text-black font-sf_sb text-xl">{val}</h1>
            <IoIosArrowDroprightCircle size={60} />
            <GoScreenFull fontWeight={500} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Final;
