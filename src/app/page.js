import { AboutUs } from "@/components/AboutUs";
import { AnimateScroll } from "@/components/AnimateScroll";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contact";
import { Services } from "@/components/Services";
import { VM } from "@/components/VM";
import { WhyUs } from "@/components/Why";

export default function Home() {

  return (
    <>
      <Banner />

      {/* Tambahkan id ke komponen yang ditargetkan */}
      <div id="tentang-kami">
        <AnimateScroll animation={'animate__fadeInUp'}>
          <AboutUs />
        </AnimateScroll>
      </div>

      <div id="visi-misi">
        <AnimateScroll animation={'animate__fadeInUp'}>
          <VM />
        </AnimateScroll>
      </div>

      <div id="layanan">
        <AnimateScroll animation={'animate__fadeInUp'}>
          <Services />
        </AnimateScroll>
      </div>

      <div id="keunggulan">
        <AnimateScroll animation={'animate__fadeInUp'}>
          <WhyUs />
        </AnimateScroll>
      </div>

      <div id="kontak">
        <AnimateScroll animation={'animate__fadeInUp'}>
          <Contact />
        </AnimateScroll>
      </div>
    </>
  );
}