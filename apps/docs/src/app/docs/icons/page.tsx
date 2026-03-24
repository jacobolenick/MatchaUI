import type { Metadata } from "next";
import { IconsPageClient } from "./icons-page-client";

export const metadata: Metadata = {
  title: "Phosphor icons",
};

export default function IconsPage() {
  return <IconsPageClient />;
}
