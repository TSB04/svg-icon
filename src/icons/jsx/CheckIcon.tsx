import React from "react";
import { IconWrapper, IconWrapperProps } from "../../components/IconWrapper";
import { getCheckIconPath } from "../iconPath/common/Check";
import { IconVariant } from "../../types/icons";

interface CheckIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const CheckIcon: React.FC<CheckIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getCheckIconPath(variant) }),
      }}
    />
  );
};
