import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_8px_40px_rgba(0,0,0,0.35)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}