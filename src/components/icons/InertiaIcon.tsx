interface Props {
  size?: number;
  className?: string;
}

const DoubleArrowIcon = ({ size = 20, className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="double-arrow-gradient"
          x1="0"
          x2="128"
          y1="64"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9553e9" />
          <stop offset="1" stopColor="#6d74ed" />
        </linearGradient>
      </defs>

      <path
        fill="url(#double-arrow-gradient)"
        d="M92.433 28.433H55.625L91.192 64L55.625 99.567h36.808L128 64zm-55.625 0H0L35.567 64L0 99.567h36.808L72.375 64z"
      />
    </svg>
  );
};

export default DoubleArrowIcon;
