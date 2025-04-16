exports.main = async (context = {}) => {
  const { parameters } = context;
  const name = parameters.name || "Nurse Example";

  return {
    statusCode: 200,
    body: {
      message: `🎉 This is a working test response for ${name}!`
    },
    headers: {
      "Content-Type": "application/json"
    }
  };
};