import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getChevronIconPath } from "../../iconPath/common/Chevron";
import { IconVariant } from "../../../types/icons";

interface ChevronIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const ChevronIcon: React.FC<ChevronIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getChevronIconPath(variant) }),
      }}
    />
  );
};
