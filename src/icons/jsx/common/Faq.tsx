import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getFaqIconPath } from "../../iconPath/common/Faq";
import { IconVariant } from "../../../types/icons";

interface FaqIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const FaqIcon: React.FC<FaqIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getFaqIconPath(variant) }),
      }}
    />
  );
};
