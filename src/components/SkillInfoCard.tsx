import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props {
  status: string;
}

interface Content {
  [key: string]: string;
}

export default function SkillInfoCard({ status }: Props) {
  const content: Content = {
    js: "기본적인 문법부터 es6의 문법까지 능숙하게 사용이 가능합니다.",
    ts: "기본적인 타입명시와 interface,as 를 사용한 타입명시가 가능하지만 아직 미숙합니다.",
    jr: "제이쿼리, 리액트를 사용하여 능숙한 웹구현 및 코드작성이 가능합니다.",
    next: "Next.js를 사용한 SSG,SSR구현이 가능하며 페이지라우터 사용에 능숙합니다.",
    css: "SCSS, Styled-Components를 능숙하게 사용가능합니다.",
    api: "axios를 통한 서버통신에 익숙하며 TanStack/Query 를 사용한 CRUD구현 경험이 있습니다.",
    framer: "Framer-Motion 을 사용한 인터렉티브 웹사이트 구현이 가능합니다.",
    leaderShip: `부트캠프 진행과정 모든 파트의 팀장을 맡았으며 팀원간의 불화가 단 한 번도 없었습니다. 
    또한 피어리뷰를 통한 확인시 팀원들의 만족도 또한 높았습니다.`,
    communication: "성인이 된 후 각종 서비스직을 경험해보며 여러유형에 대응가능한 커뮤니케이션 능력을 만들었습니다.",
    teamwork:
      "위의 커뮤니케이션 내용을 토대로 어떤 유형의 팀과도 유연하게 어울릴수 있으며 트러블이 있을시 항상 중간의 입장에서 유연한 대처를 해왔습니다.",
  };

  return (
    <StyledModal initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Arrow />
      <p>{content[status]}</p>
    </StyledModal>
  );
}

const Arrow = styled.div`
  position: absolute;
  left: -13px;
  border-bottom: 8px solid transparent;
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid #222222;
`;

const StyledModal = styled(motion.div)`
  background-color: #222222;
  width: 350px;
  text-align: left;
  position: absolute;
  padding: 10px;
  border-radius: 5px;
  left: 25px;
  top: -10px;
  z-index: 2;

  & p {
    font-size: 12px;
    line-height: 1.5;
  }
`;
