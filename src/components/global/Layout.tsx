import React from "react";
import Navbar from "./navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const {children} = props;

  return (
    <main className="bg-black">
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
