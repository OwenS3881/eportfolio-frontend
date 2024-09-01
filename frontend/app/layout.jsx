import "./styles/globals.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";

//Global metadata

export const metadata = {
  title: {
    template: "%s | Owen's ePortfolio",
    default: "Owen's ePortfolio",
  },
  applicationName: "Owen's ePortfolio",
  keywords: [
    "University of Florida",
    "UF",
    "Computer Science",
    "Digital Arts and Sciences",
    "Artificial Intelligence",
    "Undergraduate",
    "Honors",
    "Research",
  ],
  author: [{ name: "Owen Szymanski" }],
  publisher: "Owen Szymanski",
  creator: "Owen Szymanski",
  description:
    "This is the ePortfolio of Owen Szymanski, a Computer Science student at the University of Florida",
};

//Main page layout

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scroll />
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
