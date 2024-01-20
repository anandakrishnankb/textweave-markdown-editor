export const checkBlockQuote = (line) => {
  if (line.startsWith(">")) {
    return <blockquote>{line.slice(1)}</blockquote>;
  }
  return null;
};
