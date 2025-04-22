import { IconPaths, IconVariant } from "../types/icons";

const profilIconPaths: IconPaths = {
  default: "M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z",
  bold: "M8.4 11.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4m-7 8.4s-1.4 0-1.4-1.4 1.4-5.6 8.4-5.6 8.4 4.2 8.4 5.6-1.4 1.4-1.4 1.4zM15.4 4.9a.7.7 0 0 1 .7-.7h5.6a.7.7 0 0 1 0 1.4h-5.6a.7.7 0 0 1-.7-.7m.7 3.5a.7.7 0 0 0 0 1.4h5.6a.7.7 0 0 0 0-1.4zm2.8 4.2a.7.7 0 0 0 0 1.4h2.8a.7.7 0 0 0 0-1.4zm0 4.2a.7.7 0 0 0 0 1.4h2.8a.7.7 0 0 0 0-1.4z",
  thin: "",
  filled: "",
};

export const getProfilIconPath = (variant: IconVariant = "default"): string => {
  return profilIconPaths[variant] ?? profilIconPaths.default;
};
