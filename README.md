# 🌐 Universal SVG Icons

A **framework-agnostic**, **customizable**, and **lightweight** SVG icon package for React, Vue, Angular, and other JavaScript frameworks.

---

## 🚀 Features

- ✅ Lightweight & optimized
- ✅ Compatible with React, Vue, Angular, and Vanilla JS
- ✅ Customizable via props or attributes
- ✅ Dual builds: CommonJS (CJS) & ES Modules (ESM)
- ✅ Fully written in TypeScript for type safety
- ✅ Tree-shakable: Import only what you use

---

## 📦 Installation

### Using npm

```bash
npm install universal-svg-icons
```

### Using yarn

```bash
yarn add universal-svg-icons
```

---

## ✨ Usage Examples

### ✅ React (JSX Element or Icon Wrapper)

Use the `IconWrapper` or import the icon directly as a JSX component:

```tsx
import { IconWrapper, getCheckIconPath, CheckIcon } from "universal-svg-icons";

export default function App() {
  return (
    <>
      <IconWrapper
        path={getCheckIconPath()}
        pathFill="black"
        width="32"
        height="32"
      />
      <CheckIcon width="32" height="32" pathFill="black" />
    </>
  );
}
```

### 🌐 Vanilla JS / HTML (HTML Element)

Use `IconWrapper` in plain JavaScript by building the SVG element manually:

```js
import { getCheckIconPath } from "universal-svg-icons/path";

const svgElement = `<svg width="24" height="24"><path d="${getCheckIconPath()}" fill="black"/></svg>`;
document.body.innerHTML = svgElement;
```

### 🔧 Vue

Use the path directly or register the icon as a component:

```vue
<template>
  <svg width="32" height="32"><path :d="checkIconPath" fill="black" /></svg>
</template>

<script>
import { getCheckIconPath } from "universal-svg-icons/path";
export default {
  data() {
    return { checkIconPath: getCheckIconPath() };
  },
};
</script>
```

### 🅰️ Angular

Use property binding in templates:

#### Template:

```html
<svg width="32" height="32">
  <path [attr.d]="checkIconPath" fill="black" />
</svg>
```

#### Component:

```ts
import { Component } from "@angular/core";
import { getCheckIconPath } from "universal-svg-icons/path";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  checkIconPath = getCheckIconPath();
}
```

---

## 🛠️ API Reference

| Prop           | Type                                 | Default        | Description                   |
| -------------- | ------------------------------------ | -------------- | ----------------------------- |
| `className`    | `string`                             | `fill-current` | CSS class for the SVG         |
| `width`        | `string`                             | `24`           | Width of the icon             |
| `height`       | `string`                             | `24`           | Height of the icon            |
| `viewBox`      | `string`                             | `0 0 24 24`    | ViewBox of the SVG            |
| `fill`         | `string`                             | `none`         | Fill color of the SVG element |
| `fillRule`     | `"evenodd","nonzero", "inherit"`     | `evenodd`      | Fill rule                     |
| `clipRule`     | `string`                             | `evenodd`      | Clip rule                     |
| `path`         | `string`                             | `""`           | SVG path data                 |
| `pathFill`     | `string`                             | `""`           | Fill color for the path       |
| `clipPath`     | `string`                             | `""`           | Clip path reference           |
| `defsClipPath` | `React.ReactNode`                    | `<></>`        | Clip path definitions         |

---

## 🎨 Available Icons

You can import icons as raw paths or JSX components:

| Icon Name       | Path Import Name        | JSX Component        |
| --------------- | ----------------------- | -------------------- |
| 🛡️ Admin        | `getAdminIconPath`      | `<AdminIcon />`      |
| 🏀 Basketball   | `getBasketBallIconPath` | `<BasketBallIcon />` |
| ✅ Check        | `getCheckIconPath`      | `<CheckIcon />`      |
| 📅 Calendar     | `getCalendarIconPath`   | `<CalendarIcon />`   |
| 📷 Cam          | `getCamIconPath`        | `<CamIcon />`        |
| 📊 Chart        | `getChartIconPath`      | `<ChartIcon />`      |
| 💬 Chat         | `getChatIconPath`       | `<ChatIcon />`       |
| ⏰ Clock        | `getClockIconPath`      | `<ClockIcon />`      |
| 📇 Contact      | `getContactIconPath`    | `<ContactIcon />`    |
| 📉 Dashboard    | `getDashboardIconPath`  | `<DashboardIcon />`  |
| ⋮ Dots           | `getDotsIconPath`       | `<DotsIcon />`       |
| ❌ Error        | `getErrorIconPath`      | `<ErrorIcon />`      |
| 👁️ Eye          | `getEyeIconPath`        | `<EyeIcon />`        |
| 📝 Form         | `getFormIconPath`       | `<FormIcon />`       |
| ℹ️ Info         | `getInfoIconPath`       | `<InfoIcon />`       |
| 🏫 Institutes   | `getInstitutsIconPath`  | `<InstitutsIcon />`  |
| 🔒 Lock         | `getLockIconPath`       | `<LockIcon />`       |
| ✉️ Mail         | `getMailIconPath`       | `<MailIcon />`       |
| ☰ Menu          | `getMenuIconPath`       | `<MenuIcon />`       |
| ➡️ Next         | `getNextIconPath`       | `<NextIcon />`       |
| ✒️ Pen          | `getPenIconPath`        | `<PenIcon />`        |
| 📞 Phone        | `getPhoneIconPath`      | `<PhoneIcon />`      |
| 🌀 Portal       | `getPortalIconPath`     | `<PortalIcon />`     |
| ⬅️ Previous     | `getPreviousIconPath`   | `<PreviousIcon />`   |
| 👨‍💼 Pro          | `getProIconPath`        | `<ProIcon />`        |
| 🧑 Profile      | `getProfilIconPath`     | `<ProfilIcon />`     |
| ⚙️ Settings     | `getSettingsIconPath`   | `<SettingsIcon />`   |
| ✅ Success      | `getSuccessIconPath`    | `<SuccessIcon />`    |
| 🛠️ Support      | `getSupportIconPath`    | `<SupportIcon />`    |
| 📋 Table        | `getTableIconPath`      | `<TableIcon />`      |
| 🔤 Text         | `getTextIconPath`       | `<TextIcon />`       |
| 👤 User         | `getUserIconPath`       | `<UserIcon />`       |
| 🧩 UI           | `getUiIconPath`         | `<UiIcon />`         |
| ⚠️ Warning      | `getWarningIconPath`    | `<WarningIcon />`    |

**Example Usage:**

import { IconWrapper, getMailIconPath, MailIcon } from "universal-svg-icons";

<IconWrapper path={getMailIconPath()} pathFill="#0000FF" width="48" height="48" />
<MailIcon pathFill="#0000FF" width="48" height="48" />
```

---

## ⚡ Performance Optimizations

- 📦 **Tree-shakable**: Only includes icons you use
- 🧩 **Dual build system**: Supports both CJS & ESM
- 🛠️ **Type-safe**: Written in TypeScript

---

## 🛠️ Development & Contribution

We welcome contributions! Here's how to get started:

### Setup

```bash
git clone https://github.com/tsb04/universal-svg-icons.git
cd universal-svg-icons
npm install
npm run build
```

### Add a New Icon

1. Add your SVG path to `/src/icons/`
2. Export it in `/src/index.ts`

### Create a Feature Branch

```bash
git checkout -b feature/new-icon
```

### Commit & Push

```bash
git commit -m "Added new icon"
git push origin feature/new-icon
```

Then open a Pull Request on GitHub 🚀

🔧 **Tip**

> All icons should be designed at `24x24` with `viewBox="0 0 24 24"`.
> Use the scale.py script to scale your icon's SVG path to the required size automatically.

---

## 📜 License

Licensed under the [ISC License](./LICENSE).

---

## 📬 Contact & Support

- 🐞 [Report Issues](https://github.com/tsb04/universal-svg-icons/issues)
- 💡 Request Features via GitHub Discussions
- 💬 Need help? Start a GitHub Discussion

---

## ⭐ Like This Project?

If this project helps you, please ⭐ star it on GitHub and share it.
Made with ❤️ by **tsb04** — Happy coding! 🎉
