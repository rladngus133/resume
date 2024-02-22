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
