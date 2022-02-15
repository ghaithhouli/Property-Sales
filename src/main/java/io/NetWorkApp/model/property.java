package io.NetWorkApp.model;

import org.hibernate.annotations.ColumnDefault;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import javax.persistence.Id;

@Entity
public class property {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String position;
    private int realPrice;
    private int numbrofstock;
    private LocalDateTime dateofAdd;
    private LocalDateTime dateoflastupdate;
    private String addname;
    private String lastupdatename;
    @Version
    private  int version;

    public property() {
    }

    public property(String position, int realPrice, int numbrofstock) {
        this.position = position;
        this.realPrice = realPrice;
        this.numbrofstock = numbrofstock;
    }
    public property(int id,String position, int realPrice, int numbrofstock) {
        this.id=id;
        this.position = position;
        this.realPrice = realPrice;
        this.numbrofstock = numbrofstock;
    }
    public property(String position, int realPrice, int numbrofstock, LocalDateTime dateofAdd, LocalDateTime dateoflastupdate, String addname, String lastupdatename, int version) {
        this.position = position;
        this.realPrice = realPrice;
        this.numbrofstock = numbrofstock;
        this.dateofAdd = dateofAdd;
        this.dateoflastupdate = dateoflastupdate;
        this.addname = addname;
        this.lastupdatename = lastupdatename;
        this.version = version;
    }

    public void setDateofAdd(LocalDateTime dateofAdd) {
        this.dateofAdd = dateofAdd;
    }

    public void setDateoflastupdate(LocalDateTime dateoflastupdate) {
        this.dateoflastupdate = dateoflastupdate;
    }

    public void setAddname(String addname) {
        this.addname = addname;
    }

    public void setLastupdatename(String lastupdatename) {
        this.lastupdatename = lastupdatename;
    }

    public LocalDateTime getDateofAdd() {
        return dateofAdd;
    }

    public LocalDateTime getDateoflastupdate() {
        return dateoflastupdate;
    }

    public String getAddname() {
        return addname;
    }

    public String getLastupdatename() {
        return lastupdatename;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public int getVersion() {
        return version;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setRealPrice(int realPrice) {
        this.realPrice = realPrice;
    }

    public void setNumbrofstock(int numbrofstock) {
        this.numbrofstock = numbrofstock;
    }

    public int getId() {
        return id;
    }

    public String getPosition() {
        return position;
    }

    public int getRealPrice() {
        return realPrice;
    }

    public int getNumbrofstock() {
        return numbrofstock;
    }



}
