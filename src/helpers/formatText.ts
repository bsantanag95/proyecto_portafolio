function highlightText(text: string) {
  const highlights: { [key: string]: string } = {
    React: "font-semibold text-blue-600 dark:text-blue-400",
  };

  let result = text;

  Object.entries(highlights).forEach(([word, className]) => {
    const regex = new RegExp(`(${word})`, "g");
    result = result.replace(regex, `<span class="${className}">$1</span>`);
  });

  return result;
}

export default highlightText;
