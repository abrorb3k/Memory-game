"use client";
import { CardI } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface PropsTypes {
  card: CardI;
  isFlipped: boolean;
  onClick: (id: number) => void;
}

const Card: React.FC<PropsTypes> = ({ card, isFlipped, onClick }) => {
  return (
    <div
      onClick={() => onClick(card.id)}
      className="w-full aspect-square group perspective-[1000px] cursor-pointer"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-0" : "rotate-y-180"
        }`}
      >
        <div className="absolute w-full h-full backface-hidden z-10">
          <Image
            className="w-full h-full object-cover object-bottom rounded-xl shadow-2xl border-[5px] border-gray-700"
            src={card.src}
            alt={card.card_id}
            width={300}
            height={300}
          />
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-black rounded-xl text-white">
          <p className="text-xl">?</p>
        </div>
      </div>
    </div>
  );
};

export default Card;



