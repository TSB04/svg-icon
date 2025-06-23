import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getCloseIconPath } from "../../iconPath/common/Close";
import { IconVariant } from "../../../types/icons";

interface CloseIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const CloseIcon: React.FC<CloseIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getCloseIconPath(variant) }),
      }}
    />
  );
};
