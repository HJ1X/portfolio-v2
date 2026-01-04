import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Headline from "./Headline";

interface ContentLayoutProps {
  children: ReactNode;
  title: ReactNode;
  subline1: ReactNode;
  subline2: ReactNode;
  contentInContaienr?: boolean;
}

const ContentLayout = ({
  children,
  title,
  subline1,
  subline2,
  contentInContaienr = true,
}: ContentLayoutProps) => {
  return (
    <div className="pt-12">
      <div className="container px-8 mx-auto">
        <Headline title={title} subline1={subline1} subline2={subline2} />
      </div>
      <div className={cn(contentInContaienr ? "container px-8 mx-auto" : "")}>
        {children}
      </div>
    </div>
  );
};

export default ContentLayout;
