import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getPreviousIconPath } from "../../iconPath/common/Previous";
import { IconVariant } from "../../../types/icons";

interface PreviousIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const PreviousIcon: React.FC<PreviousIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getPreviousIconPath(variant) }),
      }}
    />
  );
};
