"use client";

import ContentLayout from "@/components/ContentLayout";
import { data } from "@/lib/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WritingsPage() {
  if (!data?.writings?.articles) return null;
  
  return (
    <ContentLayout
      title={data.writings.title}
      subline1={data.writings.subline1}
      subline2={data.writings.subline2}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {/* @ts-ignore */}
        {data.writings.articles?.map((article) => (
          <Link
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
          >
            <Card className="h-full transition-all duration-300 relative overflow-hidden border-border">
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br bg-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <CardHeader className="relative">
                {/* Meta info */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-border" />
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground leading-tight line-clamp-2 transition-colors">
                  {article.title}
                </h3>
              </CardHeader>

              <CardContent className="relative flex flex-col h-full justify-between gap-6">
                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Footer with tags and arrow */}
                <div className="flex items-end justify-between mt-auto">
                  <div className="flex gap-2 flex-wrap">
                    {article.tags.map((tag: any) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-10 h-10 rounded-full ">
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </ContentLayout>
  );
}
