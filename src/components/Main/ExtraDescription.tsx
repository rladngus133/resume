import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { inViewAnimation } from "../../utils/animation";

interface Props {
  title: string;
  listNum: number;
}

export default function ExtraDescription({ title, listNum }: Props) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Title onClick={() => setIsShow(!isShow)} {...inViewAnimation}>
        {title} {isShow ? <FaChevronUp /> : <FaChevronDown />}
      </Title>
      {isShow && listNum === 1 && (
        <>
          <Description initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p>주관적으로 우수하다고 생각하는 부분은 Soft Skill 입니다.</p>
            <p>
              호텔&리조트 상황실, 하우스키핑, CS등 각종 업무를 하며 여러가지의 사람들을 만났으며 어떠한 유형에도 대처 할
              수 있는 유연한 소통능력을 길렀으며 이에 대한 근거로는 호텔&리조트 업무당시 고객의 민원에 대하여 저가
              해결한 민원은 후에 재민원 발생률 0% 였으며 CS업무시 해당 지점내 실적1위를 달성하며 실적에 비례한 많은
              민원량에 비해 고객과 판매사의 의견 조율을 깔끔하게 마무리해 후처리(민원 해결을 위하여 고객상담 종류후에
              해야하는 처리들)가 팀원에 비하여 많이 적었던 기억이 있습니다.
            </p>
            <p>
              부트캠프를 진행하며 현재 6달의 기간동안 모든파트(4번)에 팀장을 맡았으며 항상 프로젝트시 개인적인
              감정으로인한 트러블이 없도록 원만한 커뮤니케이션을 위해 항상 노력하였고 그러한 노력으로 전반적으로
              화기애애한 팀의 분위기를 유지했으며 기술적인 트러블 발생시에도 원만한 합의를 위해 팀원들의 의견을 잘
              조율하여 최선의 결과물을 낼수있도록 노력했습니다.
            </p>
            <p>
              이러한 점을 바탕으로 개인적으로 생각하는 강점은 Soft Skill 인 것 같으며 개발자란 직군또한 혼자 하는것이
              아닌 팀원, 디자이너, 백엔드개발자와 협업을 하는 여러사람과의 소통이 중요한 직군이며 이때 성공적인
              프로젝트의 완성을 위해서는 배려와 소통이 무엇보다 중요하다는것을 알고있습니다.
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
