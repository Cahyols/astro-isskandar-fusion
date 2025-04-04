
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

interface BentoCardProps {
  className?: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
  content?: ReactNode;
  header?: ReactNode;
  size?: "sm" | "md" | "lg";
  gradient?: boolean;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  title,
  description,
  icon,
  content,
  header,
  size = "md",
  gradient = false,
}: BentoCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1",
        gradient && "bg-gradient-to-br from-card to-card/80",
        size === "sm" && "md:col-span-1 row-span-1",
        size === "md" && "md:col-span-1 row-span-2",
        size === "lg" && "md:col-span-2 row-span-2",
        "dark:bg-zinc-900 dark:border-zinc-800",
        className
      )}
    >
      {header || (
        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
          {icon && <div className="h-10 w-10">{icon}</div>}
          {title && (
            <div>
              <h3 className="tracking-tight text-lg font-medium dark:text-white">{title}</h3>
              {description && (
                <p className="text-sm text-muted-foreground dark:text-zinc-400">{description}</p>
              )}
            </div>
          )}
        </div>
      )}
      {content && <div className="p-6 pt-0">{content}</div>}
    </Card>
  );
}
