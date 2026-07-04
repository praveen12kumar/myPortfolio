import { useEffect } from "react";
import { motion } from "framer-motion";
import { nav } from "../../utils/constants";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 320, damping: 32 },
  },
  exit: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
};

const listVariants = {
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const Sidebar = ({ setOpen }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpen]);

  return (
    <>
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={() => setOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[110]"
      />
      <motion.div
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-0 right-0 h-dvh w-[80%] max-w-sm bg-surface/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-[120] flex flex-col"
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-full text-gray-300 hover:bg-white/10 transition-colors duration-300"
          >
            <RxCross1 className="text-xl" />
          </button>
        </div>

        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1 px-8 mt-6 list-none"
        >
          {nav.map((item) => (
            <motion.li key={item} variants={itemVariants}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                duration={600}
                onClick={() => setOpen(false)}
                className="block text-3xl font-display uppercase py-3 text-gray-100 hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-auto p-8">
          <div className="accent-bar" />
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
