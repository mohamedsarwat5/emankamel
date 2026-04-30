import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, Printer, UserPlus } from 'lucide-react';

const BusinessCard = () => {
  const primaryColor = "#ADEBB3";

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100"
      >
        {/* Header Section with Profile Image */}
        <div className="relative h-64 bg-slate-900 flex justify-center items-end">
          <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          {/* Wave Decor */}
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,234.7C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative z-10 mb-[-20px] p-1 bg-white rounded-full shadow-lg"
          >
            <img
              src="/path-to-eman-image.jpg" // استبدل بمسار الصورة الحقيقي
              alt="Eman Mohamed"
              className="w-40 h-40 rounded-full object-cover border-4 border-white"
            />
          </motion.div>
        </div>

        {/* Info Section */}
        <div className="pt-12 pb-8 px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Eman Mohamed Kamel</h1>
          <p className="text-gray-500 font-medium mt-1 uppercase tracking-widest text-xs">Help Desk Specialist - Trans IT</p>

          {/* Main Action Buttons */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            {[
              { icon: <Phone size={20}/>, label: 'Phone' },
              { icon: <Mail size={20}/>, label: 'Email' },
              { icon: <Globe size={20}/>, label: 'Website' }
            ].map((btn, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -3, backgroundColor: primaryColor }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 text-gray-600 transition-colors duration-300 border border-gray-100"
              >
                {btn.icon}
                <span className="text-[10px] mt-1 font-semibold uppercase">{btn.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Contact List */}
        <div className="px-6 pb-8 space-y-4">
          <motion.div variants={itemVariants} className="flex items-center p-4 bg-gray-50 rounded-2xl">
            <div className="p-3 rounded-xl bg-white shadow-sm text-gray-600">
              <Phone size={18} />
            </div>
            <div className="ml-4 text-left">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Mobile</p>
              <p className="text-gray-700 font-semibold">+20 10 30800713</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center p-4 bg-gray-50 rounded-2xl">
            <div className="p-3 rounded-xl bg-white shadow-sm text-gray-600">
              <Printer size={18} />
            </div>
            <div className="ml-4 text-left">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Fax</p>
              <p className="text-gray-700 font-semibold">+202-25792594</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center p-4 bg-gray-50 rounded-2xl">
            <div className="p-3 rounded-xl bg-white shadow-sm text-gray-600">
              <Mail size={18} />
            </div>
            <div className="ml-4 text-left">
              <p className="text-[10px] text-gray-400 font-bold uppercase">Email</p>
              <p className="text-gray-700 font-semibold truncate">eakl@transit.com.eg</p>
            </div>
          </motion.div>
        </div>

        {/* Floating Action Button */}
        <div className="px-6 pb-8">
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 10px 20px -10px #ADEBB3" }}
            whileTap={{ scale: 0.98 }}
            style={{ backgroundColor: primaryColor }}
            className="w-full py-4 rounded-2xl flex items-center justify-center font-bold text-gray-800 shadow-lg transition-all"
          >
            <UserPlus size={20} className="mr-2" />
            Save to Contacts
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BusinessCard;