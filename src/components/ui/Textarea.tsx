import type { FC } from "react";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  rows?: number;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<TextareaProps> = ({
  label,
  name,
  value,
  placeholder,
  rows = 5,
  error,
  onChange,
}) => {
  const id = `textarea-${name}`;

  return (
    <div className="space-y-1">
      <label
        htmlFor={id}
        className="
    block text-xs font-semibold
    uppercase tracking-wide
    text-zinc-600 dark:text-zinc-400
  "
      >
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`
    w-full rounded-xl px-4 py-2.5
    text-sm
    bg-white dark:bg-zinc-950
    border resize-none
    ${
      error
        ? "border-red-500 focus:ring-red-500/30"
        : "border-zinc-300 dark:border-zinc-700 focus:ring-emerald-500/30"
    }
    focus:outline-none focus:ring-4
    focus:border-transparent
    transition-all duration-200
  `}
      />

      {error && (
        <p id={`${id}-error`} className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;
