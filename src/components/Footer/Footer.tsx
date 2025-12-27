const Footer = () => {
  return (
    <footer
      className="
      border-t border-zinc-200 dark:border-zinc-800
      px-6 py-4 text-center text-sm
      text-zinc-600 dark:text-zinc-400
    "
    >
      © {new Date().getFullYear()} Esteban Santana · React & TypeScript
    </footer>
  );
};

export default Footer;
