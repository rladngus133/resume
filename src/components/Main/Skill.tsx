import React from "react";
import styled from "styled-components";

export default function Skill() {
  return (
    <>
      <h2>
        Skill<span>.</span>
      </h2>
      <Container>
        <h3>Languages</h3>
        <RightContainer>
          <OL>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </OL>
        </RightContainer>
      </Container>
      <Container>
        <h3>
          Frameworks &<br />
          Libraries
        </h3>
        <RightContainer>
          <OL>
            <li>jQuery, React</li>
            <li>Next.js</li>
            <li>SCSS, Styled-Components</li>
            <li>axios, TanStack-Query</li>
            <li>Framer-Motion</li>
          </OL>
        </RightContainer>
      </Container>
      <Container>
        <h3>Tools & IDEs</h3>
        <RightContainer>
          <OL>
            <li>Git& GitHub</li>
            <li>VS Code</li>
          </OL>
        </RightContainer>
      </Container>
      <Container>
        <h3>Soft Skill</h3>
        <RightContainer>
          <OL>
            <li>LeaderShip</li>
            <li>Communication</li>
            <li>Teamwork</li>
          </OL>
        </RightContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  align-items: center;

  & h3 {
    color: gray;
    width: 25%;
    font-size: 24px;
    font-weight: 500;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OL = styled.ol`
  list-style: inside;

  & li {
    font-weight: 100;
    margin: 10px 0;
  }
`;
