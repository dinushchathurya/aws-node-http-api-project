## Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

## API Endpoints

| Endpoint         | Method   |         Body            |
| ---------------- |:--------:|:-----------------------:|
| {url}            | POST     |{ "todo": "Test ToDo" }  |
| {url}/todos      | GET      |                         |
| {url}/todo/{id}  | GET      |                         |
| {url}/todo/{id}  | PUT      |{ "completed": "true" }  |
| {url}/todo/{id}  | DELETE   |                         |

