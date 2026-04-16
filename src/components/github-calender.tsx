import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getLevel } from "../lib/github-dark-theme";

type ContributionDay = {
  date: string;
  contributionCount: number;
  color: string;
};

type ContributionCalendar = {
  weeks: {
    contributionDays: ContributionDay[];
  }[];
};

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DARK_COLORS = [
  "#161b22", // 0 contributions (bg)
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
];

const GithubCalender = ({ data }: { data: ContributionCalendar }) => {
  const { weeks } = data;

  const totalContributions = weeks
    .flatMap((w) => w.contributionDays)
    .reduce((sum, d) => sum + d.contributionCount, 0);

  // Build month label positions
  const monthLabels: { label: string; weekIndex: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const firstDay = week.contributionDays[0];
    if (firstDay) {
      const mo = new Date(`${firstDay.date}T00:00:00`).getMonth();
      if (mo !== lastMonth) {
        monthLabels.push({ label: MONTH_NAMES[mo], weekIndex: wi });
        lastMonth = mo;
      }
    }
  });

  return (
    <section className="w-full px-4">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0D0D1F]/90 p-5 shadow-2xl shadow-[#7B61FF]/10 backdrop-blur-xl sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 h-52 w-52 rounded-full bg-[#7B61FF]/15 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-[#00E5FF]/10 blur-[100px]"
        />

        <div className="relative flex flex-col items-center text-center">
          <div className="mb-6 flex flex-col items-center gap-2">
            <p className="text-xs font-mono uppercase tracking-[0.32em] text-[#00E5FF]/80">
              GitHub activity
            </p>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Contribution Calendar
            </h3>
            <div className="flex flex-row items-center gap-2">
              <p className="text-sm text-white/80">
                {totalContributions.toLocaleString()} contributions in the last
                year
              </p>
              <Link
                href="https://github.com/Ammu108"
                target="_blank"
                className="text-sm text-white/80 underline font-medium"
              >
                Visit my GitHub profile
              </Link>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-2">
            <div className="mx-auto inline-flex min-w-max flex-col items-center">
              <div className="mb-3 flex pl-7">
                {monthLabels.map((m, i) => {
                  const nextWi = monthLabels[i + 1]?.weekIndex ?? weeks.length;
                  return (
                    <span
                      key={m.weekIndex}
                      className="text-left text-[11px] text-white/45"
                      style={{ width: (nextWi - m.weekIndex) * 13 }}
                    >
                      {m.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-3.25 flex flex-col gap-0.75 text-[11px] leading-2.5 text-white/45">
                  {["", "Mon", "", "Wed", "", "Fri", ""].map((label, i) => (
                    <div
                      key={i}
                      className="h-2.5"
                      style={{ visibility: label ? "visible" : "hidden" }}
                    >
                      {label}
                    </div>
                  ))}
                </div>

                <TooltipProvider delayDuration={100}>
                  <div className="flex gap-0.75">
                    {weeks.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-0.75">
                        {week.contributionDays.map((day) => {
                          const level = getLevel(day.contributionCount);
                          return (
                            <Tooltip key={day.date}>
                              <TooltipTrigger asChild>
                                <div
                                  className="h-4 w-4 rounded-[3px] border border-white/5 transition-transform duration-200 hover:scale-110 hover:border-white/20"
                                  style={{
                                    backgroundColor: DARK_COLORS[level],
                                  }}
                                />
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                <p>
                                  <span className="font-semibold">
                                    {day.contributionCount} contribution
                                    {day.contributionCount !== 1 ? "s" : ""}
                                  </span>{" "}
                                  on {day.date}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </TooltipProvider>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-white/45">
            <span className="font-medium text-white/50">Les s</span>
            {DARK_COLORS.map((c) => (
              <div
                key={c}
                className="h-2.5 w-2.5 rounded-[3px] border border-white/5"
                style={{ backgroundColor: c }}
              />
            ))}
            <span className="font-medium text-white/50">More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubCalender;
