import styled from "styled-components";
import { IoLink } from "react-icons/io5";
import { motion } from "framer-motion";

export default function ProjectSection({ setIsModal, setProjectInfo, title, date, sideTitle, descriptionList }: any) {
  const lowerCaseTitle = title.toLowerCase();

  return (
    <Container>
      <BorderLeft>
        <TitleContainer>
          <Title>
            <h3>📌 {title}</h3>
            <span>( {date} )</span>
            {title === "Resume" ? (
              ""
            ) : (
              <Link
                onClick={() => {
                  setIsModal(true);
                  setProjectInfo(lowerCaseTitle);
                }}
                whileHover={{ backgroundColor: "#00CCFF", scale: 0.95 }}
              >
                <IoLink color="white" />
              </Link>
            )}
          </Title>
          <p>{sideTitle}</p>
        </TitleContainer>
        <OL>
          {descriptionList.map((item: any) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </OL>
      </BorderLeft>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const BorderLeft = styled.div`
  border-left: 5px solid black;
  padding-left: 20px;
`;

const TitleContainer = styled.div`
  & p {
    font-size: 16px;
    color: gray;

    @media all and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  & h3 {
    font-size: 24px;
    font-weight: 500;

    @media all and (max-width: 768px) {
      font-size: 20px;
    }
  }

  & span {
    font-size: 12px;
    color: gray;

    @media all and (max-width: 768px) {
      font-size: 10px;
    }
  }
`;

const OL = styled.ol`
  list-style: inside;

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

const Link = styled(motion.button)`
  display: flex;
  padding: 3px 10px;
  background-color: gray;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  & svg {
    fill: white;
  }
`;
