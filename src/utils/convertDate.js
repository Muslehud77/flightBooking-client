export const convertDate = (isoString) => {
  const date = new Date(isoString);

  // Format the date parts
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Format the time parts
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  const formattedTime = `${hours}:${minutes} ${ampm}`;

  // Combine date and time parts
  const formattedDate = `${day} ${month} ${year}, ${formattedTime}`;
  return formattedDate;
};
