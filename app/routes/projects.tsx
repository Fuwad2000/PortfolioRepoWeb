import ProjectsGrid from "~/component/experience/ProjectsGrid";
import { PROJECTS } from "~/data/experience";
import CodeBlock from "~/component/CodeBlock";

const pythonCode = `# FastAPI snippet for AutoInsight
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello from AutoInsight API"}
`;

const javaCode = `// Email service excerpt
public class EmailService {
  public static void main(String[] args) {
    sendEmail("user@example.com", "Hello World!");
  }

  static void sendEmail(String to, String message) {
    System.out.println("Email sent to: " + to);
  }
}
`;

const jsCode = `// Fetch helper for dashboard widgets
async function getData() {
  const response = await fetch("/api/data");
  const payload = await response.json();
  console.log(payload);
}
getData();
`;

const csharpCode = `// .NET service registration example
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddHttpClient();

var app = builder.Build();
app.MapControllers();
app.Run();
`;

const codeBlocks = [
  { code: pythonCode, language: "python", filename: "api.py" },
  { code: javaCode, language: "java", filename: "EmailService.java" },
  { code: jsCode, language: "javascript", filename: "fetchData.js" },
  { code: csharpCode, language: "csharp", filename: "Program.cs" },
];

export default function Projects() {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="overflow-hidden rounded-3xl border border-(--border) bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_70%)] px-6 py-8 shadow-[0_25px_70px_-35px_rgba(16,185,129,0.45)] backdrop-blur-xl">
          <header className="space-y-4">
            <p
              className="text-sm uppercase tracking-[0.35em]"
              style={{ color: "var(--textMuted)" }}
            >
              Portfolio
            </p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
              style={{ color: "var(--textPrimary)" }}
            >
              Projects
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--textSecondary)" }}
            >
              A mix of client work, community builds, and personal labs across
              cloud infrastructure, full-stack engineering, and automation.
            </p>
          </header>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold tracking-tight"
                style={{ color: "var(--textPrimary)" }}
              >
                Featured Builds
              </h2>
              <p className="text-sm" style={{ color: "var(--textSecondary)" }}>
                Production-ready deployments with UI, API, infrastructure, and
                DevOps ownership.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-(--border) bg-(--surface) px-6 py-6 shadow-[0_25px_80px_-45px_rgba(16,185,129,0.45)] backdrop-blur-xl">
            <ProjectsGrid projects={PROJECTS} />
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold tracking-tight"
                style={{ color: "var(--textPrimary)" }}
              >
                Code Snapshots
              </h2>
              <p className="text-sm" style={{ color: "var(--textSecondary)" }}>
                Small excerpts from real services and utilities—ready to copy,
                adapt, and integrate.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {codeBlocks.map((block) => (
              <div
                key={block.filename}
                className="rounded-2xl border border-(--border) bg-(--surface) shadow-[0_18px_50px_-35px_rgba(16,185,129,0.45)] backdrop-blur-xl"
              >
                <CodeBlock
                  code={block.code}
                  language={block.language}
                  filename={block.filename}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
