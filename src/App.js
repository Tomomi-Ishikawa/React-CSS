import React from "react";
import "./styles.css";
import { InlineStyle } from "./components/inlineStyle";
import { CssModules } from "./components/CssModules";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}
