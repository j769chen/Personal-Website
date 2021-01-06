import * as React from "react";

import styled, { keyframes } from "styled-components";
import { fadeIn, fadeInDown, fadeInLeft } from "react-animations";

const fadeDownAnim = keyframes`${fadeInDown}`;
const fadeLeftAnim = keyframes`${fadeInLeft}`;
const fadeAnim = keyframes`${fadeIn}`;

const TitleAnimation = styled.h1`
  animation: 1.5s ${fadeAnim};
`;

const SubTitleAnimation = styled.p`
  animation: 2.5s ${fadeAnim};
`;

export { TitleAnimation, SubTitleAnimation };
