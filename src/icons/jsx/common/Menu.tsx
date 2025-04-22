import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getMenuIconPath } from "../../iconPath/common/Menu";
import { IconVariant } from "../../../types/icons";

interface MenuIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const MenuIcon: React.FC<MenuIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getMenuIconPath(variant) }),
      }}
    />
  );
};
