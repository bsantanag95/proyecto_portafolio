interface Props {
  images: string[];
}

const ProjectGallery = ({ images }: Props) => {
  return (
    <div
      className="
    grid gap-4
    grid-cols-1
    sm:grid-cols-2
  "
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Project screenshot ${index + 1}`}
          className="rounded-xl border border-zinc-200 dark:border-zinc-800"
        />
      ))}
    </div>
  );
};

export default ProjectGallery;
