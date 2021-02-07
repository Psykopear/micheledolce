import Section from "../components/section.js";
import { react as Content } from "../content/teaching.md";

const Teaching = () => {
  return (
    <div className="wrapper">
      <Section>
        <Content />
      </Section>
    </div>
  );
};

export default Teaching;
