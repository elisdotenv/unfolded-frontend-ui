// --- A function to handle last updated time
export const lastUpdate = (updatedAt) => {
  const date = new Date(updatedAt); // --- Ensure updatedAt is parsed into a Date object
  if (isNaN(date.getTime())) {
    return 'Invalid date'; // --- Handle invalid date
  }

  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds} Seconds ago`;
  if (minutes < 60) return `${minutes} Mins ago`;
  if (hours < 24) return `${hours} Hrs ago`;
  return `${days} Days ago`;
};

// --- A function to handle last updated time
export const enhancedlastUpdate = (updatedAt) => {
  const date = new Date(updatedAt); // --- Ensure updatedAt is parsed into a Date object
  if (isNaN(date.getTime())) {
    return 'Invalid date'; // --- Handle invalid date
  }

  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // --- If the date is within the last 24 hours, return the relative time
  if (seconds < 60) return `${seconds} Seconds ago`;
  if (minutes < 60) return `${minutes} Mins ago`;
  if (hours < 24) return `${hours} Hrs ago`;

  // --- Format the date as MMM DD
  const options = { month: 'short', day: '2-digit' };
  return date.toLocaleDateString('en-US', options).replace(',', '');
};
