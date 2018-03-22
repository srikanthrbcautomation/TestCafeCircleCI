var AWS = require("aws-sdk");

AWS.config.loadFromPath('aws.config.json');

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

export default function doCall(id, extractFunction, callback) {

    var params = {
        TableName : "rbc-sup-UserProfiles-qa_rbc",
        Key: {'userId': id}
    };
    return docClient.get(params).promise().then(data => {
	    return  extractFunction(data)
    }).catch(err => {
    	console.log("Unable to query. Error:", JSON.stringify(err, null, 2));
    })      

}
