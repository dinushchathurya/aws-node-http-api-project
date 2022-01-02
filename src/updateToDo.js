const AWS = require("aws-sdk");

const updateToDo = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { id } = event.pathParameters;
    const { completed } = JSON.parse(event.body);

    await dynamodb.update({
        TableName: "ToDoTable",
        Key: { id },
        ExpressionAttributeValues: {
            ':completed': completed
        },
        UpdateExpression: 'set completed = :completed',
        ReturnValues:"ALL_NEW"
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({
            msg: "ToDo updated successfully"
        }),
    };
};

module.exports = {
  handler: updateToDo
}
