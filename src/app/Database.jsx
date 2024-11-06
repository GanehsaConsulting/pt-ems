import { GoGoal } from "react-icons/go";
import { FaHandSparkles, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
export const NavbarLinks = [
    {
        href: "tentang-kami",
        label: "Tentang Kami",
    },
    {
        href: "visi-misi",
        label: "Visi & Misi",
    },
    {
        href: "layanan",
        label: "Layanan",
    },
    {
        href: "keunggulan",
        label: "keunggulan",
    },
    {
        href: "kontak",
        label: "Kontak",
    }

];

export const companyProfile = {
    companyInfo: {
        name: "PT Bumi Jaya Tambang",
        logoUrl: "https://www.example.com/logo.png",
        description: "PT Elka Mitra Sejahtera siap menjadi mitra Anda dalam pengurusan perizinan usaha di bidang kesehatan, memastikan proses yang cepat dan sesuai regulasi. Kami juga menyediakan peralatan laboratorium berkualitas tinggi, sesuai standar keamanan nasional dan internasional, untuk mendukung pelayanan kesehatan Anda secara optimal.",
        slogan: "Menambang dengan Hati, Membangun Masa Depan",
    },
    services: [
        {
            name: "Izin Klinik Utama",
            img: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Layanan perizinan untuk Klinik Utama yang menyediakan layanan kesehatan spesialistik dengan standar tinggi, memastikan operasional yang aman dan sesuai aturan.",
        },
        {
            name: "Izin Klinik Pratama",
            img: "https://images.unsplash.com/photo-1512677859289-868722942457?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Layanan perizinan untuk Klinik Pratama, memastikan klinik Anda memenuhi persyaratan untuk pelayanan kesehatan dasar yang sah dan sesuai regulasi.",
        },
        {
            name: "Izin Laboratorium",
            img: "https://images.unsplash.com/photo-1618053448492-2b629c2c912c?q=80&w=2811&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Layanan perizinan untuk laboratorium kesehatan, memastikan fasilitas Anda memenuhi persyaratan hukum dan standar kualitas nasional.",
        },
        {
            name: "Izin Apotek",
            img: "https://images.unsplash.com/photo-1637000289497-f5d424b696a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Dukungan dalam pengurusan izin apotek, membantu Anda memenuhi regulasi dan standar operasional apotek sesuai ketentuan.",
        },
        {
            name: "Jual Beli Alat Kesehatan Laboratorium",
            img: "https://images.unsplash.com/photo-1614308456595-a59d48697ea8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Menyediakan alat-alat kesehatan laboratorium berkualitas yang telah teruji klinis, mendukung kebutuhan medis Anda dengan standar keamanan yang tinggi.",
        },
    ],
    contact: {
        address: "Jl. Pertambangan No. 123, Jakarta Selatan, Indonesia",
        phone: "+62 812-3456-7890",
        email: "info@bumijayatambang.co.id",
        mapEmbedUrl: "https://maps.google.com/embed?pb=!1m18!1m12...",
    },
    socialMedia: {
        instagram: "https://www.instagram.com/bumijayatambang",
        facebook: "https://www.facebook.com/bumijayatambang",
        linkedin: "https://www.linkedin.com/company/bumijayatambang",
        youtube: "https://www.youtube.com/channel/bumijayatambang",
    },
    callToAction: {
        contactFormUrl: "https://www.example.com/contact",
        ctaText: "Hubungi Kami untuk Kemitraan dan Layanan Tambang",
    },
};

export const visionData = "Menjadi penyedia layanan perizinan dan distributor alat kesehatan yang terbaik dan terpercaya yang memberikan solusi inovatif serta kepuasan bagi pelanggan.";

export const missionData = [
    "Menghasilkan jasa pelayanan dibidangnya yang berkualitas, cepat dan sesuai peraturan yang berlaku.",
    "Memprioritaskan kepuasan dan hubungan baik dengan pelanggan.",
    "Menghadirkan produk alat kesehatan laboratorium yang terpercaya dan telah teruji secara klinis, sesuai dengan standar keamanan dan regulasi nasional maupun internasional.",
];

export const whyUsData = [
    {
      icon: <FaHandSparkles />,
      title: "Proses mudah dan cepat",
      description: "Layanan perizinan dan alat kesehatan yang efisien, tanpa kerumitan."
    },
    {
      icon: <GoGoal />,
      title: "Aman dan terpercaya",
      description: "Layanan sesuai regulasi dengan keamanan terjamin."
    },
    {
      icon: <RiTeamFill />,
      title: "Berpengalaman",
      description: "Tim profesional berpengalaman siap membantu kebutuhan Anda."
    },
    {
      icon: <MdHealthAndSafety />,
      title: "Keamanan data terjamin",
      description: "Tim profesional berpengalaman siap membantu kebutuhan Anda."
    }
];

export const contactData = [
    {
        name: "Instagram",
        icon: <FaInstagram/>,
        un: "@elkamitrasejahtera",
        link: "https://www.instagram.com/elkamitrasejahtera/?utm_source=ig_web_button_share_sheet",
    },
    {
        name: "WhatsApp",
        icon: <FaWhatsapp/>,
        un: "Elka Mitra Sejahtera",
        link: "https://api.whatsapp.com/send?phone=6281298902220",
    },
    {
        name: "Email",
        icon: <MdMailOutline/>,
        un: "elkamitra.group@gmail.com",
        link: "mailto:elkamitra.group@gmail.com",
    },
]