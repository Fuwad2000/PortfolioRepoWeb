import DocumentsGallery from "~/component/documentComponent/DocumentsGallery";
import { documents } from "~/component/documentComponent/content";

export default function Documents() {
  return (
    <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="overflow-hidden rounded-3xl border border-(--border) bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_70%)] px-6 py-8 shadow-[0_25px_70px_-35px_rgba(16,185,129,0.45)] backdrop-blur-xl">
          <header className="space-y-3">
            <p
              className="text-sm uppercase tracking-[0.35em]"
              style={{ color: "var(--textMuted)" }}
            >
              Resources
            </p>
            <h1
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--textPrimary)" }}
            >
              Documents
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--textSecondary)" }}
            >
              Every resume, transcript, and supporting doc you’ll need to
              understand how I build cloud-native systems, mentor engineers, and
              ship full-stack products with confidence.
            </p>
          </header>
        </section>

        <section className="rounded-3xl border border-(--border) bg-(--surface) px-6 py-8 shadow-[0_25px_80px_-45px_rgba(16,185,129,0.45)] backdrop-blur-xl">
          <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-(--accent)">
            Document Library
          </h2>
          <p className="mt-2 text-sm" style={{ color: "var(--textSecondary)" }}>
            Preview and download portfolio assets. Each document adapts to light
            and dark mode for easy reading.
          </p>
          <div className="mt-6">
            <DocumentsGallery docs={documents} />
          </div>
        </section>
      </div>
    </main>
  );
}
