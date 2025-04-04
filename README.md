# **SVG Icon Package**
A framework-agnostic customizable and lightweight SVG icon package for React and other JavaScript frameworks.

---

## 🚀 **Features**
✅ Lightweight & Optimized  
✅ Supports React, Vanilla JS, Vue, Angular, etc.  
✅ Customizable via props  
✅ Provides both CommonJS (CJS) & ES Module (ESM) builds  
✅ Works with TypeScript  

---

## 📦 **Installation**
Install the package via npm or yarn:

### **Using npm**
```sh
npm install universal-svg-icons
```

### **Using yarn**
```sh
yarn add universal-svg-icons
```

---

## ✨ **Usage**
### **1️⃣ In React**
Import the `IconWrapper` component and any available icon path:

```tsx
import React from "react";
import { IconWrapper, checkIconPath } from "universal-svg-icons";

const App = () => (
  <IconWrapper path={checkIconPath} pathFill="black" width="32" height="32" />
);

export default App;
```

### **2️⃣ In Vanilla JavaScript**
If you are not using React, you can directly use the raw SVG path:

```js
import { checkIconPath } from "universal-svg-icons";
const svgElement = `<svg width="24" height="24"><path d="${checkIconPath}" fill="black"/></svg>`;
document.body.innerHTML = svgElement;
```

### **3️⃣ In Vue**

```vue
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
      checkIconPath
    };
  }
};
</script>
```

### **4️⃣ In Angular**

```html
<svg width="32" height="32">
  <path [attr.d]="checkIconPath" fill="black" />
</svg>
```

```ts
import { Component } from '@angular/core';
import { checkIconPath } from "universal-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  checkIconPath = checkIconPath;
}
```

---

## 🛠 **API Reference**

| **Prop**        | **Type**                                 | **Default**        | **Description**                  |
|-----------------|------------------------------------------|--------------------|----------------------------------|
| `className`     | `string`                                 | "fill-current"     | CSS classes for styling          |
| `width`         | `string`                                 | "24"               | Width of the SVG                 |
| `height`        | `string`                                 | "24"               | Height of the SVG                |
| `viewBox`       | `string`                                 | "0 0 24 24"        | SVG viewBox                      |
| `fill`          | `string`                                 | "none"             | Fill color of the SVG            |
| `fillRule`      | `"evenodd" | "nonzero" | "inherit"`      | "evenodd"          | SVG fill rule                    |
| `clipRule`      | `string`                                 | "evenodd"          | SVG clip rule                    |
| `path`          | `string`                                 | ""                 | The SVG path data                |
| `pathFill`      | `string`                                 | ""                 | Fill color for the path          |
| `clipPath`      | `string`                                 | ""                 | Clip path reference              |
| `defsClipPath`  | `React.ReactNode`                        | `<></>`            | Additional clip path definitions |

**Example:**
```tsx
<IconWrapper path={checkIconPath} pathFill="red" width="40" height="40" />
```

---

## ⚡ **Performance Optimization**
✅ Uses **Tree Shaking** to include only the icons you import.  
✅ Provides **CommonJS (CJS)** and **ES Modules (ESM)** for compatibility.  
✅ Written in **TypeScript** for type safety.  

---

## 📜 **License**
This project is licensed under the **ISC License**. See the full [LICENSE](./LICENSE) file for details.

---

## 🛠 **Development & Contribution**

We welcome contributions! Follow these steps to contribute:

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/tsb04/universal-svg-icons.git
cd universal-svg-icons
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Build the Package**
```sh
npm run build
```

### **4️⃣ Add New Icons**
- Add your SVG path inside the `/src/icons/` folder.  
- Export the path inside `src/index.ts`.

### **5️⃣ Create a Feature Branch** 
```sh
git checkout -b feature/new-icon
```

### **6️⃣ Commit Changes**
```sh
git commit -m "Added new icon"
```

### **7️⃣ Push & Create a Pull Request**
```sh
git push origin feature/new-icon
```
Then, open a **Pull Request** on GitHub. 🚀

---

## 📬 **Contact, Support & Feedback**
- Found an issue? Report it [here](https://github.com/TSB04/universal-svg-icons/issues).
- Have a feature request? Open a discussion!
- Need help? Contact me via GitHub.

---

## 🎨 **Available Icons**
Each icon is exported as a raw SVG path and can be used with `IconWrapper` or any `<svg>` element.

| Icon Name               | Import Icon Path Name           |  Import JSX Icon                        |
|-------------------------|---------------------------------|-----------------------------------------|
| ✅ Check                | `getCheckIconPath`              |  <CheckIcon/>                           |
| 👤 User                 | `getUserIconPath`               |  <UserIcon/>                            |
| ✉️ Mail                 | `getMailIconPath`               |  <MailIcon/>                            |s

---

## ⭐ **Like This Project? Give It a Star!**
If you found this useful, don’t forget to ⭐ star this repo on GitHub! 🚀

Made with ❤️ by **tsb04** 🚀 **Happy Coding!** 🎉

