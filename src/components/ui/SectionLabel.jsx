export default function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      {children}
    </div>
  );
}
