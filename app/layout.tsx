"use client";

import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 🔴 auth pages ke liye header/footer hide
  const hideLayout =
    pathname.startsWith("/auth/login") ||
    pathname.startsWith("/auth/signup");

  return (
    <html lang="en">
      <body>
        {!hideLayout && <Header />}

        <main>{children}</main>

        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
