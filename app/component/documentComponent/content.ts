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
    updated: "Nov 03, 2025",
  },
  {
    id: "coverletter.pdf",
    title: "Cover Letter",
    description:
      "A generic cover letter for a job application in the field of Cloud Computing|DevOps|Software Engineering|IT Support",
    href: "/docs/coverletter.pdf",
    tag: "Cover Letter",
    updated: "Nov 03, 2025",
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
