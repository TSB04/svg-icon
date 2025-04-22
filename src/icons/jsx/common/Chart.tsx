import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getChartIconPath } from "../../iconPath/common/Chart";
import { IconVariant } from "../../../types/icons";

interface ChartIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const ChartIcon: React.FC<ChartIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getChartIconPath(variant) }),
      }}
    />
  );
};
