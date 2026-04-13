"use client";

export function AmenxSparkle() {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-white relative z-20">
        <span
          className="bg-clip-text text-transparent drop-shadow-lg"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #7B61FF 0%, #00E5FF 50%, #FF6BBA 100%)",
          }}
        >
          AMENX.TS
        </span>
      </h1>
      <div className="w-160 h-12 lg:h-36 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-indigo-500 to-transparent h-0.5 w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-sky-500 to-transparent h-1.25 w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={1}
          particleDensity={2000}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}

        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className="absolute inset-0 w-full h-full bg-slate-900 mask-[radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
      </div>
    </div>
  );
}
