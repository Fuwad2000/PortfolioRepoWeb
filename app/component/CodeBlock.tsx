import { useMemo, useState } from "react";

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
};

const keywordMap: Record<string, string[]> = {
  python: [
    "def",
    "return",
    "from",
    "import",
    "as",
    "async",
    "await",
    "FastAPI",
  ],
  java: ["public", "class", "static", "void", "new", "String", "System"],
  javascript: ["const", "let", "async", "await", "function", "return"],
  csharp: ["var", "new", "public", "class", "static", "void", "builder"],
};

const stringRegex = /(\".*?\"|'.*?')/g;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function highlightCode(code: string, language: string) {
  const escaped = escapeHtml(code);
  let highlighted = escaped.replace(
    stringRegex,
    (match) => `<span class="text-emerald-300">${match}</span>`
  );

  const keywords = keywordMap[language] ?? [];
  keywords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "g");
    highlighted = highlighted.replace(
      regex,
      `<span class="text-sky-300">${word}</span>`
    );
  });

  return highlighted;
}

export default function CodeBlock({
  code,
  language = "text",
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const prettyCode = useMemo(
    () => highlightCode(code, language.toLowerCase()),
    [code, language]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code", error);
    }
  };

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) bg-[rgb(7,12,20,0.88)] shadow-[0_18px_50px_-35px_var(--accent)]">
      <div className="flex items-center justify-between border-b border-(--border) px-4 py-2">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-(--textMuted)">
          {filename && <span>{filename}</span>}
          <span>{language}</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-lg border border-(--border) px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-(--textSecondary) transition hover:-translate-y-0.5 hover:text-(--textPrimary)"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="flex-1 overflow-auto px-4 py-4 font-mono text-[0.85rem] leading-relaxed text-(--textSecondary)">
        <code dangerouslySetInnerHTML={{ __html: prettyCode }} />
      </pre>
    </div>
  );
}
