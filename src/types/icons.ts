// export type IconVariant = "default" | "bold" | "thin" | "filled";

// export type IconPaths = {
//   [key in IconVariant]: string;
// };


export type IconVariant = "default" | "bold" | "thin" | "filled";

export interface IconPaths {
  [variant: string]: string;
}
