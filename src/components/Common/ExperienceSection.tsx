import React from "react";
import styled from "styled-components";
import { TExperience } from "../../utils/types";

export default function ExperienceSection({ title, date, sideTitle, descriptionList }: TExperience) {
  return (
    <Container>
      <LeftSide>
        <h3>{title}</h3>
        <p>{date}</p>
      </LeftSide>
      <RightSide>
        <h3>{sideTitle}</h3>
        <OL>
          {descriptionList.map((item) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </OL>
      </RightSide>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 20px;

  @media all and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 20px;
  width: 30%;
  border-right: 1px solid #ccc;

  & h3 {
    font-size: 24px;
    font-weight: 500;

    @media all and (max-width: 768px) {
      font-size: 20px;
    }
  }

  & p {
    font-weight: 100;
    color: gray;
  }

  @media all and (max-width: 768px) {
    padding-bottom: 5px;
    border-right: none;
    border-bottom: 1px solid #ccc;
    width: auto;
    align-items: start;
  }
`;

const RightSide = styled.div`
  padding-left: 20px;
  line-height: 20px;
  max-width: 60%;

  & h3 {
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    color: gray;

    @media all and (max-width: 768px) {
      display: none;
    }
  }

  @media all and (max-width: 768px) {
    max-width: 100%;
    padding-left: 0;
    padding-top: 5px;
  }
`;

const OL = styled.ol`
  list-style: inside;
  padding: 20px 0 0 20px;

  & li {
    font-weight: 100;
    margin-top: 10px;

    @media all and (max-width: 768px) {
      margin-top: 5px;
    }
  }

  @media all and (max-width: 768px) {
    padding: 0;
    font-size: 12px;
  }
`;
