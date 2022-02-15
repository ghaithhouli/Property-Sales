package io.NetWorkApp.Sells;


import io.NetWorkApp.model.Sells;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SellsServices {

    @Autowired
    SellsRepository sellsRepository;


    public List<Sells> getall(){
        return sellsRepository.findAll();

    }
}
