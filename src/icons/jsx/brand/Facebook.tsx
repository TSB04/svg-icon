import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { IconVariant } from "../../../types/icons";
import { getFacebookIconPath } from "../../iconPath/brand/Facebook";

interface FacebookIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getFacebookIconPath(variant) }),
      }}
    />
  );
};
