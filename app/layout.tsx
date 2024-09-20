import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({weight: ['400','500', '600', '700', '800'], style: ['normal', "italic"], subsets: ['latin']});

export const metadata: Metadata = {
  title: "Wbarber Club",
  description: "A W. BARBER CLUB é uma Barbearia em Goiânia contemporânea que oferece uma experiência única e inesquecível para seus clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
