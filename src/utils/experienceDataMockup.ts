/* 
  id : {number}
  title : 다녔던 곳의 이름 
  date : 기간 "ㅇㅇㅇㅇ.ㅇㅇ ~ ㅇㅇㅇㅇ.ㅇㅇ" 식으로 표기
  sideTitle : 과 , 부서등의 이름 
  descriptionList : 그곳에서 달성한 내용들을 표기 {id : number , description : 내용 }
*/

import { TExperiences } from "./types";

export const experiences: TExperiences = {
  educaction: [
    {
      id: 1,
      title: "동해상업고등학교",
      date: "2015.03 ~ 2018.01",
      sideTitle: "광고디자인과",
      descriptionList: [
        { id: 1, description: "Photoshop, Illustrator등 학습" },
        { id: 2, description: "보기좋은 UI,UX를 보는 시야학습" },
        { id: 3, description: "GTQ(Graphic Technology Qualification) 1급, 컴퓨터그래픽스운용기능사등 자격증취득" },
      ],
    },
  ],
  jobExperience: [
    {
      id: 1,
      title: "코드잇 부트캠프",
      date: "2023.10 ~ 2024.04",
      sideTitle: "Front-End Bootcamp",
      descriptionList: [
        {
          id: 1,
          description:
            "HTML , CSS , JS(es6) 등 기본적은 프론트엔드 기술들을 학습하였으며 React, Next.js 등 대부분의 현업에서 사용되는 라이브러리, 프레임워크 학습",
        },
        { id: 2, description: "4번의 팀활동을 하며 ' 전체 ' 팀장직을 맡았으며 3번의 팀 프로젝트 진행" },
        {
          id: 3,
          description:
            "프로젝트를 진행하며 Styled-Component, Tailwind , SCSS 등 CSS전처리기 및 라이브러리 실습 및 프로젝트 적용",
        },
        {
          id: 4,
          description:
            "프로젝트를 진행하며 Axios , TanStack/Query , Framer-Motion , React-hook-form 등 React관련 라이브러리 실습 및 프로젝트 적용",
        },
      ],
    },
    {
      id: 2,
      title: "쏠비치 호텔&리조트(삼척)",
      date: "2022.01 ~ 2022.12",
      sideTitle: "Housekeeping & Situational Support",
      descriptionList: [
        { id: 1, description: "고객불편사항 해결 및 후처리" },
        { id: 2, description: "가구,가전등 호텔&리조트내 모든 재고관리 및 최신화, 보수" },
        { id: 3, description: "여러유형의 사람들을 겪으며 상황대처능력 및 커뮤니케이션 능력의 향상" },
      ],
    },
    {
      id: 3,
      title: "트랜스코스모스 코리아",
      date: "2021.04 ~ 2021.09",
      sideTitle: "Customer Service Representative",
      descriptionList: [
        { id: 1, description: "고객상담 및 민원, 불편요소등 해결" },
        { id: 2, description: "여러유형의 사람들을 겪으며 상황대처능력 및 커뮤니케이션 능력의 향상" },
      ],
    },
  ],
};
