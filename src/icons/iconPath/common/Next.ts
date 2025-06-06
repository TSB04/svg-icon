import { IconPaths, IconVariant } from "../../../types/icons";

const nextIconPaths: IconPaths = {
  default:
    "M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708",
  bold: "",
  thin: "",
  filled: "",
};

export const getNextIconPath = (variant: IconVariant = "default"): string => {
  return nextIconPaths[variant] ?? nextIconPaths.default;
};
