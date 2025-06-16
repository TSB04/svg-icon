import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getBellIconPath } from "../../iconPath/common/Bell";
import { IconVariant } from "../../../types/icons";

interface BellIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const BellIcon: React.FC<BellIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getBellIconPath(variant) }),
      }}
    />
  );
};
