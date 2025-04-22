import { IconPaths, IconVariant } from "../types/icons";

const previousIconPaths: IconPaths = {
  default: "M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0",
  bold: "",
  thin: "",
  filled: "",
};

export const getPreviousIconPath = (variant: IconVariant = "default"): string => {
  return previousIconPaths[variant] ?? previousIconPaths.default;
};
