const SKELETON_MONTHS = [
  { label: "Jan", width: 65 },
  { label: "Feb", width: 52 },
  { label: "Mar", width: 65 },
  { label: "Apr", width: 52 },
  { label: "May", width: 65 },
  { label: "Jun", width: 52 },
  { label: "Jul", width: 65 },
  { label: "Aug", width: 52 },
  { label: "Sep", width: 65 },
  { label: "Oct", width: 52 },
  { label: "Nov", width: 65 },
  { label: "Dec", width: 52 },
];

const WEEKS = Array.from({ length: 53 });
const DAYS = Array.from({ length: 7 });

const GithubCalenderSkeletons = () => {
  return (
    <section
      className="w-full px-4"
      aria-label="Loading GitHub contribution calendar"
    >
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0D0D1F]/90 p-5 shadow-2xl shadow-[#7B61FF]/10 backdrop-blur-xl sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 h-52 w-52 rounded-full bg-[#7B61FF]/15 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-[#00E5FF]/10 blur-[100px]"
        />

        <div className="relative flex animate-pulse flex-col items-center text-center">
          <div className="mb-6 flex flex-col items-center gap-2">
            <div className="h-3 w-36 rounded-full bg-[#00E5FF]/30" />
            <div className="h-8 w-64 rounded-md bg-white/12" />
            <div className="mt-1 h-4 w-80 rounded-md bg-white/10" />
          </div>

          <div className="w-full overflow-x-auto pb-2">
            <div className="mx-auto inline-flex min-w-max flex-col items-center">
              <div className="mb-3 flex pl-7">
                {SKELETON_MONTHS.map((month) => (
                  <span
                    key={`${month.label}-${month.width}`}
                    className="text-left text-[11px] text-white/35"
                    style={{ width: month.width }}
                  >
                    {month.label}
                  </span>
                ))}
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-3.25 flex flex-col gap-0.75 text-[11px] leading-2.5 text-white/35">
                  {["", "Mon", "", "Wed", "", "Fri", ""].map((label, i) => (
                    <div
                      key={`dow-${i}`}
                      className="h-2.5"
                      style={{ visibility: label ? "visible" : "hidden" }}
                    >
                      {label}
                    </div>
                  ))}
                </div>

                <div className="flex gap-0.75">
                  {WEEKS.map((_, wi) => (
                    <div key={`week-${wi}`} className="flex flex-col gap-0.75">
                      {DAYS.map((__, di) => {
                        const opacity = 0.16 + ((wi + di) % 5) * 0.06;
                        return (
                          <div
                            key={`day-${wi}-${di}`}
                            className="h-4 w-4 rounded-[3px] border border-white/5"
                            style={{
                              backgroundColor: `rgba(123, 97, 255, ${opacity})`,
                            }}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-white/45">
            <span className="font-medium text-white/50">Less</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`legend-${i}`}
                className="h-2.5 w-2.5 rounded-[3px] border border-white/5"
                style={{
                  backgroundColor: `rgba(57, 211, 83, ${0.1 + i * 0.18})`,
                }}
              />
            ))}
            <span className="font-medium text-white/50">More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubCalenderSkeletons;
