import React from "react";
import styled, { CSSProperties } from "styled-components";

export type SkeletonProps = {
  width?: number | string;
  height?: number | string;
  flex?: number;
  isRadius?: boolean;
  style?: CSSProperties;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  flex,
  isRadius = false,
  style,
}) => {
  return (
    <SkeletonBlock
      isRadius={isRadius}
      style={{ ...style, width, height, flex }}
    />
  );
};

const SkeletonBlock = styled.div<{ isRadius: boolean }>`
  display: inline-block;
  background-color: #f2f2f2;
  background-image: linear-gradient(
    90deg,
    #f2f2f2 25%,
    #e6e6e6 37%,
    #f2f2f2 63%
  );
  background-size: 400% 100%;
  border-radius: ${({ isRadius }) => (isRadius ? "50%" : "0")};
  animation: pulse 1.25s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export default Skeleton;
