import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/providers";
import { data } from "@/lib/data";

const inter = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const title =
  process.env.NEXT_PUBLIC_PROFILE === "HIMANSHU"
    ? "Himanshu Jaroli - Software Engineer"
    : "Sahil Gupta - Full Stack Developer";
const description =
  "Full-stack developer crafting elegant solutions with modern technologies.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(data.siteUrl),
  icons: {
    icon: data.logo, // needs new circular image
  },
  openGraph: {
    title,
    description,
    url: data.siteUrl,
    siteName: data.fullName,
    images: [{ url: data.image, width: 1200, height: 630, alt: data.fullName }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [data.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <SmoothScrolling> */}
          <div className="min-h-dvh h-dvh md:min-h-screen md:h-screen bg-background font-sans transition-colors">
            <Header />
            <main className="relative top-16 h-[calc(100%-4rem)] w-full tracking-normal">
              {children}
            </main>
          </div>
          {/* </SmoothScrolling> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
