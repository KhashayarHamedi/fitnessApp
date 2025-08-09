export function BackgroundShapes() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* very subtle floating shapes */}
      <span className="bg-shape shape-a absolute left-[6%] top-[18%] h-40 w-40 rounded-3xl" />
      <span className="bg-shape shape-b absolute right-[8%] top-[26%] h-32 w-48 rounded-3xl" />
      <span className="bg-shape shape-b absolute left-[22%] bottom-[18%] h-28 w-28 rounded-full" />
      <span className="bg-shape shape-a absolute right-[22%] bottom-[12%] h-36 w-28 rounded-2xl" />
    </div>
  );
}


