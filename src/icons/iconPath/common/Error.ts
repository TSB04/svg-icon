import { IconPaths, IconVariant } from "../../../types/icons";

const errorIconPaths: IconPaths = {
  default:
    "M12 2 C6.477 2 2 6.477 2 12 C2 17.523 6.477 22 12 22 C17.523 22 22 17.523 22 12 C22 6.477 17.523 2 12 2 Z M14.53 15.53 C14.823 15.237 14.823 14.762 14.53 14.47 L12 12 L14.53 9.53 C14.823 9.237 14.823 8.762 14.53 8.47 C14.237 8.177 13.762 8.177 13.47 8.47 L12 9.94 L10.53 8.47 C10.237 8.177 9.762 8.177 9.47 8.47 C9.177 8.762 9.177 9.237 9.47 9.53 L12 12 L9.47 14.47 C9.177 14.762 9.177 15.237 9.47 15.53 C9.762 15.823 10.237 15.823 10.53 15.53 L12 13.06 L13.47 15.53 C13.762 15.823 14.237 15.823 14.53 15.53 Z",
  bold: "",
  thin: "",
  filled: "",
};

export const getErrorIconPath = (variant: IconVariant = "default"): string => {
  return errorIconPaths[variant] ?? errorIconPaths.default;
};
