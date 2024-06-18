import React from "react";
import Image from "next/image";
import arrow from "../../../public/svgs/arrow_down.svg";

function MainBannerBlock() {
  return (
    <div className="relative h-100svh flex flex-col items-center justify-center">
      <div className="font-questrial items-center flex flex-col mx-auto">
        <div className="z-10 flex flex-col items-center">
          <h1 className="text-[48px] text-center leading-[58px] md:text-[89px] md:leading-[96px] md:pt-0">
            Add color <br />
            to your daily <br />
            journaling.
          </h1>
          <p className="text-pretty text-center pt-20 leading-[28px] md:max-w-[960px] text-[16px]">
            Unleash your creativity and capture your daily thoughts with our
            innovative journaling app. Whether you{"'"}re reflecting on the day
            {"'"}s events, tracking your goals, or simply expressing your
            emotions, our app provides a beautiful and intuitive platform to
            make your journaling experience truly unique.
          </p>
          <div className="absolute bottom-0 md:hidden rounded-full h-100 w-100 bg-bgPrimary blur-md opacity-80" />
          <button className="absolute bottom-40 md:bottom-60 md:hover:animate-bounce">
            <Image priority src={arrow} alt="arrow_down" />
          </button>
        </div>
      </div>

      <div className="inset-0 flex-col md:flex md:flex-row absolute top-10 md:top-0 w-full">
        <div className="bg-bgColor1 h-[37%] md:w-[80%] md:h-600 rounded-br-[60px] rounded-bl-[60px] origin-top animate-resizingBottom md:rounded-tr-[80px] md:rounded-br-[80px] md:origin-left md:animate-resizingRight" />
        <div className="bg-bgColor2 h-[27%] md:w-[60%] md:h-600 rounded-br-[60px] rounded-bl-[60px] origin-bottom animate-resizingTop md:rounded-tr-[80px] md:rounded-br-[80px] md:origin-right md:animate-resizingLeft" />
        <div className="bg-bgColor2 h-[17%] md:w-[40%] md:h-600 rounded-[60px] origin-top animate-resizingTop md:rounded-[80px] md:origin-left md:animate-resizingLeft" />
        <div className="bg-bgColor3 h-[12%] md:w-[50%] md:h-600 rounded-tr-[60px] rounded-tl-[60px] origin-bottom animate-resizingBottomSmall md:rounded-tl-[70px] md:rounded-bl-[70px] md:origin-right md:animate-resizingLeftSmall" />
      </div>
    </div>
  );
}

export default MainBannerBlock;
