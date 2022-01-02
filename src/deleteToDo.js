const AWS = require("aws-sdk");

const deleteToDo = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { id } = event.pathParameters;
   
    await dynamodb.delete({
        TableName: "ToDoTable",
        Key: { id },
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({
            msg: "ToDo deleted successfully"
        }),
    };
};

module.exports = {
  handler: deleteToDo
}
