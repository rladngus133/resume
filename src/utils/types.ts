// ExperienceType

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

// ProjectType

type TProjectDescription = {
  id: number;
  description: string;
};

export type TProject = {
  id?: number;
  title: string;
  sideTitle: string;
  date: string;
  descriptionList: TProjectDescription[];
};

export type TProjects = TProject[];
