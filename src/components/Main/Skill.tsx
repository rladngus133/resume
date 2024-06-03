import React from "react";
import styled from "styled-components";
import Badge from "../Badge";
import { motion } from "framer-motion";
import Title from "../Common/Title";

export default function Skill() {
  return (
    <>
      <Title>
        Skill<span>.</span>
      </Title>
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
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
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        <h3>
          Frameworks &<BR />
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
              SCSS, Styled-Components, Tailwind <Badge status="css" />
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
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        <h3>Tools & IDEs</h3>
        <RightContainer>
          <OL>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>
              figma <Badge status="figma" />
            </li>
          </OL>
        </RightContainer>
      </Container>
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
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

const Container = styled(motion.div)`
  display: flex;
  gap: 30px;
  padding: 20px;
  align-items: center;

  & h3 {
    color: gray;
    width: 25%;
    font-size: 24px;
    font-weight: 500;

    @media all and (max-width: 768px) {
      width: auto;
      font-size: 20px;
    }
  }

  @media all and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 10px 10px 10px;
    gap: 10px;
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

    @media all and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const BR = styled.br`
  @media all and (max-width: 768px) {
    display: none;
  }
`;
