import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getContactIconPath } from "../../iconPath/common/Contact";
import { IconVariant } from "../../../types/icons";

interface ContactIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const ContactIcon: React.FC<ContactIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getContactIconPath(variant) }),
      }}
    />
  );
};
