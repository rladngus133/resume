type TExperienceDescription = {
  id: number;
  description: string;
};

export type TExperience = {
  id?: number;
  title: string;
  date: string;
  sideTitle?: string;
  descriptionList: TExperienceDescription[];
};

export type TExperiences = {
  educaction: TExperience[];
  jobExperience: TExperience[];
};
