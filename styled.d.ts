import "styled-components";
import { ThemeProps } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeProps {
    colors: {
      primaryColor: string;
      titleColor: string;
      textColor: string;
      whiteTextColor: string;
      inputColor: string;
      containerColor: string;
      borderColor: string;
      success: string;
      warning: string;
      danger: string;
      scrollbarThumb: string;
      barBackground: string;
    };
    typography: {
      fontSize: {
        xlFontSize: string;
        lgFontSize: string;
        regularFont: string;
        regularSmFont: string;
        mdFontSize: string;
        smFontSize: string;
        xsFontSize: string;
      };
      fontWeight: {
        bold: string;
        semiBold: string;
        medium: string;
        regular: string;
      };
    };
  }
}
