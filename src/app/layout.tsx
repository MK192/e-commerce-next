import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";

//components
import Nav from "./components/Nav";
import { Providers } from "./components/Providers";

//style
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <Nav />
            {children}
          </StyledComponentsRegistry>
        </body>
      </Providers>
    </html>
  );
}
