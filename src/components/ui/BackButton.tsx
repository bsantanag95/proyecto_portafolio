import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BackButtonProps {
  to: string;
}

const BackButton = ({ to }: BackButtonProps) => {
  return (
    <Link
      to={to}
      className="
        inline-flex items-center gap-1.5
        text-xs sm:text-sm
        text-zinc-500 dark:text-zinc-400
        hover:text-zinc-900 dark:hover:text-zinc-100
        transition-colors
      "
    >
      <ArrowLeft className="h-4 w-4" />
    </Link>
  );
};

export default BackButton;
