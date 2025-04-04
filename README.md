# Universal SVG Icons
A framework-agnostic, customizable, and lightweight SVG icon package for React and other JavaScript frameworks.

---

## 🚀 Features
- ✅ Lightweight & Optimized  
- ✅ Works with React, Vanilla JS, Vue, Angular, and more  
- ✅ Customizable via props  
- ✅ Supports CommonJS (CJS) & ES Module (ESM) builds  
- ✅ Fully compatible with TypeScript  

---

## 📦 Installation
Install the package using npm or yarn:

### Using npm

npm install universal-svg-icons

### Using yarn

yarn add universal-svg-icons

---

## ✨ Usage Examples

### 1️⃣ React
Use the `IconWrapper` component to render an icon:


import React from "react";
import { IconWrapper, checkIconPath } from "universal-svg-icons";
const App = () => (
<IconWrapper path={checkIconPath} pathFill="black" width="32" height="32" />
);
export default App;

---

### 2️⃣ Vanilla JavaScript
Directly use the raw SVG path in your HTML or JavaScript:


import { checkIconPath } from "universal-svg-icons";
const svgElement = <svg width="24" height="24"><path d="${checkIconPath}" fill="black"/></svg>;
document.body.innerHTML = svgElement;

---

### 3️⃣ Vue
Bind the icon path to a `<path>` element in Vue:


<template>
<svg width="32" height="32">
<path :d="checkIconPath" fill="black" />
</svg>
</template>
<script>
import { checkIconPath } from "universal-svg-icons";
export default {
data() {
return {
checkIconPath,
};
},
};
</script>

---

### 4️⃣ Angular
Use Angular's property binding to set the `d` attribute:

#### Template:

<svg width="32" height="32">
<path [attr.d]="checkIconPath" fill="black" />
</svg>

#### Component:

import { Component } from "@angular/core";
import { checkIconPath } from "universal-svg-icons";
@Component({
selector: "app-root",
templateUrl: "./app.component.html",
})
export class AppComponent {
checkIconPath = checkIconPath;
}

---

## 🛠️ API Reference

| Prop             | Type                                     | Default            | Description                       |
|------------------|-----------------------------------------|--------------------|-----------------------------------|
| `className`      | `string`                                | `"fill-current"`   | CSS classes for styling           |
| `width`          | `string`                                | `"24"`             | Width of the SVG                  |
| `height`         | `string`                                | `"24"`             | Height of the SVG                 |
| `viewBox`        | `string`                                | `"0 0 24 24"`      | SVG viewBox                       |
| `fill`           | `string`                                | `"none"`           | Fill color of the SVG             |
| `fillRule`       | `"evenodd" | "nonzero" | "inherit"`     | `"evenodd"`        | SVG fill rule                     |
| `clipRule`       | `string`                                | `"evenodd"`        | SVG clip rule                     |
| `path`           | `string`                                | `""`               | The SVG path data                 |
| `pathFill`       | `string`                                | `""`               | Fill color for the path           |
| `clipPath`       | `string`                                | `""`               | Clip path reference               |
| `defsClipPath`   | `React.ReactNode`                       | `<></>`            | Additional clip path definitions  |

**Example:**

<IconWrapper
path={checkIconPath}
pathFill="red"
width="40"
height="40"
/>

---

## ⚡ Performance Optimization
- ✅ **Tree Shaking** ensures only imported icons are included in your build.  
- ✅ Includes both **CommonJS (CJS)** and **ES Modules (ESM)** for compatibility.  
- ✅ Written in **TypeScript** for type safety.

---

## 🎨 Available Icons

The package includes a variety of icons that can be imported as raw SVG paths or JSX components.

| Icon Name       | Path Import Name       | JSX Component     |
|------------------|------------------------|-------------------|
| ✅ Check         | `getCheckIconPath`     | `<CheckIcon />`   |
| 👤 User          | `getUserIconPath`      | `<UserIcon />`    |
| ✉️ Mail          | `getMailIconPath`      | `<MailIcon />`    |

**Example Usage:**

import { IconWrapper, getMailIconPath } from "universal-svg-icons";
<IconWrapper
path={getMailIconPath}
pathFill="#0000FF"
width="48"
height="48"
/>;

---

## 🛠️ Development & Contribution

We welcome contributions! Follow these steps to contribute:

### Clone the Repository

git clone https://github.com/tsb04/universal-svg-icons.git
cd universal-svg-icons

### Install Dependencies

npm install

### Build the Package

npm run build

### Add New Icons
1. Add your SVG path to `/src/icons/`.  
2. Export it in `/src/index.ts`.

### Create a Feature Branch

git checkout -b feature/new-icon

### Commit Changes

git commit -m "Added new icon"

### Push & Create a Pull Request

git push origin feature/new-icon
Then open a pull request on GitHub. 🚀

---

## 📜 License

This project is licensed under the [ISC License](./LICENSE).

---

## 📬 Contact & Support

- Found an issue? Report it [here](https://github.com/tsb04/universal-svg-icons/issues).  
- Have a feature request? Open a discussion!  
- Need help? Contact us via GitHub.

---

## ⭐ Like This Project? Give It a Star!

If you found this project useful, don’t forget to ⭐ star it on GitHub. Made with ❤️ by **tsb04**. Happy coding! 🎉

---

You can now save this content as a file named **README.md**. Let me know if you need assistance with creating or downloading it!

<div>⁂</div>
