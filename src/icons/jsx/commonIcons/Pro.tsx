import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getProIconPath } from "../../iconPath/common/Pro";
import { IconVariant } from "../../../types/icons";

interface ProIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const ProIcon: React.FC<ProIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getProIconPath(variant) }),
      }}
    />
  );
};
