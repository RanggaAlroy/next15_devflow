import React from "react";

import NavLinks from "./NavLinks";

const LeftSidebar = () => {
  return (
    <>
      <section className="background-light900_dark200 fixed left-0 z-40 flex h-screen flex-col gap-6 px-6 pt-32">
        <NavLinks />
      </section>
    </>
  );
};

export default LeftSidebar;
