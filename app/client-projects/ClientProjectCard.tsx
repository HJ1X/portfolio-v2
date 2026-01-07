"use client";

import { Card, CarouselContext } from "@/components/ui/apple-cards-carousel";
import { data } from "@/lib/data";
import { cn } from "@/lib/utils";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useContext } from "react";

const ClientProjectCard = ({
  project,
  index,
}: {
  project: any;
  index: number;
}) => {
  const { currentIndex } = useContext(CarouselContext);

  return (
    <Card
      key={project.id}
      index={index}
      card={{
        src: project.image || data.work.ui.fallbackImage,
        title: project.name,
        category: project.category,
        content: (
          <div
            className={cn(
              "absolute h-full w-full inset-0 z-40 grow flex flex-col justify-between p-5 sm:p-6 md:p-8 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out pointer-events-none group-hover:pointer-events-auto",
              currentIndex === index && "opacity-100 translate-y-0"
            )}
          >
            {/* Logo */}
            <div className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16">
              <div className="w-full h-full rounded-full overflow-hidden bg-black p-2 flex items-center justify-center">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  height={42}
                  width={42}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="text-left mt-18 sm:mt-24 md:mt-28 flex flex-col gap-4 w-3xs sm:w-2xs md:w-md">
              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed text-white/90 font-sans">
                {project.description}
              </p>

              {/* Technologies */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: any) => (
                    <Badge
                      key={tech}
                      className="border-white/30 bg-white/10 text-white/70 rounded-sm"
                      variant="outline"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              {/* Link Button */}
              <div className="flex justify-start">
                <Button className="cursor-pointer" variant="secondary">
                  Open Link <IconArrowNarrowRight />
                </Button>
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
};

export default ClientProjectCard;
