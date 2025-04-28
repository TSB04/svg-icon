import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getGridIconPath } from "../../iconPath/common/Grid";
import { IconVariant } from "../../../types/icons";

interface GridIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const GridIcon: React.FC<GridIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getGridIconPath(variant) }),
      }}
    />
  );
};
