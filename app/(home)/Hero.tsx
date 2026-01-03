"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { siteData } from "@/lib/data";
import { Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-full flex items-stretch">
      <div className="container mx-auto w-full px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
          {/* Left Content - Positioned slightly above center */}
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground leading-[1.1] animate-slideUp whitespace-pre-line">
              {siteData.profile.title}
            </h1>


            <div className="text-xl md:text-2xl text-muted-foreground font-medium tracking-tight leading-snug animate-slideUp animate-delay-200">
              Currently building{" "}
              <Link href="https://Naukri-outreach.vercel.app/" className="hover:opacity-80 transition-opacity">
                <Highlight className="text-foreground">Naukri Outreach</Highlight>
              </Link>{" "}
              and{" "}
              <Link href="https://novacraftsai.com/" className="hover:opacity-80 transition-opacity">
                <Highlight className="text-foreground">NovaCraftsAI</Highlight>
              </Link>
              , while engineering production systems at{" "}
              <Link href={siteData.profile.companyUrl} className="hover:opacity-80 transition-opacity">
                <Highlight className="text-foreground">{siteData.profile.currentCompany}</Highlight>
              </Link>
              .
            </div>

            <div className="animate-slideUp animate-delay-400">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-full border-2 hover:bg-foreground hover:text-background transition-all duration-300"
                asChild
              >
                <a
                  href={siteData.profile.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let&apos;s chat →
                </a>
              </Button>
            </div>
          </div>

          {/* Right Portrait - Aligned to bottom */}
          <div className="absolute flex bottom-0 right-0 justify-center lg:justify-end items-end animate-fadeIn animate-delay-600 h-full w-1/2">
            <div className="relative w-full h-full portrait-shadow">
              <Image
                src="/sahil-1.png"
                alt={siteData.profile.fullName}
                fill
                style={{
                  filter:
                    "drop-shadow(0.2rem 0.4rem 0.8rem rgba(0, 0, 0, 0.5)) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))",
                }}
                className="absolute left-0 bottom-0 object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
