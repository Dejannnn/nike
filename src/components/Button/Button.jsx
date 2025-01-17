import React from "react";

const Button = ({ label, iconUrl, backgroundColor="bg-coral-red", borderColor="border-coral-red", textColor="text-white", fullWidth="w-full"}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full text-white ${backgroundColor} ${borderColor} ${textColor} ${fullWidth}`}>
      {label}
      {iconUrl && <img src={iconUrl} className="ml-2 rounded-full w-5 h-5" alt="arrow right icon" />} 
    </button>
  );
};

export default Button;
