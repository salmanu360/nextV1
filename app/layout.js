import { Inter } from "next/font/google";
import "./globals.css";
import LogIn from "../components/LogIn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Q_A App",
  description: "this is an Q_A APP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LogIn />
        {children}
      </body>
    </html>
  );
}
