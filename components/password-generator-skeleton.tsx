import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const PASSWORD_BAR_WIDTHS = ["72%", "58%", "66%", "50%", "76%", "62%"];

/**
 * Render loading skeleton layout for password generator workspace.
 *
 * @returns Skeleton placeholder element.
 */
export function PasswordGeneratorSkeleton() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading password generator"
      className="grid w-full gap-4 sm:gap-6 lg:h-[calc(100dvh-3rem)] lg:grid-cols-[minmax(24rem,30rem)_minmax(0,1fr)]"
    >
      <span className="sr-only">Loading password generator...</span>

      {/* Left Column: Form & Configuration */}
      <div className="min-w-0 lg:overflow-y-auto">
        <div className="mb-3.5">
          <Skeleton className="h-9 w-56 rounded-lg sm:h-10 sm:w-64" />
          <div className="mt-1.5 space-y-1.5">
            <Skeleton className="h-3.5 w-full max-w-80 rounded" />
            <Skeleton className="h-3.5 w-48 rounded" />
          </div>
        </div>

        <div className="space-y-3 rounded-3xl bg-card p-4">
          {/* Password Length Control */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Skeleton className="size-4 rounded" />
                <Skeleton className="h-3.5 w-28 rounded" />
              </div>
              <div className="flex items-center gap-1.5">
                <Skeleton className="h-8 w-16 rounded-md" />
                <Skeleton className="h-3.5 w-9 rounded" />
              </div>
            </div>
            <Skeleton className="h-2 w-full rounded-full" />
            <div className="flex items-center justify-between gap-1.5 pt-0.5">
              <Skeleton className="h-3 w-11 rounded" />
              <div className="flex flex-wrap gap-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className={
                      i === 0
                        ? "h-6 w-8 rounded-md bg-primary/30 dark:bg-primary/25"
                        : "h-6 w-8 rounded-md"
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Password Quantity Control */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Skeleton className="size-4 rounded" />
                <Skeleton className="h-3.5 w-24 rounded" />
              </div>
              <div className="flex items-center gap-1.5">
                <Skeleton className="h-8 w-16 rounded-md" />
                <Skeleton className="h-3.5 w-9 rounded" />
              </div>
            </div>
            <Skeleton className="h-2 w-full rounded-full" />
            <div className="flex items-center justify-between gap-1.5 pt-0.5">
              <Skeleton className="h-3 w-11 rounded" />
              <div className="flex flex-wrap gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className={
                      i === 1
                        ? "h-6 w-8 rounded-md bg-primary/30 dark:bg-primary/25"
                        : "h-6 w-8 rounded-md"
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Character Sets */}
          <div className="space-y-2">
            <Skeleton className="h-3.5 w-24 rounded" />
            <div className="grid grid-cols-2 gap-1.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg border border-border/60 px-2.5 py-2"
                >
                  <Skeleton className="size-4 shrink-0 rounded-[4px] bg-primary/25 dark:bg-primary/20" />
                  <Skeleton className="h-3.5 flex-1 rounded" />
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Rules */}
          <div className="space-y-2">
            <Skeleton className="h-3.5 w-12 rounded" />
            <div className="grid grid-cols-1 gap-x-3 gap-y-1.5 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2 py-1">
                  <Skeleton className="size-3.5 shrink-0 rounded-[4px]" />
                  <Skeleton className="h-3.5 flex-1 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <Skeleton className="h-11 w-full rounded-full bg-primary/35 dark:bg-primary/25" />
        </div>
      </div>

      {/* Right Column: Password Display List */}
      <section className="flex flex-col overflow-hidden rounded-3xl bg-card lg:h-full lg:min-h-0">
        {/* Header */}
        <div className="px-5 pt-5 sm:px-7 sm:pt-7">
          <Skeleton className="h-8 w-44 rounded-lg" />
          <Skeleton className="mt-2 h-4 w-64 rounded sm:w-80" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 px-5 pt-4 sm:px-7">
          <Skeleton className="h-10 w-32 rounded-full bg-primary/35 dark:bg-primary/25" />
          <Skeleton className="h-10 w-24 rounded-full" />
          <Skeleton className="h-10 w-28 rounded-full" />
        </div>

        {/* Passwords Stream */}
        <div className="mt-4 min-h-0 flex-1 divide-y divide-border overflow-hidden border-y border-border">
          {PASSWORD_BAR_WIDTHS.map((width, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-3 px-5 py-3.5 sm:px-7"
            >
              <Skeleton
                className="h-5 rounded font-mono sm:h-6"
                style={{ width }}
              />
              <Skeleton className="size-4 shrink-0 rounded" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
