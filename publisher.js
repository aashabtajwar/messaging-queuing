// creating an Advanced Message Queue Protocol instance
const amqp = require("amqplib");

const msg = {
    number: 19
};
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
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
        console.log(`Job sent successfully ${msg.number}`);

    }
    catch (e) {
        console.error(e);
    }
}