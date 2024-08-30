import { Html, Head, Main, NextScript } from "next/document";
import { sans, brand, logo } from "@/styles/fonts/font";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`${sans.variable} ${brand.variable} ${logo.variable}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
