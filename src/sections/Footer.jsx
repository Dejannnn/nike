import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} height={46} width={150} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term a your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((media) => {
              return (
                <div
                  key={media.alt}
                  className="flex justify-center items-center w-12 h-12 rounded-full bg-white"
                >
                  <img src={media.src} alt={media.alt} width={24} height={24} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => {
            return (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => {
                    return (
                      <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                        <a href={link.src}>{link.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            height={20}
            width={20}
            className="rounded-full m-0"
          />
          <p>Copy righr. ALl right reserver.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
