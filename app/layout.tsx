import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const kenao = localFont({
  src: "../public/fonts/kenao.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display-fallback",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savia Studio · Tecnología con cuidado artesanal para salud y bienestar",
  description:
    "Diseñamos y construimos ecosistemas digitales completos para clínicas, centros de bienestar y organizaciones de conocimiento en México.",
  metadataBase: new URL("https://saviastudio.io"),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Savia Studio",
    description: "Tecnología con cuidado artesanal para salud y bienestar",
    url: "https://saviastudio.io",
    siteName: "Savia Studio",
    locale: "es_MX",
    type: "website",
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savia Studio",
    description: "Tecnología con cuidado artesanal para salud y bienestar",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${kenao.variable} ${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-cream antialiased">{children}</body>
    </html>
  );
}
