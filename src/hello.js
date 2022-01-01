"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully!",
      },
      null,
      2
    ),
  };
};

module.exports = {
  handler: hello
}
