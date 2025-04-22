import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getWarningIconPath } from "../../iconPath/common/Warning";
import { IconVariant } from "../../../types/icons";

interface WarningIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const WarningIcon: React.FC<WarningIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getWarningIconPath(variant) }),
      }}
    />
  );
};
