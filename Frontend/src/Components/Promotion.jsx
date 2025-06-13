import React from "react";
import PromotionCard from "./PromotionCard";

export default function Promotion() {
  const promotions = [
    {
      title: "Tasty Thursdays",
      percentage: 20,
      image: "https://themewagon.github.io/feane/images/o1.jpg",
    },
    {
      title: "Pizza Days",
      percentage: 15,
      image: "https://themewagon.github.io/feane/images/o2.jpg",
    },
  ];
  return (
    <div className="flex justify-center items-center pt-24 h-[500px] gap-8 z-10">
      {promotions.map((promotion, index) => {
        return (
          <PromotionCard
            key={index}
            title={promotion.title}
            percentage={promotion.percentage}
            image={promotion.image}
          ></PromotionCard>
        );
      })}
    </div>
  );
}
