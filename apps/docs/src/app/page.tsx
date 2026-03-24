import { DocsHeader } from "@/components/docs-header";
import { HomeMain } from "@/components/home-main";

export default function HomePage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <DocsHeader />
      <HomeMain />
    </div>
  );
}
