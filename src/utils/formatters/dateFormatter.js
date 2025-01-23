// src/utils/formatters/dateFormatter.js
export const formatDateToISO = (date) => {
  return new Date(date).toISOString();
};

export const formatDateToLocal = (date) => {
  return new Date(date).toLocaleDateString();
};
