import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getClockIconPath } from "../../iconPath/common/Clock";
import { IconVariant } from "../../../types/icons";

interface ClockIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const ClockIcon: React.FC<ClockIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getClockIconPath(variant) }),
      }}
    />
  );
};
