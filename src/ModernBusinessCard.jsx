import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, Printer, UserPlus, MapPin } from "lucide-react";
import photo from "/img.webp";

const ModernBusinessCard = () => {
  const primaryColor = "#ADEBB3";

  // 1. تعريف حاوية الأنيميشن (لتنسيق ظهور الأبناء)
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren", // يظهر الأب أولاً
        staggerChildren: 0.1,   // الفرق الزمني بين ظهور كل عنصر والآخر
      },
    },
  };

  // 2. تعريف أنيميشن العناصر الفردية
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const handleSaveContact = () => {
    const contact = {
      name: "Eman Mohamed Kamel",
      phone: "+201030800713",
      email: "eakl@transit.com.eg",
      title: "Help Desk Specialist",
      organization: "Trans IT",
    };

    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:${contact.organization}
TITLE:${contact.title}
TEL;TYPE=CELL:${contact.phone}
EMAIL:${contact.email}
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${contact.name}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center p-4 font-sans overflow-hidden relative">
      {/* Background Animated Blobs */}
      <div
        className="absolute top-[-5%] left-[-5%] w-64 h-64 rounded-full blur-[100px] opacity-40 animate-pulse pointer-events-none"
        style={{ backgroundColor: primaryColor }}
      ></div>
      <div
        className="absolute bottom-[5%] right-[-5%] w-80 h-80 rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{ backgroundColor: primaryColor }}
      ></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-sm w-full bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.07)] overflow-hidden border border-white relative z-10"
      >
        {/* Profile Header */}
        <div className="relative h-48 bg-slate-900 ">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <motion.div
            variants={itemVariants}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 p-1.5 bg-white rounded-full shadow-lg z-50"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-slate-50 bg-slate-100 z-50">
              <img
                src={photo}
                alt="Eman Mohamed"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="pt-16 pb-6 px-6 text-center">
          <motion.h1 variants={itemVariants} className="text-2xl font-bold text-slate-800 tracking-tight">
            Eman Mohamed Kamel
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-500 font-bold mt-1 text-[11px] uppercase tracking-[0.25em]">
            Help Desk Specialist • Trans IT
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center gap-4 mt-8">
            {[
              { Icon: Phone, link: "tel:+201030800713" },
              { Icon: Mail, link: "mailto:eakl@transit.com.eg" },
              { Icon: Globe, link: "https://www.transit.com.eg" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                whileHover={{ y: -4, backgroundColor: primaryColor, color: "#000" }}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 text-slate-500 transition-all duration-200 cursor-pointer"
              >
                <item.Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Info Grid */}
        <div className="px-6 space-y-2.5">
          {[
            { icon: <Phone size={18} />, label: "Mobile", value: "+20 10 30800713", link: "tel:+201030800713" },
            { icon: <Printer size={18} />, label: "Fax", value: "+202-25792594", link: "tel:+20225792594" },
            { icon: <Mail size={18} />, label: "Email", value: "eakl@transit.com.eg", link: "mailto:eakl@transit.com.eg" },
            { icon: <MapPin size={18} />, label: "Address", value: "El Marg, Cairo, Egypt", link: null },
            { icon: <Globe size={18} />, label: "Website", value: "www.transit.com.eg", link: "https://www.transit.com.eg" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-center p-3.5 bg-slate-50/50 rounded-2xl border border-slate-100/50"
            >
              <div className="p-2.5 rounded-xl bg-white text-slate-400 shadow-sm">
                {item.icon}
              </div>
              <div className="ml-4 text-left">
                <span className="block text-[9px] text-slate-400 font-black uppercase tracking-wider">{item.label}</span>
                {item.link ? (
                  <a href={item.link} target={item.label === "Website" ? "_blank" : "_self"} rel="noreferrer">
                    <span className="text-slate-700 font-bold text-sm hover:text-green-600 transition-colors cursor-pointer tracking-tight">
                      {item.value}
                    </span>
                  </a>
                ) : (
                  <span className="text-slate-700 font-bold text-sm tracking-tight cursor-default">{item.value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social & Save */}
        <div className="p-6 pt-8">
          <motion.div variants={itemVariants} className="flex justify-center gap-8 mb-8">
            <motion.a href="https://www.facebook.com/share/1FhD24Lctj/" target="_blank" whileHover={{ scale: 1.2 }} className="text-[#1877F2] text-2xl">
              <i className="fa-brands fa-facebook-f"></i>
            </motion.a>
            <motion.a href="https://wa.me/+201030800713" target="_blank" whileHover={{ scale: 1.2 }} className="text-[#25D366] text-2xl">
              <i className="fa-brands fa-whatsapp"></i>
            </motion.a>
            <motion.a href="https://www.instagram.com/em.akl?igsh=Nzd4M21pYm4yZWxp" target="_blank" whileHover={{ scale: 1.2 }} className="text-[#E4405F] text-2xl">
              <i className="fa-brands fa-instagram"></i>
            </motion.a>
          </motion.div>

          <motion.button
            variants={itemVariants}
            onClick={handleSaveContact}
            whileHover={{ scale: 1.02, boxShadow: `0 20px 40px -12px ${primaryColor}88` }}
            whileTap={{ scale: 0.98 }}
            style={{ backgroundColor: primaryColor }}
            className="w-full py-4 rounded-2xl flex items-center justify-center font-black text-slate-900 shadow-lg shadow-[#adebb3/30] transition-all cursor-pointer"
          >
            <UserPlus size={20} className="mr-2" strokeWidth={3} />
            SAVE CONTACT
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ModernBusinessCard;