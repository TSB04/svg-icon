import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { IconVariant } from "../../../types/icons";
import { getLinkedInIconPath } from "../../iconPath/brand/LinkedIn";

interface LinkedInIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getLinkedInIconPath(variant) }),
      }}
    />
  );
};
