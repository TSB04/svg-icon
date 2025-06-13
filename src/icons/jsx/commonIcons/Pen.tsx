import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getPenIconPath } from "../../iconPath/common/Pen";
import { IconVariant } from "../../../types/icons";

interface PenIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const PenIcon: React.FC<PenIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getPenIconPath(variant) }),
      }}
    />
  );
};
