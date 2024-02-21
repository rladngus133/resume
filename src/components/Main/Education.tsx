import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function Education() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        Eduaction<span>.</span>
      </motion.h2>
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        <EducationInfoContainer>
          <h3>동해상업고등학교</h3>
          <p>2015.03 ~ 2018.01</p>
        </EducationInfoContainer>
        <EducationDetailedInfoContainer>
          <h3>광고디자인과</h3>
          <OL>
            <li>Photoshop, Illustrator등 학습</li>
            <li>보기좋은 UI,UX를 보는 시야를 학습함</li>
            <li>GTQ(Graphic Technology Qualification) 1급, 컴퓨터그래픽스운용기능사등 자격증취득</li>
          </OL>
        </EducationDetailedInfoContainer>
      </Container>
    </>
  );
}

const Container = styled(motion.div)`
  display: flex;
  padding: 20px;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

const EducationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;
  width: 30%;
  border-right: 1px solid #ccc;

  & h3 {
    font-size: 24px;
    font-weight: 500;

    @media all and (max-width: 768px) {
      font-size: 20px;
    }
  }

  & p {
    font-weight: 100;
    color: gray;
  }

  @media all and (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #ccc;
    width: auto;
    align-items: start;
  }
`;

const EducationDetailedInfoContainer = styled.div`
  padding-left: 20px;

  & h3 {
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    color: gray;

    @media all and (max-width: 768px) {
      display: none;
    }
  }

  @media all and (max-width: 768px) {
    padding-left: 0;
  }
`;

const OL = styled.ol`
  list-style: inside;
  padding: 20px 0 0 20px;

  & li {
    font-weight: 100;
    margin-top: 10px;

    @media all and (max-width: 768px) {
      margin-top: 5px;
    }
  }

  @media all and (max-width: 768px) {
    padding: 0;
    font-size: 12px;
  }
`;
