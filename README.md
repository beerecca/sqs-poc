# SQS Proof of concept

A simple Node.js application that sends and receives messages from an SQS queue.

## Setup

Install packages:

    npm install

## Basic Configuration

You need to set up your AWS security credentials by creating a file named "config.json" in this repo with the following:

    [default]
    aws_access_key_id = <your access key id>
    aws_secret_access_key = <your secret key>

## Running the poc

Run the receiver in one terminal:

    node receive.js

And then the sender in another terminal:

    node send.js
