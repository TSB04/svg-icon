import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getDotsIconPath } from "../../iconPath/common/Dots";
import { IconVariant } from "../../../types/icons";

interface DotsIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const DotsIcon: React.FC<DotsIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getDotsIconPath(variant) }),
      }}
    />
  );
};
