import { format } from "date-fns";

export const formatGameDate = (date: string) => {
  const tempDate = new Date(date);

  // Format the date as desired
  const formattedDate = format(tempDate, "dd-MM-yyyy HH:mm"); // Example format
  return formattedDate;
};
