import React from "react";
import styled from "styled-components";

export default function Project() {
  return (
    <div>
      <h2>
        Project<span>.</span>
      </h2>
      <Container>
        <a href="https://2-2-1-rolling.netlify.app/">
          <Card style={{ backgroundColor: "#A64EFF" }}>
            <img src={`${process.env.PUBLIC_URL}/images/Rolling.svg`} alt="Rolling_Logo" />
          </Card>
        </a>
        <a href="https://project-cf3j.vercel.app/">
          <Card style={{ backgroundColor: "#5534DA" }}>
            <img src={`${process.env.PUBLIC_URL}/images/Taskify.svg`} alt="Taskify_Logo" />
          </Card>
        </a>
        <Card style={{ backgroundColor: "#ccc" }}>
          <span>...</span>
        </Card>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;

  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  & img {
    width: 50%;
  }

  & span {
    position: absolute;
    pointer-events: none;
    top: 10%;
    color: white;
    font-size: 48px;
  }
`;
