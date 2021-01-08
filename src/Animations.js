import styled, { keyframes } from "styled-components";
import { fadeIn, bounceInLeft } from "react-animations";

const fadeAnim = keyframes`${fadeIn}`;
const bounceAnim = keyframes`${bounceInLeft}`

const SummaryAnimation = styled.div`
  animation: 1.5s ${fadeAnim};
`;

const ListAnimation = styled.div`
  animation: 1.5s ${bounceAnim};
`;

export { SummaryAnimation, ListAnimation };
