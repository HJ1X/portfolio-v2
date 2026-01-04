"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import ContentLayout from "@/components/ContentLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { data } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CreationsPage() {
  const [selectedCreation, setSelectedCreation] =
    useState<(typeof data.creations.items)[number]>(
      data.creations.items[0]
    );
  
  const imageContainerRef = useRef<HTMLAnchorElement>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const calculateHeight = () => {
      if (imageContainerRef.current) {
        const rect = imageContainerRef.current.getBoundingClientRect();
        const distanceToBottom = (window.innerHeight - rect.top);
        setImageHeight(distanceToBottom);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    // window.addEventListener("scroll", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
    //   window.removeEventListener("scroll", calculateHeight);
    };
  }, []);

  return (
    <ContentLayout
      title={data.creations.page.title}
      subline1={data.creations.page.subline1}
      subline2={data.creations.page.subline2}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[24rem_1fr] gap-12 lg:gap-20">
        {/* Left Side - Accordion */}
        <Accordion
          type="single"
          collapsible
          defaultValue={data.creations.items[0].id}
        >
          {data.creations.items.map((creation: any) => (
            <AccordionItem key={creation.id} value={creation.id}>
              <AccordionTrigger onClick={() => setSelectedCreation(creation)}>
                {creation.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <p className="text-base text-muted-foreground">
                    {creation.description}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Right Side - Image Only */}
        <a
          ref={imageContainerRef}
          href={selectedCreation.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full rounded-t-xl overflow-hidden border border-b-0 border-border"
          style={{ height: imageHeight > 0 ? `${imageHeight}px` : 'auto' }}
        >
          {/* Image */}
          <Image
            src={selectedCreation.image}
            alt={selectedCreation.title}
            fill
            className="object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-105"
            priority
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="default" className="">
              View Creation
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </a>
      </div>
    </ContentLayout>
  );
}
