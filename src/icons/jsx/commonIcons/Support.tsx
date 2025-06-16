import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getSupportIconPath } from "../../iconPath/common/Support";
import { IconVariant } from "../../../types/icons";

interface SupportIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const SupportIcon: React.FC<SupportIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getSupportIconPath(variant) }),
      }}
    />
  );
};
