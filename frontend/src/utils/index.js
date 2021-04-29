export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return [day, month, year].join("-");
};
