import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderLayout } from "@/app/components/header";
import { getTheme } from "@/shared/utils/theme";
import { Footer } from "./components/footer/footer";
import { cn } from "@/shared/utils/cn";

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
      <body className={cn("flex min-h-screen flex-col", inter.className)}>
        <HeaderLayout theme={theme} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <div className="max-md:h-[81px]"></div>
      </body>
    </html>
  );
}
