"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

//scroll to top of page on every page load
const Scroll = () => {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return <></>;
};

export default Scroll;
