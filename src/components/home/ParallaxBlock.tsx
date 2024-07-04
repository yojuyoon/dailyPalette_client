import React from "react";
import clsx from "clsx";
import { Parallax, useParallax } from "react-scroll-parallax";

function ParallaxBlock() {
  const itemsStyle =
    "absolute bg-gradient-to-b rounded-full h-145 w-40 md:w-60";
  const textStyle = "absolute text-[22px] font-semibold";

  const parallax = useParallax({
    onProgressChange: (progress) => {
      if (parallax.ref.current) {
        // set progress to CSS variable
        parallax.ref.current.style.setProperty(
          "--progress",
          progress.toString()
        );
      }
    },
  });

  return (
    <>
      <div className="relative mt-40 font-spaceGrotes h-screen md:mt-80">
        <Parallax speed={5}>
          <div
            className={clsx(itemsStyle, "from-[#063836] top-10 md:left-[10%]")}
          ></div>
        </Parallax>
        <div className={clsx(textStyle, "top-60 left-75 md:left-[40%]")}>
          happy
        </div>
        <Parallax speed={-3}>
          <div
            className={clsx(
              itemsStyle,
              "from-[#E87D60] top-20 md:left-[50%] left-160"
            )}
          />
        </Parallax>
        <Parallax speed={3}>
          <div className={clsx(textStyle, "top-110 right-75 md:right-[30%]")}>
            pleasant
          </div>
        </Parallax>
        <div
          className={clsx(
            itemsStyle,
            "from-[#2B4673] top-0 right-10 md:right-[10%]"
          )}
        />
        <Parallax speed={-5}>
          <div className={clsx(textStyle, "top-200 left-105 md:left-[35%]")}>
            moody
          </div>
        </Parallax>
        <Parallax speed={3}>
          <div
            className={clsx(
              itemsStyle,
              "from-[#FF5E02] top-160 left-60 md:left-[25%]"
            )}
          />
        </Parallax>
        <div className={clsx(textStyle, "top-260 right-45 md:right-[25%]")}>
          cloudy
        </div>
        <Parallax speed={5}>
          <div
            className={clsx(
              itemsStyle,
              "from-[#606A2F] top-240 left-200 md:left-[60%]"
            )}
          />
        </Parallax>
        <div className={clsx(textStyle, "top-430 right-11 md:left-[45%]")}>
          bright
        </div>
        <Parallax speed={3}>
          <div
            className={clsx(
              itemsStyle,
              "from-[#7F241D] top-380 right-30 md:right-[13%]"
            )}
          />
        </Parallax>
        <div className={clsx(textStyle, "top-320 left-45 md:left-[15%]")}>
          sunless
        </div>
        <Parallax speed={-5}>
          <div
            className={clsx(
              itemsStyle,
              "from-[#505E9F] top-370 left-95 md:left-[30%]"
            )}
          />
        </Parallax>
        <div
          className={clsx(
            itemsStyle,
            "from-[#FF5E02] md:from-[#DBA972] top-520 left-25 md:left-[10%]"
          )}
        />
        <div className={clsx(textStyle, "top-570 left-105 md:left-[70%]")}>
          cozy
        </div>
        <Parallax speed={7}>
          <div
            className={clsx(
              itemsStyle,
              "from-[#ECBAA8] top-550 left-200 md:left-[57%]"
            )}
          />
        </Parallax>
        <div
          className={clsx(
            itemsStyle,
            "from-[#AAC6AF] top-600 right-30 md:right-[20%]"
          )}
        />
        <div className={clsx(textStyle, "top-690 right-105 md:right-[12%]")}>
          clam
        </div>
        <Parallax speed={-5}>
          <div
            className={clsx(
              itemsStyle,
              "from-[#E7A23B] top-640 left-95 md:left-[30%]"
            )}
          />
        </Parallax>
        <div className={clsx(textStyle, "top-790 left-55 md:left-[40%]")}>
          energetic
        </div>
        <Parallax speed={2}>
          <div
            className={clsx(
              itemsStyle,
              "from-[#6CACE4] top-770 right-140 md:right-[30%]"
            )}
          />
        </Parallax>
      </div>
      <Parallax
        translateY={["100px", "0px"]}
        scale={[0.7, 1]}
        easing="easeInQuad"
      >
        <div
          className="font-questrial text-[56px] text-center leading-[58px] md:text-[89px] md:leading-[96px] mt-250 pb-80 md:mt-180"
          ref={parallax.ref as React.RefObject<HTMLDivElement>}
          style={{ strokeWidth: `calc(20px * var(--progress))` }}
        >
          Express yourself with vibrant entries.
        </div>
      </Parallax>
    </>
  );
}

export default ParallaxBlock;
