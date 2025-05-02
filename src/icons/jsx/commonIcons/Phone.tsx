import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getPhoneIconPath } from "../../iconPath/common/Phone";
import { IconVariant } from "../../../types/icons";

interface PhoneIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const PhoneIcon: React.FC<PhoneIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getPhoneIconPath(variant) }),
      }}
    />
  );
};
