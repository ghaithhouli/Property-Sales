package io.NetWorkApp.Property.testing;


import io.NetWorkApp.Property.PropertyServices;
import io.NetWorkApp.model.Sells;
import io.NetWorkApp.model.property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/test")
public class PropertyControllerTest {
    @Autowired
    private PropertyServices propertyServices;
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/property/showall")
    public List<property> getallproperty() {
        return propertyServices.getAll();

    }


    @RequestMapping(value = "/property/findbyid/{id}")
    public property find(@PathVariable int id){
        return propertyServices.findbyid(id);
    }


    //@RequestMapping(value = "/property/findallbypos/{pos}")
    //public List <property> findall(@PathVariable String pos){
//        return propertyServices.findallbypostion(pos);
//    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/property/add", method = RequestMethod.POST)
    public void addproperty(@RequestBody property property) {

        propertyServices.add(property);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/property/delete/{id}", method = RequestMethod.POST)
    public void deleteproperty(@PathVariable int id) {
        propertyServices.delete(id);
    }


    @RequestMapping(value = "/property/update/{id}",method = RequestMethod.POST)
    public void update(@RequestBody property newproperty,@PathVariable int id)
    {
        propertyServices.update(id,newproperty); }

    @RequestMapping(value = "/property/sell/{id}",method = RequestMethod.POST)
    public void sell(@PathVariable int id,@RequestBody Sells sells ){
        propertyServices.sell(id,sells);
    }


    @RequestMapping(value = "/property/showbypos/{pos}",method = RequestMethod.GET)
    public List <property> findbypos(@PathVariable String pos){
        return propertyServices.findbypostion(pos);
    }

}
