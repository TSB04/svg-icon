import React from "react";
import { IconWrapper, IconWrapperProps } from "../../components/IconWrapper";
import { getEyeIconPath } from "../iconPath/common/Eye";
import { IconVariant } from "../../types/icons";

interface EyeIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const EyeIcon: React.FC<EyeIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getEyeIconPath(variant) }),
      }}
    />
  );
};
