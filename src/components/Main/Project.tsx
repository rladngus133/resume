import React, { useState } from "react";
import ModalPortal from "../Modal/Portal";
import Modal from "../Modal/Modal";
import Title from "../Common/Title";
import ProjectSection from "../Common/ProjectSection";
import { projects } from "../../utils/projectDataMockup";

export default function Project() {
  const [isModal, setIsModal] = useState(false);
  const [projectInfo, setProjectInfo] = useState("");

  return (
    <>
      <Title>
        Project<span>.</span>
      </Title>
      {projects.map((item) => (
        <ProjectSection key={item.id} setIsModal={setIsModal} setProjectInfo={setProjectInfo} {...item} />
      ))}

      <ModalPortal>{isModal && <Modal onClick={setIsModal} projectInfo={projectInfo} />}</ModalPortal>
    </>
  );
}
