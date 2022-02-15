package io.NetWorkApp.Parameters;


import io.NetWorkApp.model.Parameters;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface ParametersRepository extends CrudRepository<Parameters, String> {

    List<Parameters> findAll();


    Parameters findById(int id);
    @Transactional
    @Modifying
    @Query(value = "update Parameters set parameter= :parameter , val=:val where id=:id ")
    void updateparameter(@Param("parameter")String parameter, @Param("val")int val, @Param("id") int id );

    @Transactional
    @Query(value = "select * from Parameters where parameter=:parameter ", nativeQuery = true)
    Parameters findByparameter (@Param("parameter")String parameter);

}
