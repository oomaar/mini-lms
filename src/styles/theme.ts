import { DefaultTheme } from "styled-components";

export const transition = `all 0.3s ease`;

export const SidebarWidth = `250px`;

export const NavbarHeight = `60px`;

export const Shadow = `0px 12px 16px -4px rgba(16, 24, 40, 0.08),
0px 4px 6px -2px rgba(16, 24, 40, 0.03);`;

export const theme: DefaultTheme = {
  colors: {
    primaryColor: `#3c9eff`,
    titleColor: `#393b41`,
    textColor: `#8c8e97`,
    whiteTextColor: `#ffffff`,
    inputColor: `#f5f7fa`,
    containerColor: `#c4cacf`,
    borderColor: `#ecedef`,
    success: `#41a56c`,
    warning: `#fc881b`,
    danger: `#d73f1b`,
    scrollbarThumb: `#a7adb8`,
    barBackground: `#ededed`,
  },
  typography: {
    fontSize: {
      xlFontSize: `35px`,
      lgFontSize: `24px`,
      regularFont: `16px`,
      regularSmFont: `15px`,
      mdFontSize: `14px`,
      smFontSize: `12px `,
      xsFontSize: `10px`,
    },
    fontWeight: {
      bold: `700`,
      semiBold: `600`,
      medium: `500`,
      regular: `400`,
    },
  },
};
