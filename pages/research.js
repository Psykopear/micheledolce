import React, { useState } from "react";
import Link from "next/link";

import Section from "../components/section";
import OptionalUrl from "../components/optionalUrl";
import Journal from "../components/journal";
import { attributes, react as Content } from "../content/research.md";

const Research = () => {
  const { papers } = attributes;
  return (
    <div className="wrapper">
      <Section>
        <>
          <Content />
          <ol reversed>
            {papers.map((p) => (
              <li key={p.title}>
                {p.author}
                <i> {p.title}</i>
                {p.journal && (
                  <>
                    {", "}
                    <Journal journal={p.journal} />
                  </>
                )}
                <span> ({p.year}).</span>
                {p.publisher && (
                  <>
                    {", "}
                    <OptionalUrl data={p.publisher} />
                  </>
                )}
                <br />
                {p.links && p.links.map((l) => (
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
    </div>
  );
};

export default Research;
