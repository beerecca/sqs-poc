const Consumer = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/227235672402/sweetqueue',
  handleMessage: (message, done) => {
      console.log('Received a new message!', message);
    done();
  }
});

app.on('error', (err) => {
  console.log(err.message);
});

app.start();