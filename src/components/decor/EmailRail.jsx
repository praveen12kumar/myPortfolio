import { contactInfo } from "../../utils/constants";

const EmailRail = () => {
  return (
    <a
      href={`mailto:${contactInfo.email_address}`}
      className="hidden lg:flex fixed left-6 top-1/2 z-[90] items-center text-xs uppercase tracking-[0.3em] text-gray-500 hover:text-accent transition-colors duration-300"
      style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
    >
      {contactInfo.email_address}
    </a>
  );
};

export default EmailRail;
