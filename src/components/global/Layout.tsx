"use client";
import React, {useEffect} from "react";
import Navbar from "./navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const {children} = props;
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });

  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
