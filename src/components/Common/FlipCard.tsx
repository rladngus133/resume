import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

export default function FlipCard() {
  const [flip, setFlip] = useState(false);

  return (
    <Card onClick={() => setFlip((prevState) => !prevState)}>
      <InnerCard initial={{ rotateY: 0 }} animate={{ rotateY: flip ? 180 : 0 }} transition={{ duration: 0.7 }}>
        <FrontImg src={`${process.env.PUBLIC_URL}/images/profile.jpeg`} alt="프로필이미지" />
        <BackImg src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="아바타이미지" />
      </InnerCard>
    </Card>
  );
}

const Card = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  @media all and (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const InnerCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
`;

const FrontImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

const BackImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
`;
