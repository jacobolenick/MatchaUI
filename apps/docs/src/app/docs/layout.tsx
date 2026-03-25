import { DocsHeader } from "@/components/docs-header";
import { DocsSideNav } from "@/components/docs-side-nav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background flex min-h-0 flex-1 flex-col">
      <DocsHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-8 sm:flex-row sm:px-6 lg:gap-12">
        <DocsSideNav />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
