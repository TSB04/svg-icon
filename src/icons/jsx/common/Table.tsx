import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getTableIconPath } from "../../iconPath/common/Table";
import { IconVariant } from "../../../types/icons";

interface TableIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const TableIcon: React.FC<TableIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getTableIconPath(variant) }),
      }}
    />
  );
};
