import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/section/navbar";
import { Footer } from "@/components/section/footer";
import Providers from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShopSmart",
  description: "ShopSmart and ecommerce store developed by RA.EMPRIC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
