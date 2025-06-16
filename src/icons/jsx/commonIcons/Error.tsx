import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getErrorIconPath } from "../../iconPath/common/Error";
import { IconVariant } from "../../../types/icons";

interface ErrorIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const ErrorIcon: React.FC<ErrorIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getErrorIconPath(variant) }),
      }}
    />
  );
};
