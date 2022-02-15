package io.NetWorkApp.Message_queue;
import java.util.concurrent.TimeUnit;


import org.springframework.amqp.rabbit.core.RabbitTemplate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Send implements CommandLineRunner {
    @Autowired
    private  RabbitTemplate rabbitTemplate;
    private final Receive receive;


    public Send(Receive receive, RabbitTemplate rabbitTemplate) {
        this.receive = receive;
    }


    public void send(Object object)throws Exception{
        System.out.println("Sending message...");
        rabbitTemplate.convertAndSend(Receiver.topicExchangeName, "mahmood", object);
        receive.getLatch().await(10000, TimeUnit.MILLISECONDS);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Sending message...");
        rabbitTemplate.convertAndSend(Receiver.topicExchangeName, "ghaith", "hii ghaith");
        receive.getLatch().await(10000, TimeUnit.MILLISECONDS);


    }
}