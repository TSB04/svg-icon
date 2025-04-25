import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getPortalIconPath } from "../../iconPath/common/Portal";
import { IconVariant } from "../../../types/icons";

interface PortalIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const PortalIcon: React.FC<PortalIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getPortalIconPath(variant) }),
      }}
    />
  );
};
