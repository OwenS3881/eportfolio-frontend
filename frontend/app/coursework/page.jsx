import React from "react";

import CourseworkPageComponent from "../components/CourseworkPageComponent";

export const metadata = {
  title: "Coursework",
};

//Displays my course history
const CourseworkPage = () => {
  /*
   * Note: The reason this page is wrapped in a component is because
   * The page was originally a client component, however client components
   * can't have metadata
   */
  return <CourseworkPageComponent />;
};

export default CourseworkPage;
