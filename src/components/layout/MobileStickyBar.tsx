import { Phone, FileText } from "lucide-react";
import { siteConfig } from "../../config/site";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-ink-200 bg-white shadow-[0_-4px_16px_rgba(15,34,55,0.08)] lg:hidden">
      <a
        href={siteConfig.contact.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-ink-200 bg-brand-800 py-3.5 text-sm font-bold text-white active:bg-brand-900"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call
      </a>
      <a
        href="#contact"
        className="flex flex-1 items-center justify-center gap-2 bg-accent-500 py-3.5 text-sm font-bold text-white active:bg-accent-600"
      >
        <FileText className="h-4 w-4" aria-hidden="true" />
        Get Quote
      </a>
    </div>
  );
}
