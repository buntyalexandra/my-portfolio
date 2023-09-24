import Navigation from "./components/navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Cutive_Mono } from "next/font/google";
import { Providers } from "./providers";

const cutiveMono = Cutive_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Bunty Portfolio",
  description: "Alex Bunty's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cutiveMono.className}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
