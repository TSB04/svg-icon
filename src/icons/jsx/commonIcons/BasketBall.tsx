import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getBasketBallIconPath } from "../../iconPath/common/BasketBall";
import { IconVariant } from "../../../types/icons";

interface BasketBallIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const BasketBallIcon: React.FC<BasketBallIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getBasketBallIconPath(variant) }),
      }}
    />
  );
};
