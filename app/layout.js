import { Chela_One, Playpen_Sans, Roboto } from "next/font/google";
import "./globals.css";
import "../public/assets/css/style.css";
import "../public/assets/libs/simplebar/simplebar.min.css";
import "../public/assets/libs/jsvectormap/css/jsvectormap.min.css";
import "../public/assets/libs/@simonwep/pickr/themes/nano.min.css";
import Navbar from "@/components/Navbar";
import { ContextProvider } from "@/context/userState";
import { Inter } from "next/font/google";

import CustomNavbar from "@/components/CustomNavbar";
import Switcher from "@/components/Switcher";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Q_A App",
  description: "This is a Q&A App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <div>
            <Switcher />
            <div className="page">
              {children}
              <CustomNavbar />
            </div>
            <Footer />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
