import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeAnim = keyframes`${fadeIn}`;

const SummaryAnimation = styled.div`
  animation: 2.5s ${fadeAnim};
`;

export { SummaryAnimation };
