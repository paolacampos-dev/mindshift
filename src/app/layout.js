import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const manropeNormal = Manrope({variable: "--thin", subsets: ["latin"], weight: "400"})
const manropeBold = Manrope({varibale: "--bold", subsets: ["latin"], weight: "600"})

export const metadata = {
  title: "MindShift",
  description: "A social media platform for growth and reflective learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manropeNormal.variable} ${manropeBold.variable}`}>
      <Header />
        {children}
      </body>
    </html>
  );
}


//to be able to use it in other elements in the page
// className={interNormal.className}