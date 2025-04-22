import { IconPaths, IconVariant } from "../../../types/icons";

const warningIconPaths: IconPaths = {
  default:
    " M12 2 L2 22 H22 L12 2 Z M13 18 H11 V16 H13 V18 Z M13 14 H11 V9 H13 V14 Z",
  bold: "",
  thin: "",
  filled: "",
};

export const getWarningIconPath = (
  variant: IconVariant = "default",
): string => {
  return warningIconPaths[variant] ?? warningIconPaths.default;
};
