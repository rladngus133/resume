import React, { ReactNode } from "react";
import styled from "styled-components";

export default function BaseContainer({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.header`
  max-width: 1140px;
  margin: 0 auto;
  padding-inline: 15px;

  @media all and (max-width: 768px) {
    padding-inline: 5px;
  }
`;
