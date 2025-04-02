import React from "react";

type FillRule = "evenodd" | "nonzero" | "inherit";

interface IconWrapperProps {
  className?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillRule?: FillRule;
  clipRule?: string;
  path?: string;
  pathFill?: string;
  clipPath?: string;
  defsClipPath?: React.ReactNode;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  className = "fill-current",
  width = "24",
  height = "24",
  viewBox = "0 0 24 24",
  fill = "none",
  fillRule = "evenodd",
  clipRule = "evenodd",
  path = "",
  pathFill = "",
  clipPath = "",
  defsClipPath = <></>,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath={clipPath}>
      <path fill={pathFill} fillRule={fillRule} clipRule={clipRule} d={path} />
    </g>
    {defsClipPath}
  </svg>
);
