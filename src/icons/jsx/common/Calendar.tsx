import React from "react";
import { IconWrapper, IconWrapperProps } from "../../../components/IconWrapper";
import { getCalendarIconPath } from "../../iconPath/common/Calendar";
import { IconVariant } from "../../../types/icons";

interface CalendarIconProps extends Omit<IconWrapperProps, "path"> {
  variant?: IconVariant;
}

export const CalendarIcon: React.FC<CalendarIconProps> = ({
  variant = "default",
  ...props
}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: IconWrapper({ ...props, path: getCalendarIconPath(variant) }),
      }}
    />
  );
};
