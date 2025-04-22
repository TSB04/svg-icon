import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getSuccessIconPath } from "../../iconPath/common/Success";
import { IconVariant } from "../../../types/icons";

interface SuccessIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const SuccessIcon: React.FC<SuccessIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getSuccessIconPath(variant) }),
      }}
    />
  );
};
