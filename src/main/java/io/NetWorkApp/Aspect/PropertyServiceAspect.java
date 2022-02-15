package io.NetWorkApp.Aspect;


import io.NetWorkApp.model.property;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class PropertyServiceAspect {

    private Authentication auth;

    @Before("execution(* io.NetWorkApp.Property.PropertyServices.getAll())")
    public void GetProperty() {
        auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("Get All Property-by " + auth.getName());
    }

    @Before("execution(* io.NetWorkApp.Property.PropertyServices.add(io.NetWorkApp.model.property))&& args(property)")
    public void beforeAddProperty(property property) {
        auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("Add New Property - ID: "+property.getId()+" - by "+auth.getName());
    }
    @After("execution(* io.NetWorkApp.Property.PropertyServices.add(io.NetWorkApp.model.property))&& args(property)")
    public void afterAddProperty(property property){
        auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("Added New Property - ID: "+property.getId()+" - by "+auth.getName());
    }

    @Before("execution(* io.NetWorkApp.Property.PropertyServices.delete(Integer))&& args(id)")
    public void beforedeleteproperty(int id){
        auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("Delete Property - ID: "+id+ " - by "+auth.getName());
    }

    @After("execution(* io.NetWorkApp.Property.PropertyServices.delete(Integer))&& args(id)")
    public void afterdeleteproperty(int id){
        auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("Delete Property - ID: "+id+ " - by "+auth.getName());
    }

}
