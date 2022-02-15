package io.NetWorkApp.User;


import io.NetWorkApp.JWT.RoleRepository;
import io.NetWorkApp.model.ERole;
import io.NetWorkApp.model.Role;
import io.NetWorkApp.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServices {
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
        public Set<Role> getRole(String name){
            User user= userRepository.findByUsername(name);
            Set<Role> roles=user.getRoles();
            return roles;
        }

        public boolean isAdmin(Set<Role> roles){
            boolean ok=false;
                if (roles.contains(roleRepository.findByName(ERole.ROLE_ADMIN) ))
                    ok=true;
            return ok;
        }

        public User getUser(String name){
            return userRepository.findByUsername(name);
        }
}
