package io.NetWorkApp.Sells;

import io.NetWorkApp.model.Sells;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SellsController {

    @Autowired
    SellsServices sellsServices;


    @RequestMapping("/sells/showall")
    public List<Sells> getallsells(){
        return sellsServices.getall();
    }
}
