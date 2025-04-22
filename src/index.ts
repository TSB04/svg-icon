//  framework-agnostic UI Icons components
export { IconWrapper } from "./components/IconWrapper";
export { getCheckIconPath } from "./icons/iconPath/common/Check";
export { getEyeIconPath } from "./icons/iconPath/common/Eye";
export { getMailIconPath } from "./icons/iconPath/common/Mail";
export { getUserIconPath } from "./icons/iconPath/common/User";
export { IconVariant } from "./types/icons";

export * from "./web-component";


// framework-specific UI Icons components (jsx and tsx)
export { UserIcon } from "./icons/jsx/UserIcon";
export { EyeIcon } from "./icons/jsx/EyeIcon";
export { MailIcon } from "./icons/jsx/MailIcon";
export { CheckIcon } from "./icons/jsx/CheckIcon";