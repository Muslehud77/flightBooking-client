export const convertDate = (isoString) => {
 const date = new Date(isoString);

 // Format the date parts using UTC methods
 const day = String(date.getUTCDate()).padStart(2, "0");
 const month = date.toLocaleString("default", {
   month: "long",
   timeZone: "UTC",
 });
 const year = date.getUTCFullYear();

 // Format the time parts using UTC methods
 let hours = date.getUTCHours();
 const minutes = String(date.getUTCMinutes()).padStart(2, "0");
 const ampm = hours >= 12 ? "PM" : "AM";

 hours = hours % 12;
 hours = hours ? hours : 12; // The hour '0' should be '12'

 const formattedTime = `${hours}:${minutes} ${ampm}`;

 // Combine date and time parts
 const formattedDate = `${day} ${month} ${year}, ${formattedTime}`;
 return formattedDate;
};
