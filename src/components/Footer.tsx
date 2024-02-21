import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Contatiner>
      <i>
        김우현 - <a href="mailto:rladngus133@naver.com">rladngus133@naver.com</a> - References on request
      </i>
    </Contatiner>
  );
}

const Contatiner = styled.div`
  margin-top: 45px;
  margin-bottom: 20px;
  text-align: end;

  @media all and (max-width: 768px) {
    font-size: 12px;
  }
`;
