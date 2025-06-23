import { IconPaths, IconVariant } from "../../../types/icons";

const FiltreIconPaths: IconPaths = {
  default:
    "M2.29004 5.90393H17.7067 M17.7075 14.0961H2.29085 M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z",
  bold: "",
  thin: "",
  filled: "",
};

export const getFiltreIconPath = (variant: IconVariant = "default"): string => {
  return FiltreIconPaths[variant] ?? FiltreIconPaths.default;
};
