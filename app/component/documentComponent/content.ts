export type DocumentItem = {
  id: string;
  title: string;
  description?: string;
  href: string;
  tag?: string;
  updated?: string;
};

export const documents: DocumentItem[] = [
  {
    id: "resume",
    title: "Fuwad Oladega — Resume",
    description:
      "Latest professional resume highlighting experience and skills.",
    href: "/docs/resume.pdf",
    tag: "Resume",
    updated: "Oct 31, 2025",
  },
  {
    id: "transcript",
    title: "Sheridan College — Unofficial Transcript",
    description: "Academic transcript showcasing coursework and GPA.",
    href: "/docs/transcript.pdf",
    tag: "Transcript",
    updated: "Oct 29, 2025",
  },
];

export const getDocumentById = (id: string) =>
  documents.find((doc) => doc.id === id) ?? null;
