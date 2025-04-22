import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getSettingsIconPath } from "../../iconPath/common/Settings";
import { IconVariant } from "../../../types/icons";

interface SettingsIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const SettingsIcon: React.FC<SettingsIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getSettingsIconPath(variant) }),
      }}
    />
  );
};
