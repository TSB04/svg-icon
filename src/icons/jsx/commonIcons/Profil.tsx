import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getProfilIconPath } from "../../iconPath/common/Profil";
import { IconVariant } from "../../../types/icons";

interface ProfilIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const ProfilIcon: React.FC<ProfilIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getProfilIconPath(variant) }),
      }}
    />
  );
};
