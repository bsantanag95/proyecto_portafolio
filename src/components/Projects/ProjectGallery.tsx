interface Props {
  images: string[];
}

const ProjectGallery = ({ images }: Props) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((img) => (
        <img key={img} src={img} alt="" className="rounded-xl border" />
      ))}
    </div>
  );
};

export default ProjectGallery;
