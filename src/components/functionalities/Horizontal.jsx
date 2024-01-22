export const checkHorizontalRule = (line) => {
  if (line.trim() === "---" || line.trim() === "***" || line.trim() === "___") {
    return <hr />;
  }
  return null;
};
