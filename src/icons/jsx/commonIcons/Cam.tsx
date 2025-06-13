import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getCamIconPath } from "../../iconPath/common/Cam";
import { IconVariant } from "../../../types/icons";

interface CamIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const CamIcon: React.FC<CamIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getCamIconPath(variant) }),
      }}
    />
  );
};
