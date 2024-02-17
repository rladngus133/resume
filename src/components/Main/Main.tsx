import React from "react";
import styled from "styled-components";
import Skill from "./Skill";
import Introduce from "./Introduce";
import Experience from "./Experience";
import Project from "./Project";

export default function Main() {
  return (
    <>
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
          <Experience />
        </Section>
      </Container>
    </>
  );
}

const Container = styled.main`
  display: flex;
  gap: 10px;
  padding: 45px 0;
  border-bottom: 1px solid #eee;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  & H2 {
    color: black;
    font-size: 50px;
    font-weight: 500;
    padding: 3px 2px;

    & > span {
      color: red;
    }
  }

  & p {
    font-size: 16px;
    padding: 3px 2px;
    font-weight: 100;
    line-height: 28px;
  }
`;
