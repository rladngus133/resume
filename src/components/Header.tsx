import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaBlog } from "react-icons/fa6";

export default function Header() {
  return (
    <Container>
      <IMG src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="프로필이미지" />
      <SideContainer>
        <h1>
          안녕하세요, <br />
          프론트엔드 개발자 김우현입니다<span>.</span>
        </h1>
        <InfoContainer>
          <InfoItemContainer>
            <MdEmail /> <a href="mailto:rladngus133@naver.com">rladngus133@naver.com</a>
          </InfoItemContainer>
          <InfoItemContainer>
            <IoCall /> <a href="tel:010-3901-5278">010-3901-5278</a>
          </InfoItemContainer>
          <InfoItemContainer>
            <FaGithub /> <a href="https://github.com/rladngus133">https://github.com/rladngus133</a>
          </InfoItemContainer>
          <InfoItemContainer>
            <FaBlog /> {""}
            <a href="https://wild-curiosity-a84.notion.site/6f0d17154ff84683821afd7a3a7ddd05?v=0a03f6d732cd45d9b5db8be1971e12f7&pvs=4">
              https://www.notion.so/rladngus133
            </a>
          </InfoItemContainer>
        </InfoContainer>
      </SideContainer>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  gap: 10px;
  padding: 45px 0;
  border-bottom: 1px solid #eee;

  & h1 {
    font-size: 32px;
    line-height: 1.1;
    font-weight: 500;

    & > span {
      color: red;
    }
  }

  @media all and (max-width: 768px) {
    & h1 {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

const IMG = styled.img`
  width: 15%;

  @media all and (max-width: 768px) {
    width: 110px;
  }
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoItemContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media all and (max-width: 768px) {
    gap: 5px;

    & a {
      font-size: 12px;
    }
  }
`;
