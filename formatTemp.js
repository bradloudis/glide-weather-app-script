// this function takes in the temp and formats it for display

function formatTemp(temp) {
  const formatted = Math.round(temp).toFixed(0);
  return `${formatted}℉`;
}
