package io.NetWorkApp.Property;


import io.NetWorkApp.model.Sells;
import io.NetWorkApp.model.property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PropertyController {
    @Autowired
    private PropertyServices propertyServices;

    @Value("${server.port}")
    public String port;

    @RequestMapping("/getport")
    public String getport(){
        return "applicatiob is up on port : "+ port;
    }





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

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/property/update/{id}",method = RequestMethod.POST)
    public void update(@RequestBody property newproperty,@PathVariable int id)
    {         System.out.println("update");

        propertyServices.update(id,newproperty); }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/property/sell/{id}",method = RequestMethod.POST)
    public void sell(@PathVariable int id,@RequestBody Sells sells ){
        System.out.println(sells.getVersion());
        System.out.println(sells.getNumbrofstock());
        System.out.println(sells.getNameofcustomer());

        propertyServices.sell(id,sells);
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/property/showbypos/{pos}",method = RequestMethod.GET)
    public List <property> findbypos(@PathVariable String pos){
        return propertyServices.findbypostion(pos);
    }

}
