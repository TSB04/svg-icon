import { IconPaths, IconVariant } from "../../../types/icons";

const twitterIconPaths: IconPaths = {
  default:
    "M13.6894 18.5L9.90566 13.1069L5.16898 18.5H3.16504L9.01663 11.8394L3.16504 3.5H8.31001L11.8761 8.58297L16.3443 3.5H18.3482L12.7681 9.85216L18.8343 18.5H13.6894ZM15.921 16.9795H14.5719L6.03435 5.02047H7.38366L10.803 9.809L11.3943 10.6399L15.921 16.9795Z",
  bold: "",
  thin: "",
  filled: "",
};

export const getTwitterIconPath = (
  variant: IconVariant = "default",
): string => {
  return twitterIconPaths[variant] ?? twitterIconPaths.default;
};
