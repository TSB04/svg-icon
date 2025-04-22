import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getInfoIconPath } from "../../iconPath/common/Info";
import { IconVariant } from "../../../types/icons";

interface InfoIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const InfoIcon: React.FC<InfoIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getInfoIconPath(variant) }),
      }}
    />
  );
};
