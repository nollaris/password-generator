import * as React from "react";
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "skeleton-shimmer rounded-md bg-border/60 dark:bg-muted",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
