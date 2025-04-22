import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getFormIconPath } from "../../iconPath/common/Form";
import { IconVariant } from "../../../types/icons";

interface FormIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const FormIcon: React.FC<FormIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getFormIconPath(variant) }),
      }}
    />
  );
};
