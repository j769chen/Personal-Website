import * as React from "react";

import styled, { keyframes } from "styled-components";
import { fadeIn, fadeInUp, fadeInLeft } from "react-animations";

const fadeUpAnim = keyframes`${fadeInUp}`;
const fadeAnim = keyframes`${fadeIn}`;

const TitleAnimation = styled.h1`
  animation: 1.5s ${fadeAnim};
`;

const SubTitleAnimation = styled.p`
  animation: 2.5s ${fadeAnim};
`;

const HeadshotAnimation = styled.p`
  animation: 1.5s ${fadeUpAnim};
`;

export { TitleAnimation, SubTitleAnimation, HeadshotAnimation };
