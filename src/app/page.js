import { AboutUs } from "@/components/AboutUs";
import { AnimateScroll } from "@/components/AnimateScroll";
import { Banner } from "@/components/Banner";
import { Contact } from "@/components/Contact";
import { Services } from "@/components/Services";
import { VM } from "@/components/VM";
import { WhyUs } from "@/components/Why";

export const metadata = {
  title: "Layanan Perizinan & Alat Kesehatan - PT Elka Mitra Sejahtera",
  description: "PT Elka Mitra Sejahtera menyediakan layanan perizinan untuk klinik, laboratorium, apotek, dan alat kesehatan laboratorium. Kami membantu proses perizinan yang mudah, aman, dan terpercaya.",
  keywords: "izin klinik utama, izin klinik pratama, izin laboratorium, izin apotek, alat kesehatan laboratorium, perizinan kesehatan, PT Elka Mitra Sejahtera",
  image: "/images/healthcare-license.jpg", // Path ke gambar terkait layanan kesehatan
  url: "https://www.elkamitrasejahtera.co.id",
  author: "PT Elka Mitra Sejahtera",
  siteName: "PT Elka Mitra Sejahtera",
  type: "website",
  robots: "index, follow",
  locale: "id_ID",
  openGraph: {
      type: "website",
      url: "https://www.elkamitrasejahtera.co.id",
      title: "Layanan Perizinan & Alat Kesehatan - PT Elka Mitra Sejahtera",
      description: "Menyediakan layanan perizinan klinik dan laboratorium yang terpercaya, serta alat kesehatan berkualitas. Proses mudah, cepat, dan aman.",
      image: {
          url: "https://www.elkamitrasejahtera.co.id/images/healthcare-license.jpg",
          alt: "PT Elka Mitra Sejahtera - Layanan Perizinan & Alat Kesehatan"
      }
  },
  twitter: {
      handle: "@elkamitrasejahtera",
      site: "@elkamitrasejahtera",
      cardType: "summary_large_image",
  },
  structuredData: {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "PT Elka Mitra Sejahtera",
      url: "https://www.elkamitrasejahtera.co.id",
      logo: "https://www.elkamitrasejahtera.co.id/logo.png",
      sameAs: [
          "https://www.instagram.com/elkamitrasejahtera/?utm_source=ig_web_button_share_sheet",
          "https://www.facebook.com/elkamitrasejahtera",
          "https://api.whatsapp.com/send?phone=6281298902220"
      ]
  }
};

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