import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { IconVariant } from "../../../types/icons";
import { getLinkdinIconPath } from "../../iconPath/brand/Linkdin";

interface LinkdinIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const LinkdinIcon: React.FC<LinkdinIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getLinkdinIconPath(variant) }),
      }}
    />
  );
};
