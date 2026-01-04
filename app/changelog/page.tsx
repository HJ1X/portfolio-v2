import ContentLayout from "@/components/ContentLayout";
import { Timeline } from "@/components/ui/timeline";
import { data } from "@/lib/data";

export default function ChangelogPage() {
  return (
    <ContentLayout
      title={data.changelog.page.title}
      subline1={data.changelog.page.subline1}
      subline2={data.changelog.page.subline2}
    >
      <Timeline items={data.work.fullTime} />
    </ContentLayout>
  );
}