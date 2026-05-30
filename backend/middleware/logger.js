const axios = require("axios");
const getToken = require("../utils/auth");

async function Log(stack, level, packageName, message) {
  try {
    const token = await getToken();

    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
}

module.exports = Log;