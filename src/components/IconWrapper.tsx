import React, { FC,SVGProps } from "react";

type FillRule = "evenodd" | "nonzero" | "inherit";

interface IconWrapperProps extends SVGProps<SVGSVGElement> {
  className?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  fillRule?: FillRule;
  clipRule?: string;
  path?: string;
  pathFill?: string;
  clipPath?: string;
  defsClipPath?: React.ReactNode;
  onClick?: () => void;
}

export const IconWrapper: FC<IconWrapperProps> = ({
  className = "fill-current",
  width = "24",
  height = "24",
  viewBox = "0 0 24 24",
  fill = "none",
  stroke = "none",
  strokeWidth = "1",
  path = "",
  pathFill = "currentColor",
  fillRule = "evenodd",
  clipRule = "evenodd",
  clipPath = "",
  defsClipPath = null,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <g clipPath={clipPath}>
      <path fill={pathFill} fillRule={fillRule} clipRule={clipRule} d={path} />
    </g>
    {defsClipPath}
  </svg>
);
