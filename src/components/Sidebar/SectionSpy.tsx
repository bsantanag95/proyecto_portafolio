import type { FC } from "react";

interface SectionSpyProps {
  /** Base id de la sección (ej: "summary", "experience") */
  id: string;
  /** Offset opcional para headers sticky (default: 24) */
  offset?: number;
}

const SectionSpy: FC<SectionSpyProps> = ({ id, offset = 24 }) => {
  return (
    <span
      id={`${id}-spy`}
      aria-hidden="true"
      className="block"
      style={{
        height: 1,
        marginTop: -offset,
      }}
    />
  );
};

export default SectionSpy;
