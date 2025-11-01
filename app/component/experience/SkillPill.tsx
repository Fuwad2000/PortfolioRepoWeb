type SkillPillProps = {
  label: string;
};

export default function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-(--border) bg-(--surface) px-3 py-1 text-xs font-medium text-(--textSecondary) shadow-[0_0_20px_-15px_var(--accent)] transition hover:-translate-y-0.5 hover:text-(--textPrimary)">
      {label}
    </span>
  );
}
