const AWS = require("aws-sdk");

const fetchTodDo = async (event) => {
    
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const { id } = event.pathParameters;

    let todo;

    try {
        const result = await dynamodb.get({
            TableName: "ToDoTable",
            Key: { id }
        }).promise();

        todo = result.Item;
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message
            })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(todo),
    };
}

module.exports = {
    handler: fetchTodDo
}