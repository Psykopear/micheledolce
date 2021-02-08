import React, { useState } from "react";
import Link from "next/link";
import FluidAnimation from "react-fluid-animation";

import Section from "../components/section";
import OptionalUrl from "../components/optionalUrl";
import Journal from "../components/journal";
import { attributes, react as Content } from "../content/research.md";

const animationConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005,
};

const Research = () => {
  const { papers } = attributes;
  const [simulation, setSimulation] = useState(false);
  return (
    <div className="wrapper">
      <Section>
        <>
          <Content />
          <ol reversed>
            {papers.map((p) => (
              <li key={p.title}>
                {p.author}
                <i> {p.title}</i> ({p.year})
                {", "}<Journal journal={p.journal} />
                {p.publisher && (
                  <>
                    {", "}<OptionalUrl data={p.publisher} />
                  </>
                )}
                <br />
                {p.links.map((l) => (
                  <span key={l.url}>
                    <Link href={l.url}>{l.name}</Link>
                    <br />
                  </span>
                ))}{" "}
              </li>
            ))}
          </ol>
        </>
      </Section>
      <Section dark>
        {simulation ? (
          <>
            <h3>Click and drag the mouse around</h3>
            <FluidAnimation
              config={animationConfig}
              style={{ height: "500px" }}
            />
          </>
        ) : (
          <div onClick={() => setSimulation(true)} style={{ height: "500px" }}>
            <h3>Click to activate fluid simulation</h3>
          </div>
        )}
      </Section>
    </div>
  );
};

export default Research;
