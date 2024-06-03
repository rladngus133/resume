import Title from "../Common/Title";
import ExperienceSection from "../Common/ExperienceSection";
import { experiences } from "../../utils/experienceDataMockup";

export default function Experience() {
  return (
    <>
      <Title>
        Experience<span>.</span>
      </Title>
      {experiences.jobExperience.map((item) => (
        <ExperienceSection key={item.id} {...item} />
      ))}
    </>
  );
}
