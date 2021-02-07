const Section = ({ dark, children }) => {
  const background = dark ? "dark" : "light";
  return (
    <div className={`section ${background}`}>
      <div className="text-wrapper">{children}</div>
    </div>
  );
};

export default Section;
