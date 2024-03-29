import React, { useState } from "react";
import styled from "styled-components";
import SkillInfoCard from "./SkillInfoCard";

interface Props {
  status: string;
}

export default function Badge({ status }: Props) {
  const [isCard, setIsCard] = useState(false);

  return (
    <>
      <StyledBadge onMouseEnter={() => setIsCard(true)} onMouseLeave={() => setIsCard(false)}>
        ? {isCard ? <SkillInfoCard status={status} /> : ""}
      </StyledBadge>
    </>
  );
}

const StyledBadge = styled.div`
  position: relative;
  display: inline-block;
  color: white;
  font-weight: 500;
  font-size: 15px;
  background-color: gray;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  text-align: center;
  cursor: pointer;
`;
