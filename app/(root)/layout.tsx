import React from "react";

import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/navigation/navbar/LeftSidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <LeftSidebar />
      {children}
    </main>
  );
};

export default RootLayout;
