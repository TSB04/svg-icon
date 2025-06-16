import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getDashboardIconPath } from "../../iconPath/common/Dashboard";
import { IconVariant } from "../../../types/icons";

interface DashboardIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const DashboardIcon: React.FC<DashboardIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getDashboardIconPath(variant) }),
      }}
    />
  );
};
