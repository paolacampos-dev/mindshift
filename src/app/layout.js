import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const montseNormal = Montserrat({variable: "--thin", subsets: ["latin"], weight: "400"})
const montseBold = Montserrat({variable: "--bold", subsets: ["latin"], weight: "600"})

export const metadata = {
  title: "MindShift",
  description: "A social media platform for growth and reflective learning",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${montseNormal.variable} ${montseBold.variable}`}>
          <Header />
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}


//to be able to use it in other elements in the page
// className={interNormal.className}