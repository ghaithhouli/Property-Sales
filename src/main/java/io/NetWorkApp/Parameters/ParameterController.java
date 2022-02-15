package io.NetWorkApp.Parameters;


import io.NetWorkApp.model.Parameters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.cache.CacheManager;


import java.util.List;
import java.util.Optional;


@RestController
public class ParameterController {

    @Autowired
    ParameterServices parameterServices;


    CacheManager cacheManager;
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/parameters/showall")
    public List<Parameters> getall(){
        System.out.println("you are not in chache");
        return parameterServices.getall();
    }

    @RequestMapping("/parameters/get/{name}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Parameters getParameterbyname(@PathVariable String name){
        return parameterServices.getParameterbyname(name);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/parameters/Add", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public void addparameter(@RequestBody Parameters parameter)
    {
        parameterServices.addparameter(parameter);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/parameters/update/{id}", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public void updateparamerter(@PathVariable int id ,@RequestBody Parameters newparameter){
        parameterServices.updateparamerter(id,newparameter);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/parameters/delete/{id}", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteparameter(@PathVariable int id ){

        parameterServices.deleteparameter(id);
    }
    @RequestMapping(value = "clearCache")
    public void clearCache(){
        for(String name:cacheManager.getCacheNames()){
            cacheManager.getCache(name).clear();
        }
    }


}
