import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

interface Props {
  title: string;
  listNum: number;
}

export default function ExtraDescription({ title, listNum }: Props) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Title
        onClick={() => setIsShow(!isShow)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        {title} {isShow ? <FaChevronUp /> : <FaChevronDown />}
      </Title>
      {isShow && listNum === 1 && (
        <>
          <Description initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p>
              쏠비치 호텔&리조트의 업무를 끝낸후 앞으로 어떤걸 해야할지에 대하여 많은 고민을 하였습니다. 그러다 문득
              중학생시절부터 좋아했던 ' 컴퓨터 ' 에 관련된 직종을 해보는건 어떨까? 싶었습니다. (살면서 첫 프로그래밍은
              중학생 2학년때 C언어를 잠깐 독학해본적이 있습니다.)
            </p>
            <p>
              고민보다는 실천해보고 결정하는 성격으로 2023년 1월부터 본격적으로 개발에 관한 많은 자료 그리고 업무를
              찾아봤던것 같습니다. 프론트엔드, 백엔드, 보안, AI, 데브옵스 등등... 이때 가장 관심가는 분야는 프론트엔드
              였습니다. 어찌보면 고등학생때 배웠던 디자인과 관련된 분야이며 눈에 직관적으로 바로바로 보이고 지금
              이용하고 있는 유튜브,네이버 등등의 웹사이트를 내 손으로 구현한다. 라는점이 매우 흥미로웠습니다. 그리하여
              2023.01 ~ 2023.06 동안 HTML,CSS,JS,React를 독학 하였으며 독학중 React에서 많은 부분이 막혀 부트캠프를 알아
              보던중 그당시 거주하던 강원도 동해시 지역부터 그 근방에는 부트캠프가 전무하다는것을 알았습니다. 물론
              온라인 비대면 수업이라는 선택지도 있었지만 그렇게 자신에게 여유를 주며 학습을 하는것 보단 오프라인으로
              이왕 할거면 확실하게 하고 싶었습니다. 이러한 일념하나로 2023.06 ~ 2023.10 까지는 아르바이트를 통하여 돈을
              모으고 2023.10월에 ' 코드잇 부트캠프 '에 합격을하여 합격소식을 듣고 1주도 안되는시간에 서울로 바로 올라와
              자취를 시작하였습니다.
            </p>
            <p>
              저는 한번 시작한 것은 끝을 봐야하는 성격이며 그 누구보다 열정적으로 해낼수 있다는 자신감에 어떠한 일이
              부여가 된다면 고민보다 실천으로 실천뿐만이 아닌 결과물로 증명을 하는것을 좋아합니다. 위의 사례를 통하여 '
              김우현 ' 이라는 인재에 대하여 한번 더 생각해주시면 감사하겠습니다.
            </p>
          </Description>
        </>
      )}
      {isShow && listNum === 2 && (
        <>
          <Description initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p>
              고등학생때는 막연한 꿈이없이 무언가를 만들어내는것이 좋아서 디자인과에 들어갔던것 같습니다. 대입의 생각이
              별로 없이 빠르게 취업을 하고싶어 대입을 포기하고 취업전선에 뛰어들었으나 잘 풀리지 않았으며 빠르게 군대를
              다녀온후 이런 저런 아르바이트,정규직을 다니며 많이 방황했던것 같습니다.
            </p>
            <p>
              이후 위의 2022.01 ~ 2023.10 란에 작성 한 것 처럼 어릴적부터 관심이있던 개발에 관하여 조금더 집중하고
              제대로 해보자라고 마음먹고 학창시절과 달리 정말 이 직업의 끝을보겠다라는 각오로 항상 고민하고 노력하고
              있습니다.
            </p>
            <p>
              취업부분에 있어 학력이라는것은 상당히 예민한부분이며 ' 고등학교 졸업 ' 이라는 학력은 상당히 저에게
              약점으로 다가 올 수 있다는것을 알고있지만 위의 2022.01 ~ 2023.10 란에 작성한 내용처럼 ' 개발자 ' 하나에만
              집중하며 그 꿈을 이루기위해 한 걸음 한 걸음 내딛고 그 성취가 계속하여 보이는것을 주관적으로도 느끼고
              있기에 예민한 주제일수도 있지만 이렇게 남겨봅니다.
            </p>
          </Description>
        </>
      )}
      {isShow && listNum === 3 && (
        <>
          <Description initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p>주관적으로 우수하다고 생각하는 부분은 Soft Skill 입니다.</p>
            <p>
              호텔&리조트 상황실, 하우스키핑, CS등 각종 업무를 하며 여러가지의 사람들을 만났으며 어떠한 유형에도 대처 할
              수 있는 유연한 소통능력을 길렀으며 이에 대한 근거로는 호텔&리조트 업무당시 고객의 민원에 대하여 저가
              해결한 민원은 후에 재민원 발생률 0% 였으며 CS업무시 해당 지점내 실적1위를 달성하며 실적에 비례한 많은
              민원량에 비해 고객과 판매사의 의견 조율을 깔끔하게 마무리해 후처리(민원 해결을 위하여 고객상담 종류후에
              해야하는 처리들)가 남들에 비하여 많이 적었던 기억이 있습니다.
            </p>
            <p>
              부트캠프를 진행하며 현재 6달의 기간동안 모든파트(4번)에 팀장을 맡았으며 재가 팀장으로 있었던 팀은
              프로젝트시 개인적인 감정으로인한 트러블이 ' 단 한번도 ' 없었으며 항상 화기애애한 분위기속에 열정적으로
              프로젝트 진행을 했습니다.
            </p>
            <p>
              이러한 점을 바탕으로 개인적으로 생각하는 강점은 Soft Skill 인 것 같으며 개발자란 직군또한 혼자 하는것이
              아닌 팀원, 디자이너, 백엔드개발자와 협업을 하는 ' 팀구조 ' 의 직군이며 이때 성공적인 프로젝트의 완성을
              위해서는 배려와 소통이 무엇보다 중요하다는것을 알고있습니다.
            </p>
            <img src={`${process.env.PUBLIC_URL}/images/review1.png`} alt="review1" />
            <img src={`${process.env.PUBLIC_URL}/images/review2.png`} alt="review2" />
          </Description>
        </>
      )}
    </>
  );
}

const Title = styled(motion.div)`
  @keyframes moveY {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 300;
  font-size: 18px;
  cursor: pointer;
  padding-bottom: 10px;

  &:hover {
    opacity: 0.8;

    & svg {
      animation: moveY 1s infinite;
    }
  }

  @media all and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Description = styled(motion.div)`
  border-top: 1px solid #ccc;
  padding: 10px;

  & img {
    width: 100%;
  }
`;
