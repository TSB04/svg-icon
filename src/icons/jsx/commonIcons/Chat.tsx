import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getChatIconPath } from "../../iconPath/common/Chat";
import { IconVariant } from "../../../types/icons";

interface ChatIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const ChatIcon: React.FC<ChatIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getChatIconPath(variant) }),
      }}
    />
  );
};
