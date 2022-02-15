package io.NetWorkApp.Property;


import io.NetWorkApp.model.property;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Transactional
@Repository
public interface PropertyRepository extends CrudRepository<property, Integer> {
    List<property> findAll();
    property findById(int id);
//    List<property> findAllBy(String pos);

    @Modifying
        @Query(value = "update property  set numbrofstock= :numbrofstock , position=:position , realPrice=:realprice , lastupdatename=:lastupdatename ,dateoflastupdate=:dateoflastupdate where id=:id ")
     void updateproperty(@Param("numbrofstock")int numbrofstock,@Param("position")String position,@Param("realprice")int realprice,@Param("lastupdatename")String lastupdatename, @Param("dateoflastupdate")LocalDateTime dateoflastupdate ,@Param("id") int id );

    @Modifying
    @Query(value = "select * from property where position=:position ", nativeQuery = true)
    List <property> findByPos (@Param("position")String position);

}
