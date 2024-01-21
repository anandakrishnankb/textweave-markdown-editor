export const checkHorizontalRule = (line) => {
  if (line.trim() === "---" || ine.trim() === "***" || ine.trim() === "___") {
    return <hr />;
  }
  return null;
};
