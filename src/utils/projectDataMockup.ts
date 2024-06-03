/* 
  id : {number}
  title : 다녔던 곳의 이름 
  date : 기간 "ㅇㅇㅇㅇ.ㅇㅇ ~ ㅇㅇㅇㅇ.ㅇㅇ" 식으로 표기
  sideTitle : 프로젝트 한 줄 소개
  descriptionList : 그곳에서 달성한 내용들을 표기 {id : number , description : 내용 }
  url : { link , github , retrospect }
*/

import { TProjects } from "./types";

export const projects: TProjects = [
  {
    id: 1,
    title: "Resume",
    date: "2024.04",
    sideTitle: "Resume은 개인이력서 페이지 입니다.",
    descriptionList: [
      { id: 1, description: "자기소개를 핵심가치관을 주제로 작성" },
      { id: 2, description: "각 기술에 대한 주관적인 평가작성" },
      { id: 3, description: "개발직종외 전 직장들의 경력서술 및 Extra-Point 작성" },
    ],
  },
  {
    id: 2,
    title: "MogaZoa",
    date: "2024.02 ~ 04",
    sideTitle: "MogaZoa는 각 상품을 비교 할 수 있는 서비스입니다.",
    descriptionList: [
      { id: 1, description: "컴포넌트 분리기준으로 아토믹디자인 패턴 도입 및 Atoms단위의 Input 컴포넌트 구현" },
      { id: 2, description: "인증/인가 관련 (로그인,로그아웃,회원가입 등) 모든 레이아웃 및 페이지 구현" },
      { id: 3, description: "인증/인가 관련 모든 플로우(로그인,로그아웃,회원가입 등) 구축 및 기능구현" },
      { id: 4, description: "카카오톡 OAuth 로그인 구현" },
      {
        id: 5,
        description:
          "팀장직을 맡으며 코드리뷰문화 도입 및 원활한 코드리뷰를 위한 깃협업전략으로 깃허브플로우 전략 도입",
      },
    ],
  },
  {
    id: 3,
    title: "Taskify",
    date: "2024.01 ~ 02",
    sideTitle: "Taskify는 일정관리를 할 수 있는 서비스입니다.",
    descriptionList: [
      { id: 1, description: "모든 페이지의 컴포넌트 애니메이션 담당" },
      {
        id: 2,
        description:
          "컴포넌트 및 페이지로 렌딩페이지('/) 및 새로운-대시보드 페이지 제작 및 나의-대시보드 , 할-일-생성 일부 컴포넌트 담당",
      },
      { id: 3, description: "TanStack/Query + Next.js 를 사용하여 SSR 환경 구축" },
      { id: 4, description: "나의-대시보드('/mydashboard') 페이지의 무한스크롤 및 페이지네이션 구현" },
      { id: 5, description: "TanStack/Query 의 뮤테이션을 사용한 실시간 데이터 업데이트 구현" },
      { id: 6, description: "팀장직을 맡으며 전체적인 일정조율 및 셀프코드리뷰문화 형성" },
    ],
  },
  {
    id: 4,
    title: "Rolling",
    date: "2023.12",
    sideTitle: "Rolling는 익명의 롤링페이퍼 서비스입니다.",
    descriptionList: [
      { id: 1, description: "모든 페이지의 컴포넌트 애니메이션 담당" },
      { id: 2, description: "모든 페이지의 스켈레톤 Ui 제작" },
      { id: 3, description: "컴포넌트 및 페이지로 네브바 및 렌딩페이지('/') 제작" },
      { id: 4, description: "모든 부분에 적용가능한 Post Api 관련 코드구축" },
      { id: 5, description: "팀장직을 맡으며 전체적인 일정조율 및 셀프코드리뷰문화 형성" },
    ],
  },
];
