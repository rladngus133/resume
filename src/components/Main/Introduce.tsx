import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export default function Introduce() {
  return (
    <>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
        Introduce<span>.</span>
      </motion.h2>
      <Container initial={{ opacity: 0, y: 20 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
        <p>
          2022년부터 프론트엔드 개발을 독학하며 2023년 10월경부터 부트캠프를 통해 개발 세상에 한 걸음 내딛은 프론트엔드
          개발자 김우현입니다. 언제나 유저 친화적인 <mark>UX</mark>를 고려한 인터렉티브한 웹사이트 구축을 위해 고민하고
          있습니다.
        </p>
        <br />
        <p>
          기본적인 <mark>HTML</mark> , <mark>CSS</mark> , <mark>JS</mark> 등을 준수하게 다룰 수 있으며{" "}
          <mark>React</mark> , <mark>Next.js</mark> , <mark>axios</mark> , <mark>TanStack/Query</mark> ,{" "}
          <mark>Framer-Motion</mark>등 많은 라이브러리에 대한 관심이 많으며 사용하는 것을 주저하지 않는 편입니다. 다만
          항상 중요하게 생각 하는 것은 해당 프레임워크, 라이브러리를 사용하였을 때 <b>'유행'</b>혹은 <b>'최신'</b>
          기술이라 사용하는 것이 아닌 그 기술이 <b>'왜?'</b> 필요한가 <b>'왜?'</b> 이 프로젝트에 적용이 되었는가를
          초점으로 사용하는 것을 지향합니다.
        </p>
        <br />
        <p>
          웹사이트 개발이란 결국 사용자에게 제공되는 <b>'접근성'</b>이 가장 중요하다고 생각하고 있습니다. 웹사이트란
          개발툴 안에서만 다뤄지는게아닌 결국 <b>'소비자'</b>에게 제공되는 <b>하나의 상품</b>이라고 생각하며 '접근성'이
          뛰어난 웹사이트는 '소비자'에게 좋은 경험을주며 재방문을 유도합니다. 이러한 점을 바탕으로 인터렉티브한 디자인에
          관심이 많으며 최근에는 <mark>Framer-motion</mark>을 통한 유연한 애니메이션 구현에 관심이 많습니다. 그리고
          인터렉티브 디자인외에도 성능최적화도 굉장히 중요한 포인트라고 생각하며 항상 이 점을 생각하고 학습하며 노력하고
          있습니다.
        </p>
      </Container>
    </>
  );
}

const Container = styled(motion.div)`
  padding: 20px;
`;
