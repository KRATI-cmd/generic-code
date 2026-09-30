import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "../../config/site";
import { Container } from "../ui/Container";

export function TrustBar() {
  return (
    <section className="border-b border-ink-100 bg-brand-50">
      <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 sm:justify-between">
        {siteConfig.trustBar.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-900">{item}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
