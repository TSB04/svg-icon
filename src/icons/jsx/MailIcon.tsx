import React from "react";
import { IconWrapper, IconWrapperProps } from "../../components/IconWrapper";
import { getMailIconPath } from "../iconPath/common/Mail";
import { IconVariant } from "../../types/icons";

interface MailIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const MailIcon: React.FC<MailIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getMailIconPath(variant) }),
      }}
    />
  );
};
