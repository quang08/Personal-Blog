import "../styles/globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { ThemeProvider } from "next-themes";
import React from "react";

import "tailwindcss/tailwind.css";
import { Layout } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
