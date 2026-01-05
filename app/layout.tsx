import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/providers";

const inter = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sahil Gupta - Full Stack Developer",
  description:
    "Full-stack developer crafting elegant solutions with modern technologies.",
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
            <div className="min-h-screen h-screen bg-background font-sans transition-colors">
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
