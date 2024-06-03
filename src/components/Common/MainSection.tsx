import React, { ReactNode } from "react";
import styled from "styled-components";
import { inViewAnimation } from "../../utils/animation";
import { motion } from "framer-motion";

export default function MainSection({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Section {...inViewAnimation}>{children}</Section>
    </Container>
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

const Section = styled(motion.section)`
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
