import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderLayout } from "@/app/components/header/header";
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
  loginModal,
  registerModal,
}: Readonly<{
  children: React.ReactNode;
  loginModal: React.ReactNode;
  registerModal: React.ReactNode;
}>) {
  const theme = getTheme();

  return (
    <html lang="en" data-mode={theme}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={cn("flex min-h-screen flex-col", inter.className)}>
        <HeaderLayout theme={theme} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <div className="max-md:h-[81px]"></div>
        {loginModal}
        {registerModal}
      </body>
    </html>
  );
}
