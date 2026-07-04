import { motion } from "framer-motion";
import SocialMedia from "../socialMedia/SocialMedia";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 py-12 px-4">
        <SocialMedia className="flex-row" iconClassName="w-5 h-5 md:w-6 md:h-6" />
        <div className="accent-bar" />
        <p className="text-sm font-source-sans-3 text-gray-500">
          &copy; {year} Praveen Kumar. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
