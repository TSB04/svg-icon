import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getPrivacyIconPath } from "../../iconPath/common/Privacy";
import { IconVariant } from "../../../types/icons";

interface PrivacyIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const PrivacyIcon: React.FC<PrivacyIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getPrivacyIconPath(variant) }),
      }}
    />
  );
};
