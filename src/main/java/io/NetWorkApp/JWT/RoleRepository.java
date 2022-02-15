package io.NetWorkApp.JWT;
import java.util.Optional;

import io.NetWorkApp.model.ERole;
import io.NetWorkApp.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(ERole name);
}