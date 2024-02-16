import { createGlobalStyle } from "styled-components";
import NotoSansKRThin from "../assets/fonts/NotoSansKR-100.ttf";
import NotoSansKRLight from "../assets/fonts/NotoSansKR-300.ttf";
import NotoSansKRMedium from "../assets/fonts/NotoSansKR-500.ttf";

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
    src:  url(${NotoSansKRThin}) format('ttf');
    font-weight: 100;
    font-style: normal;
  }


  @font-face {
    font-family: 'Noto Sans KR';
    src:  url(${NotoSansKRLight}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src:  url(${NotoSansKRMedium}) format('ttf');
    font-weight: 500;
    font-style: normal;
  }


`;

export default GlobalFont;
