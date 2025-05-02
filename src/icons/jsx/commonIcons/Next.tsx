import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getNextIconPath } from "../../iconPath/common/Next";
import { IconVariant } from "../../../types/icons";

interface NextIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const NextIcon: React.FC<NextIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getNextIconPath(variant) }),
      }}
    />
  );
};
