export const currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Helper function to format date for input[type="date"]
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-CA");
};
