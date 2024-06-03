import { HTMLMotionProps, motion } from "framer-motion";
import styled from "styled-components";
import { ReactNode } from "react";

export default function Title({ children, ...props }: { children: ReactNode } & HTMLMotionProps<"h2">) {
  return <H2 {...props}>{children}</H2>;
}

const H2 = styled(motion.h2)`
  color: black;
  font-size: 50px;
  font-weight: 500;
  padding: 3px 2px;

  & span {
    color: red;
  }
`;
