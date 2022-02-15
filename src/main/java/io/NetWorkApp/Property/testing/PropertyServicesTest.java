package io.NetWorkApp.Property.testing;


import io.NetWorkApp.Parameters.ParameterServices;
import io.NetWorkApp.Property.PropertyRepository;
import io.NetWorkApp.Sells.SellsRepository;
import io.NetWorkApp.model.Parameters;
import io.NetWorkApp.model.Sells;
import io.NetWorkApp.model.property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PropertyServicesTest {
    private Authentication auth;

    @Autowired
    private PropertyRepository propertyRepository;
    @Autowired
    private ParameterServices parameterServices;
    @Autowired
    private SellsRepository sellsRepository;

    public List<property> getAll() {
        return propertyRepository.findAll();
    }

    public property add(property property) {
        auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(property.getRealPrice());

        property.setAddname(auth.getName());
        LocalDateTime now = LocalDateTime.now();
        property.setDateofAdd(now);
      return  propertyRepository.save(property);
    }

    public void delete(property property) {
        propertyRepository.delete(property);
    }


    public property findbyid(int id) {
        return propertyRepository.findById(id);
    }

    public List<property> findbypostion(String pos) {
        return propertyRepository.findByPos(pos);
    }
    public void update( property newproperty) {
        int id =1;
            propertyRepository.updateproperty(newproperty.getNumbrofstock(), newproperty.getPosition(), newproperty.getRealPrice(), "", null, id);


    }

}
