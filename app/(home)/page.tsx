import { Button } from "@/components/ui/button";
import Image from "next/image";
import { data } from "@/lib/data";
import Link from "next/link";
import { Github, Twitter, Calendar } from "lucide-react";

export default function Home() {
  return (
    <section className="relative h-full flex items-stretch">
      <div className="container mx-auto w-full px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20 items-center h-full">
          {/* Left Content - Positioned slightly above center */}
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.2] animate-slideUp whitespace-pre-line">
              {data.home.title}
            </h1>

            <div className="text-lg md:text-xl max-w-lg text-muted-foreground font-medium tracking-wide animate-slideUp animate-delay-200">
              {data.home.subline}
            </div>

            <div className="flex items-center gap-4 animate-slideUp animate-delay-400">
              <Button size="lg" variant="default" asChild>
                <a
                  href={data.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4" />
                  {data.home.cta.text}
                </a>
              </Button>

              <div className="flex items-center gap-2">
                <Link
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-muted transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href={data.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-muted transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Portrait - Aligned to bottom */}
          <div className="absolute flex bottom-0 right-0 justify-center lg:justify-end items-end animate-fadeIn animate-delay-600 h-full w-1/2">
            <div className="relative w-full h-full">
              <Image
                src={data.home.image}
                alt={data.fullName}
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
}
