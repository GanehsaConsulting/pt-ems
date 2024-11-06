import "./globals.css";
import { Mulish } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import { FloatingButton } from "@/components/FloatingBtn";

export const metadata = {
  title: "PT Elka Mitra Sejahtera",
  description: "Dapatkan solusi lengkap dan profesional dalam pengurusan izin usaha kesehatan. Kami hadir untuk memberikan panduan terbaik agar proses izin Anda lebih mudah dan terpercaya.",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const quicksand = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="icon.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.className} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
