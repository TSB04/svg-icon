import { IconPaths, IconVariant } from "../../../types/icons";

const successIconPaths: IconPaths = {
  default:
    " M12 2 C6.477 2 2 6.477 2 12 C2 17.523 6.477 22 12 22 C17.523 22 22 17.523 22 12 C22 6.477 17.523 2 12 2 Z M12 0 C18.627 0 24 5.373 24 12 C24 18.627 18.627 24 12 24 C5.373 24 0 18.627 0 12 C0 5.373 5.373 0 12 0 Z M9.707 13.293 L7.414 11 L6 12.414 L9.707 16.121 L18 7.828 L16.586 6.414 L9.707 13.293 Z",
  bold: "",
  thin: "",
  filled: "",
};

export const getSuccessIconPath = (
  variant: IconVariant = "default",
): string => {
  return successIconPaths[variant] ?? successIconPaths.default;
};
