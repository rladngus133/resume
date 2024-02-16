import React from "react";
import styled from "styled-components";
import Badge from "../Badge";

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
            <li>
              JavaScript <Badge status="js" />
            </li>
            <li>
              TypeScript <Badge status="ts" />
            </li>
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
            <li>
              jQuery, React <Badge status="jr" />
            </li>
            <li>
              Next.js <Badge status="next" />
            </li>
            <li>
              SCSS, Styled-Components <Badge status="css" />
            </li>
            <li>
              axios, TanStack-Query <Badge status="api" />
            </li>
            <li>
              Framer-Motion <Badge status="framer" />
            </li>
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
            <li>
              LeaderShip <Badge status="leaderShip" />
            </li>
            <li>
              Communication <Badge status="communication" />
            </li>
            <li>
              Teamwork <Badge status="teamwork" />
            </li>
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
