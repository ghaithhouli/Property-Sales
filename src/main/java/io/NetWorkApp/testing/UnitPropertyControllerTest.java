package io.NetWorkApp.testing;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.NetWorkApp.Property.PropertyRepository;
import io.NetWorkApp.Property.PropertyServices;
import io.NetWorkApp.Property.testing.PropertyServicesTest;
import io.NetWorkApp.model.Parameters;
import io.NetWorkApp.model.property;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.time.LocalDateTime;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc

public class UnitPropertyControllerTest {
    @MockBean
    private PropertyRepository propertyRepository;
    @Autowired
    private PropertyServicesTest propertyServices;
    @Mock
    private Parameters parameters;

    @Autowired
    MockMvc mockMvc;
    @Test
    public void showall()  {
        when(propertyRepository.findAll()).thenReturn(Stream.of(
                new property("jaramana",123,12)).collect(Collectors.toList()));
        assertEquals(1,propertyServices.getAll().size());


    }
    @Test
    public void add(){
        property property=new property("jarmana",10000,4);
        when(propertyRepository.save(property)).thenReturn(property);

        assertEquals(property,propertyServices.add(property));

    }
    @Test
    public void delete(){
        property property=new property(1,"jarmana",10000,4);
        propertyServices.delete(property);
        verify(propertyRepository,times(1)).delete(property);
    }
    @Test
    public void update(){
        property property=new property(1,"jarmana",10000,4);
        propertyServices.update(property);
        verify(propertyRepository,times(1)).updateproperty(property.getNumbrofstock(),property.getPosition(),property.getRealPrice(),"",null,1);
    }




}
