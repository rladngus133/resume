import { experiences } from "../../utils/experienceDataMockup";
import ExperienceSection from "../Common/ExperienceSection";
import Title from "../Common/Title";

export default function Education() {
  return (
    <>
      <Title>
        Eduaction<span>.</span>
      </Title>
      {experiences.educaction.map((item) => (
        <ExperienceSection key={item.id} {...item} />
      ))}
    </>
  );
}
