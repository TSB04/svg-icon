import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { IconVariant } from "../../../types/icons";
import { getGoogleIconPath } from "../../iconPath/brand/Google";

interface GoogleIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const GoogleIcon: React.FC<GoogleIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getGoogleIconPath(variant) }),
      }}
    />
  );
};
