import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getInstitutsIconPath } from "../../iconPath/common/Instituts";
import { IconVariant } from "../../../types/icons";

interface InstitutsIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const InstitutsIcon: React.FC<InstitutsIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getInstitutsIconPath(variant) }),
      }}
    />
  );
};
