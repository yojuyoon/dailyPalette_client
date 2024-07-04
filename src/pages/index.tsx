import Footer from "@/components/Footer";
import MainBannerBlock from "@/components/home/MainBannerBlock";
import Nav from "@/components/Nav";
import ParallaxBlock from "@/components/home/ParallaxBlock";
import Share from "@/components/home/Share";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="px-12 py-10 md:px-40 md:py-50">
        <MainBannerBlock />
        <ParallaxBlock />
        <Share />
      </main>
      <Footer />
    </>
  );
}
