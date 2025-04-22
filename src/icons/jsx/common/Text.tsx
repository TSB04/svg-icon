import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getTextIconPath } from "../../iconPath/common/Text";
import { IconVariant } from "../../../types/icons";

interface TextIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const TextIcon: React.FC<TextIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getTextIconPath(variant) }),
      }}
    />
  );
};
