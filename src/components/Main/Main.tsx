import React from "react";
import styled from "styled-components";
import Skill from "./Skill";
import Introduce from "./Introduce";

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
    color: #9bc4e2;
    font-size: 30px;
    font-weight: 600;
    padding: 3px 2px;
  }

  & p {
    font-size: 16px;
    padding: 3px 2px;

    line-height: 28px;
  }
`;
