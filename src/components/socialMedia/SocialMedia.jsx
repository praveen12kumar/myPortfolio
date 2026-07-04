import { motion } from "framer-motion";
import { socialMediaLinks } from "../../utils/constants";

const SocialMedia = ({ className = "", iconClassName = "w-6 h-6" }) => {
  return (
    <div className={`flex ${className} items-center justify-center gap-5`}>
      {socialMediaLinks.map((link, index) => (
        <motion.a
          href={link.href}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="text-gray-500 hover:text-accent transition-colors duration-300"
        >
          <link.icon className={iconClassName} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMedia;
