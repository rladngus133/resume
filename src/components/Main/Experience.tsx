import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function Experience() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        Experience<span>.</span>
      </motion.h2>
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        <CareerInfoContainer>
          <h3>코드잇 부트캠프</h3>
          <p>2023.10.17~</p>
        </CareerInfoContainer>
        <JobInfoContainer>
          <h3>Front-End Bootcamp</h3>
          <OL>
            <li>HTML & CSS & JS 등 기본적인 개념 학습</li>
            <li>React & Next.js & TypeScript등 라이브러리,프레임워크,슈퍼셋 학습</li>
            <li>Next.js를 통한 서버사이드렌더링 구현가능 및 프로젝트를 통한 트러블슈팅 해결경험</li>
            <li>React-Query, Framer-Motion, Axios등 학습외의 부분 독학학습</li>
          </OL>
        </JobInfoContainer>
      </Container>
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        <CareerInfoContainer>
          <h3>쏠비치 호텔&리조트(삼척)</h3>
          <p>2022.01.03 ~ 2022.12.18</p>
        </CareerInfoContainer>
        <JobInfoContainer>
          <h3>Housekeeping & Situational Support</h3>
          <OL>
            <li>기본적인 하우스키핑 업무</li>
            <li>고객불편사항 해결 및 후처리</li>
            <li>가구,가전등 호텔&리조트내 모든 재고관리 및 최신화, 보수</li>
            <li>여러유형의 사람들을 겪으며 상황대처능력 및 커뮤니케이션 능력의 향상</li>
          </OL>
        </JobInfoContainer>
      </Container>
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        <CareerInfoContainer>
          <h3>트랜스코스모스 코리아</h3>
          <p>2021.04.14 ~ 2021.09.10</p>
        </CareerInfoContainer>
        <JobInfoContainer>
          <h3>Customer Service & Customer Satisfaction</h3>
          <OL>
            <li>고객상담 및 민원, 불편요소등 해결</li>
            <li>여러유형의 사람들을 겪으며 상황대처능력 및 커뮤니케이션 능력의 향상</li>
          </OL>
        </JobInfoContainer>
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

const CareerInfoContainer = styled.div`
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
    padding-bottom: 5px;
    border-right: none;
    border-bottom: 1px solid #ccc;
    width: auto;
    align-items: start;
  }
`;

const JobInfoContainer = styled.div`
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
    padding-top: 5px;
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
