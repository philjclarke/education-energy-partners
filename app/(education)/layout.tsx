import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function EducationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader variant="education" />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
