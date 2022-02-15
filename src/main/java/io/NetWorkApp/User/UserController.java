package io.NetWorkApp.User;


import io.NetWorkApp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping(value = "/admin")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/delete/{name}",method = RequestMethod.DELETE)

    public ResponseEntity<User> deleteUser(@PathVariable String name){
        User user= userRepository.findByUsername(name);
        userRepository.delete(user);
        return new ResponseEntity<User>(user, HttpStatus.OK);

    }
}
