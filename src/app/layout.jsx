import { Geist, Geist_Mono, Poppins, Titillium_Web } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CartProvider from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titillium = Titillium_Web({
  variable: "--font-titillium",
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Yantun Khaijan",
    template: "%s | Yantun Khaijan",
  },
  description:
    "Discover delicious recipes, explore authentic flavors, and enjoy your favorite meals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${titillium.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="container mx-auto py-10">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
