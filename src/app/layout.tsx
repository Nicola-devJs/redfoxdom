import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderLayout } from "@/app/components/header";
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
        <HeaderLayout theme={theme} />
        {children}
        <div className="max-md:h-[81px]"></div>
      </body>
    </html>
  );
}
