import React, { useState } from "react";
import { GoLightBulb, GoUnmute } from "react-icons/go";
import "./App.css";
import ReactCardFlip from "react-card-flip";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const txt1 = `9 + 6 + 7x - 2x - 3`;
  const txt2 = `5x + 12`;
  return (
    <div
      className="flex w-full items-center justify-center h-full"
      style={{ perspective: "10000px" }}
    >
      <ReactCardFlip
        flipDirection="horizontal"
        flipSpeedFrontToBack={0.5}
        isFlipped={isFlipped}
      >
        <div className="card1 flex flex-col" onClick={handleFlip}>
          <div className=" flex justify-between p-10 text-white text-3xl">
            <GoLightBulb />
            <GoUnmute />
          </div>
          <h1 className=" flex items-center justify-center mt-12 text-white font-sf_sb text-4xl">
            {txt1}
          </h1>
        </div>
        <div className="card2 flex flex-col" onClick={handleFlip}>
          <div className=" flex justify-between p-10 text-white text-3xl">
            <GoLightBulb />
            <GoUnmute />
          </div>
          <h1 className="flex items-center justify-center mt-12 text-white font-sf_sb text-4xl">
            {txt2}
          </h1>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
