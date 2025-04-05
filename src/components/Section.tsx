
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  id: string;
  children: React.ReactNode;
  index: number;
  isReferences?: boolean;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ title, id, children, index, isReferences = false, className, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          'py-12 scroll-mt-20',
          index % 2 === 0 ? 'bg-white' : 'bg-secondary',
          className
        )}
        {...props}
      >
        <div className={cn("container max-w-4xl mx-auto px-4 sm:px-6", 
          isReferences ? "max-w-5xl" : "")}>
          <h2 className="text-3xl font-bold mb-6 text-primary animate-fade-in">{title}</h2>
          <div className={cn(
            "animate-slide-up",
            isReferences ? "" : "prose prose-slate max-w-none"
          )}>
            {children}
          </div>
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
