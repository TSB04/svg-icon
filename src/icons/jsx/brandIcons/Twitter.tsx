import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { IconVariant } from "../../../types/icons";
import { getTwitterIconPath } from "../../iconPath/brand/Twitter";

interface TwitterIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const TwitterIcon: React.FC<TwitterIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getTwitterIconPath(variant) }),
      }}
    />
  );
};
