import { useMemo, useState, type FC } from "react";
import type { DocumentItem } from "./content";

type DocumentsGalleryProps = {
  docs: DocumentItem[];
};

type ViewerDoc = DocumentItem & { extension: string };

const extensionFromHref = (href: string) => {
  const clean = href.split("?")[0];
  const match = clean.match(/\.([a-zA-Z0-9]+)$/);
  return match ? match[1].toLowerCase() : "";
};

const viewableExtensions = new Set([
  "pdf",
  "png",
  "jpg",
  "jpeg",
  "gif",
  "webp",
]);

const renderPdfObject = (href: string, className: string, title: string) => (
  <object
    data={`${href}#zoom=page-fit`}
    type="application/pdf"
    className={className}
    aria-label={title}
  >
    <iframe src={href} title={title} className={`${className} rounded-2xl`} />
    <p className="p-4 text-sm" style={{ color: "var(--textSecondary)" }}>
      Your browser could not display this PDF preview. Use the download button
      to view the file in a new tab.
    </p>
  </object>
);

const DocumentsGallery: FC<DocumentsGalleryProps> = ({ docs }) => {
  const items: ViewerDoc[] = useMemo(
    () =>
      docs.map((doc) => ({
        ...doc,
        extension: extensionFromHref(doc.href),
      })),
    [docs]
  );

  const [activeDoc, setActiveDoc] = useState<ViewerDoc | null>(null);

  const handleDownload = (doc: DocumentItem) => {
    if (typeof window === "undefined") return;
    const anchor = document.createElement("a");
    anchor.href = doc.href;
    anchor.download = doc.href.split("/").pop() || doc.id;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const renderCardPreview = (doc: ViewerDoc) => {
    if (!viewableExtensions.has(doc.extension)) {
      return (
        <div className="h-44 w-full rounded-2xl border border-default bg-(--background)/80 flex items-center justify-center text-(--textSecondary)">
          <span className="text-xs uppercase tracking-[0.4em]">
            {doc.extension || "file"}
          </span>
        </div>
      );
    }

    if (doc.extension === "pdf") {
      return renderPdfObject(
        doc.href,
        "h-44 w-full rounded-2xl border border-default overflow-hidden",
        doc.title
      );
    }

    return (
      <img
        src={doc.href}
        alt={doc.title}
        className="h-44 w-full rounded-2xl border border-default object-cover"
        loading="lazy"
      />
    );
  };

  const viewerContent = (doc: ViewerDoc) => {
    if (!viewableExtensions.has(doc.extension)) {
      return (
        <div
          className="rounded-3xl border border-default bg-surface/80 p-10 text-center"
          style={{ color: "var(--textSecondary)" }}
        >
          <p className="text-sm">
            Inline preview is not available for this file type. Use the download
            button below to view it in a new tab.
          </p>
        </div>
      );
    }

    if (doc.extension === "pdf") {
      return renderPdfObject(
        doc.href,
        "h-[70vh] w-full rounded-3xl border border-default",
        doc.title
      );
    }

    return (
      <img
        src={doc.href}
        alt={doc.title}
        className="max-h-[70vh] w-full object-contain rounded-3xl border border-default"
      />
    );
  };

  return (
    <div className="space-y-8 mx-auto max-w-6xl w-full">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((doc) => (
          <article
            key={doc.id}
            className="group rounded-3xl border border-default bg-surface/70 px-5 py-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-glow"
          >
            {renderCardPreview(doc)}
            <div className="flex items-center justify-between gap-4 mt-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-(--accent)">
                  {doc.tag ?? "Document"}
                </p>
                <h2
                  className="mt-2 text-lg font-semibold"
                  style={{ color: "var(--textPrimary)" }}
                >
                  {doc.title}
                </h2>
              </div>
              <span
                className="rounded-full border border-accent px-3 py-1 text-xs"
                style={{ color: "var(--textPrimary)" }}
              >
                {doc.extension.toUpperCase() || "FILE"}
              </span>
            </div>

            {doc.description && (
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--textSecondary)" }}
              >
                {doc.description}
              </p>
            )}

            {doc.updated && (
              <p className="mt-3 text-xs" style={{ color: "var(--textMuted)" }}>
                Updated: {doc.updated}
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveDoc(doc)}
                className="px-4 py-2 rounded-2xl btn-accent font-semibold shadow-glow hover:-translate-y-0.5 transition"
                type="button"
              >
                View
              </button>
              <button
                onClick={() => handleDownload(doc)}
                className="px-4 py-2 rounded-2xl border border-accent hover:-translate-y-0.5 transition"
                style={{ color: "var(--textPrimary)" }}
                type="button"
              >
                Download
              </button>
            </div>
          </article>
        ))}
      </section>

      {activeDoc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl px-6 py-6">
            <div className="rounded-3xl border border-default bg-surface/90 backdrop-blur-xl shadow-[0_25px_70px_-30px_rgba(0,0,0,0.6)] px-6 py-6 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-(--accent)">
                    {activeDoc.tag ?? "Document"}
                  </p>
                  <h2
                    className="mt-1 text-xl font-semibold"
                    style={{ color: "var(--textPrimary)" }}
                  >
                    {activeDoc.title}
                  </h2>
                  {activeDoc.updated && (
                    <p
                      className="text-xs mt-1"
                      style={{ color: "var(--textMuted)" }}
                    >
                      Updated: {activeDoc.updated}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setActiveDoc(null)}
                  className="px-3 py-1 text-sm rounded-full border border-default hover:bg-(--surface) transition"
                  style={{ color: "var(--textPrimary)" }}
                  type="button"
                >
                  Close
                </button>
              </div>

              <div className="rounded-3xl border border-default bg-(--background)/80 p-4">
                {viewerContent(activeDoc)}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="space-x-3">
                  <button
                    onClick={() => handleDownload(activeDoc)}
                    className="px-4 py-2 rounded-2xl btn-accent font-semibold shadow-glow hover:-translate-y-0.5 transition"
                    type="button"
                  >
                    Download
                  </button>
                  <a
                    href={activeDoc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-2xl border border-accent hover:-translate-y-0.5 transition"
                    style={{ color: "var(--textPrimary)" }}
                  >
                    Open in new tab
                  </a>
                </div>
                <p
                  className="text-xs"
                  style={{ color: "var(--textSecondary)" }}
                >
                  Files served from <code>/public/docs/</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentsGallery;
