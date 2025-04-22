import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { IconVariant } from "../../../types/icons";
import { getGithubIconPath } from "../../iconPath/brand/Github";

interface GitHubIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const GitHubIcon: React.FC<GitHubIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getGithubIconPath(variant) }),
      }}
    />
  );
};
