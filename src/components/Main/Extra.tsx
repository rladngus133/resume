import styled from "styled-components";
import ExtraDescription from "./ExtraDescription";
import { motion } from "framer-motion";

export default function Extra() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        Extra<span>.</span>
      </motion.h2>
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
