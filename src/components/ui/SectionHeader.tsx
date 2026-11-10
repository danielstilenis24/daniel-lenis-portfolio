import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  index: string;
  tag: string;
  title: string;
  description?: string;
  align?: 'left' | 'between';
  className?: string;
  rightSlot?: React.ReactNode;
}

export function SectionHeader({
  index,
  tag,
  title,
  description,
  align = 'between',
  className,
  rightSlot,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16 border-b border-slate-800/80 pb-8',
        align === 'between' && 'flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6',
        className
      )}
    >
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-obsidian-card border border-slate-800 mb-4">
          <span className="font-mono text-xs font-semibold text-brand-cyan tracking-wider">
            {'//'}{index}
          </span>
          <span className="h-3 w-[1px] bg-slate-700" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest text-slate-300">
            {tag}
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-slate-50 leading-[1.12]">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {rightSlot && <div className="shrink-0">{rightSlot}</div>}
    </div>
  );
}
