"use client";

import ContentLayout from "@/components/ContentLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { data } from "@/lib/data";
import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

export default function CreationsPage() {
  const [selectedCreation, setSelectedCreation] = useState<
    (typeof data.creations.items)[number]
  >(data.creations.items[0]);

  const imageContainerRef = useRef<HTMLAnchorElement>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const calculateHeight = () => {
      if (imageContainerRef.current) {
        const rect = imageContainerRef.current.getBoundingClientRect();
        const distanceToBottom = window.innerHeight - rect.top;
        setImageHeight(distanceToBottom);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
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
          className=""
        >
          {data.creations.items.map((creation: any, index: number) => (
            <motion.div
              key={creation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-b last:border-b-0 border-border"
              transition={{
                duration: 0.3,
                delay: 0.3 + index * 0.1,
                ease: "easeInOut",
              }}
            >
              <AccordionItem value={creation.id}>
                <AccordionTrigger onClick={() => setSelectedCreation(creation)}>
                  {creation.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="">
                    <p className="text-muted-foreground">
                      {creation.description}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Right Side - Image Only */}
        <motion.a
          ref={imageContainerRef}
          href={selectedCreation.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          className="group relative block w-full rounded-t-3xl overflow-hidden border border-b-0 border-border"
          style={{ height: imageHeight > 0 ? `${imageHeight}px` : "auto" }}
        >
          {/* Image */}
          {/* <Image
            src={selectedCreation.image}
            alt={selectedCreation.title}
            fill
            className="object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-105"
            priority
          /> */}
          <div className="w-full h-full pointer-events-one">
            <iframe
              src={selectedCreation.href}
              title={selectedCreation.title}
              className="w-full h-full"
            />
          </div>

          {/* Hover Overlay */}
          {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="default" className="">
              View Creation
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div> */}
        </motion.a>
      </div>
    </ContentLayout>
  );
}
