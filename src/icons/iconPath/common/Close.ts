import { IconPaths, IconVariant } from "../../../types/icons";

const closeIconPaths: IconPaths = {
  default:
    "M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z",
  bold: "",
  thin: "",
  filled: "",
};

export const getCloseIconPath = (variant: IconVariant = "default"): string => {
  return closeIconPaths[variant] ?? closeIconPaths.default;
};
