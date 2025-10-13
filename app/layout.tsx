import type { Metadata } from "next";
import { Lexend, Geist_Mono } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GFM - Soluciones IT",
  description: "Proveemos soluciones IT integrales para PYMES en Rosario. Soporte técnico, videovigilancia, cableados, mantenimiento y más. Tu partner tecnológico de confianza.",
  keywords: "soporte técnico, IT, videovigilancia, cableados, mantenimiento, PYMES, Rosario, tecnología, infraestructura",
  authors: [{ name: "GFM Soluciones IT" }],
  creator: "GFM",
  publisher: "GFM",
  robots: "index, follow",
  openGraph: {
    title: "GFM - Soluciones IT para PYMES",
    description: "Tu partner tecnológico de confianza en Rosario. Soporte técnico, videovigilancia, cableados y más.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "GFM - Soluciones IT para PYMES",
    description: "Tu partner tecnológico de confianza en Rosario. Soporte técnico y servicios IT especializados.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${lexend.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
