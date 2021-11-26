## Message queuing using Nodejs and RabbitMQ

### Installation
After cloning the project, enter the command to your terminal
```
npm install
```

### Spin up RabbitMQ docker container

```
docker run --name <your_name> -p 5672:5672 rabbitmq
```

### Start publishing and consuming
```npm run publush```
```npm run consume```
