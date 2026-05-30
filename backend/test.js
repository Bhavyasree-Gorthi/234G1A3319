require("dotenv").config();

const Log = require("./middleware/logger");

(async () => {
  await Log(
    "backend",
    "info",
    "service",
    "logger working successfully"
  );
})();