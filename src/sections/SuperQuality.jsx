import React from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-start max-lg:flex-col gap-10 w-fill max-container "
    >
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg">
            We provide you
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red"> Quality </span> Shoees
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Discover stylish Nike arrivas, quality comfort and inoation for your
            active life.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and experience ensuers your satisfaction
          </p>
        </div>
        <div className="mt-11">
          <Button label="View now" iconUrl={arrowRight} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe 8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;
