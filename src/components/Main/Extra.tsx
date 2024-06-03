import styled from "styled-components";
import ExtraDescription from "./ExtraDescription";
import Title from "../Common/Title";

export default function Extra() {
  return (
    <>
      <Title>
        Extra<span>.</span>
      </Title>
      <Container>
        <ExtraDescription listNum={1} title="- Soft Skill" />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;
