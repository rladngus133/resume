import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import ModalPortal from "../Modal/Portal";
import Modal from "../Modal/Modal";

export default function Project() {
  const [isModal, setIsModal] = useState(false);
  const [projectInfo, setProjectInfo] = useState("");

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        Project<span>.</span>
      </motion.h2>
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: "all" }}
      >
        <Card
          style={{ backgroundColor: "#A64EFF" }}
          whileHover={{ scale: 0.95, opacity: 0.8 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsModal(true);
            setProjectInfo("rolling");
          }}
        >
          <motion.img src={`${process.env.PUBLIC_URL}/images/Rolling.svg`} alt="Rolling_Logo" />
        </Card>
        <Card
          style={{ backgroundColor: "#5534DA" }}
          whileHover={{ scale: 0.95, opacity: 0.8 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsModal(true);
            setProjectInfo("taskify");
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/images/Taskify.svg`} alt="Taskify_Logo" />
        </Card>
        <Card style={{ backgroundColor: "#ccc", cursor: "default" }}>
          <span>...</span>
        </Card>
      </Container>
      <ModalPortal>{isModal && <Modal onClick={setIsModal} projectInfo={projectInfo} />}</ModalPortal>
    </>
  );
}

const Container = styled(motion.div)`
  display: flex;

  gap: 20px;
  padding: 20px;
`;

const Card = styled(motion.div)`
  position: relative;
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & img {
    width: 50%;
    pointer-events: none;
  }

  & span {
    position: absolute;
    pointer-events: none;
    top: 10%;
    color: white;
    font-size: 48px;

    @media all and (max-width: 768px) {
      top: -30%;
    }
  }

  @media all and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
