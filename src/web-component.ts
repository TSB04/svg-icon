// src/web-component.ts
import { getCheckIconPath } from "./icons/Check";
import { IconVariant } from "./types/icons";

class SvgIconElement extends HTMLElement {
  static observedAttributes = ["name", "variant", "width", "height", "fill"];

  connectedCallback() {
    this.updateIcon();
  }

  attributeChangedCallback() {
    this.updateIcon();
  }

  updateIcon() {
    // const name = this.getAttribute("name") || "check"; // will be used for future icons
    const variant = this.getAttribute("variant") || "default";
    const width = this.getAttribute("width") || "24";
    const height = this.getAttribute("height") || "24";
    const fill = this.getAttribute("fill") || "currentColor";

    const path = getCheckIconPath(variant as IconVariant);
    this.innerHTML = `<svg width="${width}" height="${height}" fill="${fill}" viewBox="0 0 24 24">
                        <path d="${path}" />
                      </svg>`;
  }
}

customElements.define("universal-svg-icons", SvgIconElement);
