import { motion, spring } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

export default function ToggleButton({ handleTheme }: { handleTheme: () => void }) {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <Container
      isOn={isOn}
      onClick={() => {
        toggleSwitch();
        handleTheme();
      }}
    >
      <Handle layout transition={spring} />
    </Container>
  );
}

const Container = styled.div<{ isOn: boolean }>`
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 45px;
  background-color: #bbb;
  display: flex;
  justify-content: ${({ isOn }) => (isOn ? "flex-end" : "flex-start")};
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
`;

const Handle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.bgColor};
  border-radius: 50%;
`;
