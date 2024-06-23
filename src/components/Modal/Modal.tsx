import styled from "styled-components";
import { GoProjectRoadmap } from "react-icons/go";
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
    projectInfoUrl: string;
  };
}

const Modal = ({ onClick, projectInfo }: Props) => {
  const content: Content = {
    rolling: {
      url: "https://2-2-1-rolling.netlify.app/",
      githubUrl: "https://github.com/CodeIt-Part2-Team1/FirstProject",
      projectInfoUrl: "https://wild-curiosity-a84.notion.site/Rolling-c1da51da5f444452a6aab17e7c8ce968?pvs=4",
    },
    taskify: {
      url: "https://taskify39.vercel.app/",
      githubUrl: "https://github.com/3-9-taskify/project",
      projectInfoUrl: "https://wild-curiosity-a84.notion.site/Taskify-b5de2da1af45493f80ee43b613ecba47?pvs=4",
    },
    mogazoa: {
      url: "https://mogazoa4-2.vercel.app/",
      githubUrl: "https://github.com/3-9-taskify/project",
      projectInfoUrl: "https://wild-curiosity-a84.notion.site/MogaZoa-c6382a89e8f547cd9557c3d32bae776a?pvs=4",
    },
  };

  const { url, githubUrl, projectInfoUrl } = content[projectInfo];

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
            <GoProjectRoadmap />
            <a href={projectInfoUrl}>
              <span>프로젝트회고</span>
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
  padding: 10px 20px;
`;

const BackBtn = styled(motion.button)`
  height: 10%;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  color: gray;
  cursor: pointer;

  @media all and (max-width: 768px) {
    font-size: 10px;
  }
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

    @media all and (max-width: 768px) {
      gap: 10px;
    }
  }

  @media all and (max-width: 768px) {
    font-size: 10px;
  }
`;
