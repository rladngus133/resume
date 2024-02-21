import styled from "styled-components";
import ExtraDescription from "./ExtraDescription";

export default function Extra() {
  return (
    <>
      <h2>
        Extra<span>.</span>
      </h2>
      <Container>
        <ExtraDescription listNum={1} title="- 2022.01 ~ 2023.10 까지의 공백" />
        <ExtraDescription listNum={2} title="- 고등학교졸업" />
        <ExtraDescription listNum={3} title="- Soft Skill" />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
