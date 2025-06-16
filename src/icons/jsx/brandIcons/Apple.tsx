import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { IconVariant } from "../../../types/icons";
import { getAppleIconPath } from "../../iconPath/brand/Apple";

interface AppleIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const AppleIcon: React.FC<AppleIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getAppleIconPath(variant) }),
      }}
    />
  );
};
