import React from "react";
import styled from "styled-components";

/** styles */
import { defaultPalette } from "../utils/styles";

/** interface */
import { LoaderSpinnerProps, SpinnerProps } from "../interfaces";

const LoaderSpinner: React.FC<LoaderSpinnerProps> = ({
  color = defaultPalette.accent6,
  subColor = "#ff3d00",
}) => {
  return <Spinner color={color} subColor={subColor} />;
};

const Spinner = styled.span<SpinnerProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: ${({ color }) => `${color} ${color}`} transparent transparent;
  animation: rotation 1s linear infinite;

  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent transparent
      ${({ subColor }) => `${subColor} ${subColor}`};
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }

  &::before {
    width: 2rem;
    height: 2rem;
    border-color: ${({ color }) => `${color} ${color}`} transparent transparent;
    animation: rotation 1.5s linear infinite;
  }

  @keyframes rotation {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotationBack {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
`;

export default LoaderSpinner;
