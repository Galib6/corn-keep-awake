const cron = require("node-cron");
const fetch = require("node-fetch").default; // Use .default to get the default export

// Replace with your Strapi API URL
const apiUrl = "https://management-api-a6m8.onrender.com/api/tests";

// Ping the API every 5 minutes
cron.schedule("*/5 * * * * *", async () => {
  try {
    const response = await fetch(apiUrl);
    console.log(
      `Pinged API at ${new Date().toISOString()}, status: ${response.status}`
    );
  } catch (error) {
    console.error("Error pinging API:", error);
  }
});

console.log("Keepawake service started");
