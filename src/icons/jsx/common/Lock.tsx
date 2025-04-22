import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getLockIconPath } from "../../iconPath/common/Lock";
import { IconVariant } from "../../../types/icons";

interface LockIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const LockIcon: React.FC<LockIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getLockIconPath(variant) }),
      }}
    />
  );
};
