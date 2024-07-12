import { Playpen_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ContextProvider } from "@/context/userState";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const playpen_Sans = Playpen_Sans({ subsets: ["latin"] });
export const metadata = {
  title: "Q_A App",
  description: "This is a Q&A App",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playpen_Sans.className}>
        <ContextProvider>
          <Navbar />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
