const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const requests = urls.map(httpGet);
  const results = await Promise.all(requests);
  return results.map(formatHttpGetResult);
};

const formatHttpGetResult = (result) => {
  const message = JSON.parse(result.body).message;

  switch (result.status) {
    case 200:
      return {
        "Arnie Quote": message,
      };
    default:
      return {
        FAILURE: message,
      };
  }
};

module.exports = {
  getArnieQuotes,
};
