package io.NetWorkApp.Sells;

import io.NetWorkApp.model.Sells;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface SellsRepository extends CrudRepository<Sells,Integer> {
    List<Sells> findAll();

}
