import Section from "../components/section.js";
import { react as Content } from "../content/seminars.md";

const Seminars = () => {
  return (
    <div className="wrapper">
      <Section>
        <Content />
      </Section>
    </div>
  );
};

export default Seminars;
