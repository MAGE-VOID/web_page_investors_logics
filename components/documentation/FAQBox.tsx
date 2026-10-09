import type { ReactNode } from "react";

export default function FAQBox({ title, children }: { title: string; children: ReactNode }) {
  return <details className="doc-faq"><summary>{title}<span aria-hidden="true">＋</span></summary><div>{children}</div></details>;
}
