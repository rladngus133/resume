import React from "react";
import styled from "styled-components";
import Skill from "./Skill";
import Introduce from "./Introduce";
import Experience from "./Experience";
import Project from "./Project";
import Education from "./Education";
import Extra from "./Extra";

export default function Main() {
  return (
    <>
      <main>
        <Container>
          <Section>
            <Introduce />
          </Section>
        </Container>
        <Container>
          <Section>
            <Skill />
          </Section>
        </Container>
        <Container>
          <Section>
            <Project />
          </Section>
        </Container>
        <Container>
          <Section>
            <Education />
          </Section>
        </Container>
        <Container>
          <Section>
            <Experience />
          </Section>
        </Container>
        <Container>
          <Section>
            <Extra />
          </Section>
        </Container>
      </main>
    </>
  );
}

const Container = styled.div`
  display: flex;
  padding: 45px 0;
  border-bottom: 1px solid #eee;

  @media all and (max-width: 768px) {
    padding: 20px 0;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  & p {
    font-size: 16px;
    padding: 3px 2px;
    font-weight: 100;
    line-height: 28px;

    @media all and (max-width: 768px) {
      font-size: 12px;
      padding: 0;
      line-height: 20px;
    }
  }
`;
