import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getUserIconPath } from "../../iconPath/common/User";
import { IconVariant } from "../../../types/icons";

interface UserIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const UserIcon: React.FC<UserIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getUserIconPath(variant) }),
      }}
    />
  );
};
