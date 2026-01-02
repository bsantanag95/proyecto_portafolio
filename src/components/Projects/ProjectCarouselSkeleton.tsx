const ProjectCarouselSkeleton = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div className="h-60 sm:h-90 w-full animate-pulse bg-zinc-200 dark:bg-zinc-800" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarouselSkeleton;
