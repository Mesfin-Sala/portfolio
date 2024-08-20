import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to <span className="text-purple">dominate</span> the digital
          world?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:mesfinsala8@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link
                href={`${info.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
  <svg xmlns="" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a2 2 0 01-2.456 0l-2.257-1.128a1 1 0 01-.502-1.21l1.498-4.493A1 1 0 017.28 5H4a2 2 0 01-2-2zm7 12a3 3 0 01-3-3H6a2 2 0 00-2 2v2a2 2 0 002 2h5.07a3 3 0 013 3zm6 0a3 3 0 01-3-3H15a2 2 0 00-2 2v2a2 2 0 002 2h5.07a3 3 0 013 3z" />
  </svg>
  <a href="tel:+15555551212" className="text-gray-600 hover:text-gray-900">
    +251 949417565
  </a>
</div>
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mesfin Sala
        </p>
      </div>
    </footer>
  );
};

export default Footer;
