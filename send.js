var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var queueURL = "https://sqs.us-east-1.amazonaws.com/227235672402/sweetqueue";

var send = function(i) {
  var params = {
    MessageBody: `Testy test test ${i}`,
    QueueUrl: queueURL
  };

  sqs.sendMessage(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.MessageId);
    }
  });
};

[1,2,3,4,5,6].forEach((i) => {
  setTimeout(()=>{send(i)}, i*1000);
});