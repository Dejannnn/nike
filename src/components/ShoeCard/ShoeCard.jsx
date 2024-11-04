import React from "react";

const ShoeCard = ({ imageUrl, thumbnail, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imageUrl) {
      changeBigShoeImage(imageUrl);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imageUrl
       ? 'border-coral-red' : 'border-transparent' } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          className="object-contain"
          src={thumbnail}
          alt={thumbnail}
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
