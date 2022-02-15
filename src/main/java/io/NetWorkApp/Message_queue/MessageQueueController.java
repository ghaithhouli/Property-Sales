package io.NetWorkApp.Message_queue;


import io.NetWorkApp.User.UserRepository;
import io.NetWorkApp.User.UserServices;
import io.NetWorkApp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
public class MessageQueueController {

    @Autowired
    private Send send;
    @Autowired
    private Receiver receiver;

    private User user;
    @Autowired
    private UserServices userServices;
    private Authentication auth;
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/send")
    public void send(@RequestBody String content) throws Exception {

        String email;
        LocalDateTime now=LocalDateTime.now();
        auth = SecurityContextHolder.getContext().getAuthentication();

        user = userServices.getUser(auth.getName());
        email=user.getEmail();
        Object object="Email:"+email+"\n"+"contect : "+content+"\n"+"Date: "+now;
        send.send(object);
    }

//    @GetMapping(value = "/MQ")
//    public void producer(@RequestParam("email") String email, @RequestParam("content") String content, @RequestParam("date") String date) {
//        Message msg = new Message();
//        msg.setEmail(email);
//        msg.setContent(content);
//        msg.setDate(date);
//    }
}
