import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getFiltreIconPath } from "../../iconPath/common/Filtre";
import { IconVariant } from "../../../types/icons";

interface FiltreIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const FiltreIcon: React.FC<FiltreIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getFiltreIconPath(variant) }),
      }}
    />
  );
};
