import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <IMG src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="프로필이미지" />
      <SideContainer>
        <h1>
          안녕하세요, <br />
          프론트엔드 개발자 김우현입니다.
        </h1>
        <div>
          <div>
            이메일 : <a href="mailto:rladngus133@naver.com">rladngus133@naver.com</a>
          </div>
          <div>
            전화번호 : <a href="tel:010-3901-5278">010-3901-5278</a>
          </div>
          <div>
            깃허브 : <a href="https://github.com/rladngus133">https://github.com/rladngus133</a>
          </div>
          <div>
            블로그 :{" "}
            <a href="https://wild-curiosity-a84.notion.site/6f0d17154ff84683821afd7a3a7ddd05?v=0a03f6d732cd45d9b5db8be1971e12f7&pvs=4">
              https://www.notion.so/rladngus133
            </a>
          </div>
        </div>
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
    font-weight: 600;
  }
`;

const IMG = styled.img`
  object-fit: cover;

  border-radius: 50%;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
