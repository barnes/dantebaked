import React from "react";
import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      { children }
      <Footer />
    </div>
  );
}