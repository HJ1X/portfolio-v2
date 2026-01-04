import ContentLayout from "@/components/ContentLayout";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { data } from "@/lib/data";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default function WorkPage() {
  const cards = data.work.clientProjects.map((project: any, index: number) => (
    <Card
      key={project.id}
      card={{
        src: project.image || data.work.ui.fallbackImage,
        title: project.name,
        category: project.category,
        content: (
          <div className="absolute h-full w-full inset-0 z-40 grow flex flex-col justify-between p-8 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out pointer-events-none group-hover:pointer-events-auto">
            {/* Logo */}
            <div className="absolute top-8 right-8 w-12 h-12 md:w-16 md:h-16">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                fill
                className="object-contain"
              />
            </div>

            {/* Content Container */}
            <div className="text-left mt-28 flex flex-col gap-4 w-md">
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
      index={index}
    />
  ));

  return (
    <ContentLayout
      title={data.work.page.title}
      subline1={data.work.page.subline1}
      subline2={data.work.page.subline2}
      contentInContaienr={false}
    >
      <Carousel items={cards} />
    </ContentLayout>
  );
}
