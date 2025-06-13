import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getPriceTagIconPath } from "../../iconPath/common/PriceTag";
import { IconVariant } from "../../../types/icons";

interface PriceTagIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const PriceTagIcon: React.FC<PriceTagIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getPriceTagIconPath(variant) }),
      }}
    />
  );
};
