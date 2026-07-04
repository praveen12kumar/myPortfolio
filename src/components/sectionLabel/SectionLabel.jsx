const SectionLabel = ({ children }) => {
  return (
    <p className="eyebrow-label">
      <span className="text-accent text-base leading-none">✳</span>
      {children}
    </p>
  );
};

export default SectionLabel;
