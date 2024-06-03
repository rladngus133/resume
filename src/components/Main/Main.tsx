import React from "react";
import MainSection from "../Common/MainSection";
import Introduce from "./Introduce";
import Skill from "./Skill";
import Project from "./Project";
import Education from "./Education";
import Experience from "./Experience";
import Extra from "./Extra";

const sections = [
  { id: 1, component: <Introduce /> },
  { id: 2, component: <Skill /> },
  { id: 3, component: <Project /> },
  { id: 4, component: <Education /> },
  { id: 5, component: <Experience /> },
  { id: 6, component: <Extra /> },
];

export default function Main() {
  return (
    <>
      <main>
        {sections.map((section) => (
          <MainSection key={section.id}>{section.component}</MainSection>
        ))}
      </main>
    </>
  );
}
