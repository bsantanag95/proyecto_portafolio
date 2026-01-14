import type { FC } from "react";

interface SectionSpyProps {
  id: string;
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
