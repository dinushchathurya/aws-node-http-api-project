const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addToDo = async (event) => {

    const dynamoddb = new AWS.DynamoDB.DocumentClient();

    const { todo } = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4();
    
    const newToDo = {
        id,
        todo,
        createdAt,
        completed: false
    }
    
    await dynamoddb.put({
        TableName: "ToDoTable",
        Item: newToDo
    })

    return {
        statusCode: 200,
        body: JSON.stringify(newToDo),
    };
};

module.exports = {
  handler: addToDo
}
