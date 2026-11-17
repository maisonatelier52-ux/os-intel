// Display names for category slugs.
// Add a slug here only when its label should differ from the default
// (first letter capitalised). Slugs/URLs are never changed by this file.
const CATEGORY_LABELS = {
  "courts-justice": "Courts & Justice",
};

export const categoryLabel = (key = "") => {
  const k = String(key).toLowerCase();
  return CATEGORY_LABELS[k] || k.charAt(0).toUpperCase() + k.slice(1);
};