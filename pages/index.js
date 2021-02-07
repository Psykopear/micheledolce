import Badge from "../components/badge.js";
import Section from "../components/section.js";
import { attributes } from "../content/home/index.md";
import { react as BioContent } from "../content/home/bio.md";
import { react as ContactsContent } from "../content/home/contacts.md";
import { react as ResearchContent } from "../content/home/research.md";

export default function Home() {
  const { title, description, email, links, photo } = attributes;
  return (
    <>
      <Badge
        title={title}
        description={description}
        email={email}
        links={links}
        photo={photo}
      />
      <div className="wrapper">
        <Section>
          <BioContent />
        </Section>
        <Section dark>
          <ResearchContent />
        </Section>
        <Section>
          <ContactsContent />
        </Section>
      </div>
    </>
  );
}
