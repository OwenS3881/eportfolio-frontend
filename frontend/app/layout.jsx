import "./styles/globals.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";

//Global metadata

export const metadata = {
  title: "Owen's ePortfolio",
  description: "ePortfolio",
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
