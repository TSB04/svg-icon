import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getBankIconPath } from "../../iconPath/common/Bank";
import { IconVariant } from "../../../types/icons";

interface BankIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const BankIcon: React.FC<BankIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getBankIconPath(variant) }),
      }}
    />
  );
};
