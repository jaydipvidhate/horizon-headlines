export const textToSlug = (text) => {
  return text
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\w-]/g, ""); // Remove non-word characters except dashes
};
