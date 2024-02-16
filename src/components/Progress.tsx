import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

export default function Progress() {
  const [width, setWidth] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setWidth(0);
      return;
    }

    const windowHeight: number = scrollHeight - clientHeight;

    const currentPercent: number = scrollTop / windowHeight;

    setWidth(currentPercent * 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <Container ref={progressRef}>
      <ScrollProgress style={{ width: width + "%" }}></ScrollProgress>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 6px;
  background-color: #ccc;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const ScrollProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #3f2b96 0%, #a8c0ff 100%);
`;
