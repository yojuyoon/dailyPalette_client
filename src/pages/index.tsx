import Footer from "@/components/Footer";
import MainBannerBlock from "@/components/home/MainBannerBlock";
import Nav from "@/components/Nav";
import ParallaxBlock from "@/components/home/ParallaxBlock";
import Image from "next/image";
import arrow from "../../public/svgs/arrow_down.svg";
import Loading from "@/components/Loading";

const shareCircleStyle =
  "h-120 w-120 bg-shareBtn rounded-full md:h-160 md:w-160 ml-[-10px] flex pt-10 justify-center";
const circleTextStyle = "absolute";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="px-12 py-10 md:px-40 md:py-50">
        <MainBannerBlock />
        <ParallaxBlock />
        <div className="mx-auto flex flex-col items-center py-80">
          <Image priority src={arrow} alt="arrow_down" />
          <p className="font-questrial text-[48px] text-center leading-[58px] md:text-[89px] md:leading-[96px] pt-80 md:pt-200">
            Share <br className="block md:hidden" />
            to everyone
          </p>
          <div className="md:flex md:mt-80 md:gap-[-10px]">
            <div className={shareCircleStyle}>
              <span>Twitter</span>
            </div>
            <div className={shareCircleStyle}>
              <span>Instagram</span>
            </div>
            <div className={shareCircleStyle}>
              <span>Facebook</span>
            </div>
            <div className={shareCircleStyle}>
              <span>LinkedIn</span>
            </div>
            <div className={shareCircleStyle}>
              <span>Copy</span>
            </div>
            <div className={shareCircleStyle}>
              <span>Thank you</span>
            </div>
            <div className={shareCircleStyle}>
              <span>All</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
