import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getDownloadIconPath } from "../../iconPath/common/Download";
import { IconVariant } from "../../../types/icons";

interface DownloadIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const DownloadIcon: React.FC<DownloadIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getDownloadIconPath(variant) }),
      }}
    />
  );
};
