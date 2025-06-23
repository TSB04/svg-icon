export interface IconWrapperProps {
  className?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  strokelinecap?: "butt" | "round" | "square";
  strokelinejoin?: "miter" | "round" | "bevel";
  fillRule?: "evenodd" | "nonzero" | "inherit";
  clipRule?: string;
  path: string;
  pathFill?: string;
  clipPath?: string;
  onClick?: () => void;
}

export const IconWrapper = ({
  className = "",
  width = "24",
  height = "24",
  viewBox = "0 0 24 24",
  fill = "none",
  stroke = "none",
  strokeWidth = "1",
  strokelinecap = "round",
  strokelinejoin = "round",
  path = "",
  pathFill = "currentColor",
  fillRule = "evenodd",
  clipRule = "evenodd",
  clipPath = "",
  onClick,
}: IconWrapperProps) => {
  return `
    <svg 
      class="${className}" 
      width="${width}" 
      height="${height}" 
      viewBox="${viewBox}" 
      fill="${fill}" 
      stroke="${stroke}" 
      strokeWidth="${strokeWidth}" 
      strokeLinecap="${strokelinecap}" 
      strokeLinejoin="${strokelinejoin}"
      xmlns="http://www.w3.org/2000/svg" 
      onclick="${onClick ? `(${onClick.toString()})()` : ""}"
    >
      <g clip-path="${clipPath}">
        <path fill="${pathFill}" fillRule="${fillRule}" clipRule="${clipRule}" d="${path}" />
      </g>
    </svg>
  `;
};
