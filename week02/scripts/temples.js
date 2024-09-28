const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
const lastModifiedDate = new Date(lastModified);

const lastModifiedYear = lastModifiedDate.getFullYear();
const lastModifiedMonth = lastModifiedDate.toLocaleString('en-US', { month: 'long' });
const lastModifiedDay = lastModifiedDate.getDate();
const lastModifiedTime = lastModifiedDate.toLocaleTimeString('en-US', { hour12: false });

document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedMonth} ${lastModifiedDay}, ${lastModifiedYear} ${lastModifiedTime}`;