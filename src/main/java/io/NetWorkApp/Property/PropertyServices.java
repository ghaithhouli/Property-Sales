package io.NetWorkApp.Property;


import io.NetWorkApp.Parameters.ParameterServices;
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
public class PropertyServices {
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

    public void add(property property) {
        auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(property.getRealPrice());

        property.setAddname(auth.getName());
        LocalDateTime now = LocalDateTime.now();
        property.setDateofAdd(now);
        propertyRepository.save(property);
    }

    public void delete(int id) {

        if (propertyRepository.findById(id) != null)
            propertyRepository.delete(propertyRepository.findById(id));
        else {
            throw new RuntimeException("this property not found or deleted");
        }
    }

    public void update(int id, property newproperty) {
        auth = SecurityContextHolder.getContext().getAuthentication();
        property lastupdate = propertyRepository.findById(id);
        LocalDateTime now = LocalDateTime.now();
        newproperty.setDateoflastupdate(now);
        if (newproperty.getVersion() < lastupdate.getVersion()) {
            throw new RuntimeException("this property was update try again");
        } else {
            propertyRepository.updateproperty(newproperty.getNumbrofstock(), newproperty.getPosition(), newproperty.getRealPrice(), auth.getName(), now, id);
        }

    }

    public void sell(int id, Sells sells) {
        auth = SecurityContextHolder.getContext().getAuthentication();
        property property = findbyid(id);
        LocalDateTime now = LocalDateTime.now();
        Parameters parameters1= parameterServices.getParameterbyname("companyratio");

        if (property.getVersion() > sells.getVersion())
            throw new RuntimeException("this property was update try again");
        else {
            sells.setPriceofsell(sells.getNumbrofstock() * property.getRealPrice() + (sells.getNumbrofstock() * property.getRealPrice() *parameters1.getValue() / 100));

            if (property.getNumbrofstock() > sells.getNumbrofstock()) {

                propertyRepository.updateproperty(property.getNumbrofstock() - sells.getNumbrofstock(), property.getPosition(), property.getRealPrice(), auth.getName(), now, property.getId());

                sellsRepository.save(sells);
            } else if (property.getNumbrofstock() == sells.getNumbrofstock()) {
                propertyRepository.delete(property);
                sellsRepository.save(sells);
            }
            else
            {
                throw  new RuntimeException("you don't have that numberofstock");

            }
        }
    }

    public property findbyid(int id) {
        return propertyRepository.findById(id);
    }

    public List<property> findbypostion(String pos) {
        return propertyRepository.findByPos(pos);
    }


}
