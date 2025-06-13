import * as iconPaths from "./icons/iconPath/path";
import { IconVariant } from "./types/icons";
import { IconWrapper } from "./components/IconWrapper";

class SvgIconElement extends HTMLElement {
  static observedAttributes = [
    "name",
    "variant",
    "width",
    "height",
    "viewBox",
    "fill",
    "stroke",
    "stroke-width",
    "fill-rule",
    "clip-rule",
    "clip-path",
    "path-fill",
    "class",
  ];

  connectedCallback() {
    this.updateIcon();
  }

  attributeChangedCallback() {
    this.updateIcon();
  }

  updateIcon() {
    const name = this.getAttribute("name") || "check";
    const variant = this.getAttribute("variant") || "default";

    const width = this.getAttribute("width") || "24";
    const height = this.getAttribute("height") || "24";
    const viewBox = this.getAttribute("viewBox") || "0 0 24 24";
    const fill = this.getAttribute("fill") || "none";
    const stroke = this.getAttribute("stroke") || "none";
    const strokeWidth = this.getAttribute("stroke-width") || "1";
    const fillRule = (
      ["evenodd", "nonzero", "inherit"].includes(
        this.getAttribute("fill-rule") || "",
      )
        ? this.getAttribute("fill-rule")
        : "evenodd"
    ) as "evenodd" | "nonzero" | "inherit";
    const clipRule = this.getAttribute("clip-rule") || "evenodd";
    const clipPath = this.getAttribute("clip-path") || "";
    const pathFill = this.getAttribute("path-fill") || "currentColor";
    const className = this.getAttribute("class") || "";

    const pathFunc = (
      iconPaths as Record<string, (variant: IconVariant) => string>
    )[`get${capitalize(name)}IconPath`];
    const path = pathFunc ? pathFunc(variant as IconVariant) : "";

    if (!path) {
      console.warn(`[universal-svg-icons] Unknown icon: ${name}`);
      this.innerHTML = "";
      return;
    }

    const svg = IconWrapper({
      className,
      width,
      height,
      viewBox,
      fill,
      stroke,
      strokeWidth,
      path,
      pathFill,
      fillRule,
      clipRule,
      clipPath,
    });

    this.innerHTML = svg;
  }
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

customElements.define("universal-svg-icons", SvgIconElement);
