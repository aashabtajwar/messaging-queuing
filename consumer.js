// creating an Advanced Message Queue Protocol instance
const amqp = require("amqplib");

connect();
async function connect() {
    try {
        // create connection
        // on an amqp url (in this case, it was created on localhost)
        // returns a promise
        const connection = await amqp.connect('amqp://localhost:5672');
        
        // create channel 
        const channel = await connection.createChannel();
        
        // creating a queue called "jobs"
        const result = await channel.assertQueue("jobs");
        
        // consuming a message
        channel.consume("jobs", message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Received job with input ${input.number}`);

            // acknowledging that we received the message
            if (input.number == 19) {
                channel.ack(message);
            }
        })

        console.log("waiting for messages...");
    }
    catch (e) {
        console.error(e);
    }
}