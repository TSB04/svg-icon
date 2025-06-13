import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getUiIconPath } from "../../iconPath/common/Ui";
import { IconVariant } from "../../../types/icons";

interface UiIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const UiIcon: React.FC<UiIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getUiIconPath(variant) }),
      }}
    />
  );
};
