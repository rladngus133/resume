import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

interface Props {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  projectInfo: string;
}

interface Content {
  [key: string]: {
    url: string;
    githubUrl: string;
  };
}

const Modal = ({ onClick, projectInfo }: Props) => {
  const content: Content = {
    rolling: {
      url: "https://2-2-1-rolling.netlify.app/",
      githubUrl: "https://github.com/CodeIt-Part2-Team1/FirstProject",
    },
    taskify: {
      url: "https://project-cf3j.vercel.app/",
      githubUrl: "https://github.com/3-9-taskify/project",
    },
  };

  const { url, githubUrl } = content[projectInfo];

  return (
    <>
      <Container>
        <BackBtn
          onClick={() => onClick(false)}
          animate={{ x: [0, -1, 0] }}
          transition={{ repeat: Infinity, ease: "easeInOut", duration: 1 }}
        >
          <IoMdArrowRoundBack />
          <span>뒤로가기</span>
        </BackBtn>
        <LinkContainer>
          <div>
            <FaLink />
            <a href={url}>
              <span>Link</span>
            </a>
          </div>
          <div>
            <FaGithub />
            <a href={githubUrl}>
              <span>GitHub</span>
            </a>
          </div>
        </LinkContainer>
      </Container>
      <Background onClick={() => onClick(false)} />
    </>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  left: 0;
  top: 0;
`;

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 100px;
  font-weight: 100;
  background-color: white;
  border-radius: 15px;
  z-index: 100;
  padding: 10px;
`;

const BackBtn = styled(motion.button)`
  height: 10%;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  color: gray;
  cursor: pointer;
`;

const LinkContainer = styled.div`
  display: flex;
  height: 80%;
  justify-content: space-evenly;
  flex-direction: column;
  padding-left: 15px;
  border-left: 1px solid #ccc;

  & div {
    display: flex;
    gap: 15px;
  }
`;
