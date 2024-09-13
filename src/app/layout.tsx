import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderLayout } from "@/shared/components/header";
import { getTheme } from "@/shared/utils/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redfoxdom",
  description: "Created by Nikola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = getTheme();

  return (
    <html lang="en" data-mode={theme}>
      <body className={inter.className}>
        <HeaderLayout />
        {children}
      </body>
    </html>
  );
}
