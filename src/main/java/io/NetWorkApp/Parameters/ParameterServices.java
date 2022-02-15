package io.NetWorkApp.Parameters;


import io.NetWorkApp.model.Parameters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;


import java.lang.reflect.Parameter;
import java.util.List;
import java.util.Optional;

@Service
public class ParameterServices {

    private CacheManager cacheManager;
    @Autowired
    private ParametersRepository parametersRepository;
    @Cacheable (value = "parameters")
    public List<Parameters> getall(){
       return parametersRepository.findAll();
    }


    public Parameters getParameterbyname(String param){
        return parametersRepository.findByparameter(param);
    }
    public Parameters getbyid(int id ){
        return parametersRepository.findById(id);
    }

    @CacheEvict(value = "parameters",allEntries = true)
    public void deleteparameter (int id){
        Parameters parameters=getbyid(id);
        parametersRepository.delete(parameters);
    }

    @CacheEvict(value = "parameters",allEntries = true)
    public void addparameter(Parameters parameter)
    {
        parametersRepository.save(parameter);
    }

    @CacheEvict(value = "parameters",allEntries = true)
    public void updateparamerter(int id , Parameters newparameter){

        parametersRepository.updateparameter(newparameter.getParameter(),newparameter.getValue(),newparameter.getId());
    }
}
