"use client";
import {
  Bmw,
  Bugatti,
  Chevrolet,
  Lambo,
  Mers,
  Mustang,
  Rolls,
  Tesla,
} from "@/assets";
import Card from "@/components/Card";
import { CardI } from "@/lib/types";
import React, { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [randomCards, setRandomCards] = useState<CardI[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedCardIds, setMatchedCardIds] = useState<string[]>([]);

  const generateRandomCards = (sourceCards: CardI[]) => {
    const shuffled = [...sourceCards]
      .concat(sourceCards.map((c) => ({ ...c, id: c.id + 100 })))
      .sort(() => Math.random() - 0.5);
    setRandomCards(shuffled);
  };

  const cardClickHandler = (id: number) => {
    const clickedCard = randomCards.find((card) => card.id === id);
    if (!clickedCard || selectedCards.includes(id)) return;

    const newSelected = [...selectedCards, id];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      const firstCard = randomCards.find((card) => card.id === first);
      const secondCard = randomCards.find((card) => card.id === second);

      if (firstCard && secondCard && firstCard.card_id === secondCard.card_id) {
        setMatchedCardIds((prev) => [...prev, firstCard.card_id]);
      }

      setTimeout(() => {
        setSelectedCards([]);
      }, 1000);
    }
  };

  useEffect(() => {
    generateRandomCards(cards);
  }, []);

  return (
    <div className="bg-gray-900 h-[800px] flex items-center justify-center">
      <div className="grid grid-cols-4 gap-4 max-w-[600px] w-full">
        {randomCards.map((c) => {
          const isFlipped =
            selectedCards.includes(c.id) || matchedCardIds.includes(c.card_id);
          return (
            <Card
              key={c.id}
              card={c}
              isFlipped={isFlipped}
              onClick={cardClickHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

const cards: CardI[] = [
  { id: 1, src: Bmw, active: false, card_id: "b1" },
  { id: 2, src: Mers, active: false, card_id: "m1" },
  { id: 3, src: Bugatti, active: false, card_id: "a1" },
  { id: 4, src: Tesla, active: false, card_id: "t1" },
  { id: 5, src: Mustang, active: false, card_id: "h1" },
  { id: 6, src: Chevrolet, active: false, card_id: "hy1" },
  { id: 7, src: Lambo, active: false, card_id: "n1" },
  { id: 8, src: Rolls, active: false, card_id: "f1" },
];

export default Page;
