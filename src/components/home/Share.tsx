import React from "react";
import Image from "next/image";
import arrow from "/public/svgs/arrow_down.svg";
import Magnetic from "@/lib/Magnetic";
import Facebook from "/public/svgs/sns/Facebook.svg";
import Instagram from "/public/svgs/sns/Instagram.svg";
import X from "/public/svgs/sns/X.svg";
import LinkedIn from "/public/svgs/sns/LinkedIn.svg";
import Copy from "/public/svgs/sns/Copy.svg";
import Happy from "/public/svgs/sns/happy.svg";
import Happy2 from "/public/svgs/sns/happy2.svg";

const shareCircleStyle =
  "relative items-start group h-120 w-120 bg-shareBtn rounded-full md:h-160 md:w-160 ml-[-10px] flex pt-10 justify-center hover:bg-shareBtnFocus transition-all";
const circleTextStyle =
  "group-hover:translate-y-70 md:group-hover:translate-y-100 transition-all group-hover:hidden";
const iconStyle =
  "hidden group-hover:block group-hover:opacity-1 absolute top-41 w-35 md:top-57 md:w-45";

function Share() {
  return (
    <div className="mx-auto flex flex-col items-center py-80">
      <Image priority src={arrow} alt="arrow_down" />
      <p className="font-questrial text-[48px] text-center leading-[58px] md:text-[89px] md:leading-[96px] pt-80 md:pt-200">
        Share <br className="block md:hidden" />
        to everyone
      </p>
      <div className="font-questrial pt-30 md:flex md:mt-80 md:gap-[-10px]">
        <Magnetic>
          <div className={shareCircleStyle}>
            <Image priority src={X} alt="X" className={iconStyle} />
            <span className={circleTextStyle}>X</span>
          </div>
        </Magnetic>
        <Magnetic>
          <div className={shareCircleStyle}>
            <Image
              priority
              src={Instagram}
              alt="Instagram"
              className={iconStyle}
            />
            <span className={circleTextStyle}>Instagram</span>
          </div>
        </Magnetic>
        <Magnetic>
          <div className={shareCircleStyle}>
            <Image
              priority
              src={Facebook}
              alt="Facebook"
              className={iconStyle}
            />
            <span className={circleTextStyle}>Facebook</span>
          </div>
        </Magnetic>
        <Magnetic>
          <div className={shareCircleStyle}>
            <Image
              priority
              src={LinkedIn}
              alt="LinkedIn"
              className={iconStyle}
            />
            <span className={circleTextStyle}>LinkedIn</span>
          </div>
        </Magnetic>
        <Magnetic>
          <div className={shareCircleStyle}>
            <Image priority src={Copy} alt="Copy" className={iconStyle} />
            <span className={circleTextStyle}>Copy</span>
          </div>
        </Magnetic>
        <Magnetic>
          <div className={shareCircleStyle}>
            <Image priority src={Happy} alt="Happy" className={iconStyle} />
            <span className={circleTextStyle}>Thank you</span>
          </div>
        </Magnetic>
        <Magnetic>
          <div className={shareCircleStyle}>
            <Image priority src={Happy2} alt="Happy2" className={iconStyle} />
            <span className={circleTextStyle}>All</span>
          </div>
        </Magnetic>
      </div>
    </div>
  );
}

export default Share;
