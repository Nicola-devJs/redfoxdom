import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getTheme } from "@/shared/helpers/theme";
import { cn } from "@/shared/helpers/cn";
import { Providers } from "@/features/auth/providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
