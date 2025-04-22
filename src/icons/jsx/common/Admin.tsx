import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getAdminIconPath } from "../../iconPath/common/Admin";
import { IconVariant } from "../../../types/icons";

interface AdminIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const AdminIcon: React.FC<AdminIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getAdminIconPath(variant) }),
      }}
    />
  );
};
