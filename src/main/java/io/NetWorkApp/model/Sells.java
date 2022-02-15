package io.NetWorkApp.model;


import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Sells {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String Position;
    private int realPrice;
    private int numbrofstock=0;
    private LocalDate dateofsell=null;
    private int priceofsell=0;
    private String nameofcustomer=null;
    @Version
    private int version;

    public void setVersion(int version) {
        this.version = version;
    }

    public int getVersion() {
        return version;
    }

    public Sells() {}

    public int getId() {
        return id;
    }

    public String getPosition() {
        return Position;
    }

    public int getRealPrice() {
        return realPrice;
    }

    public int getNumbrofstock() {
        return numbrofstock;
    }

    public LocalDate getDateofsell() {
        return dateofsell;
    }

    public int getPriceofsell() {
        return priceofsell;
    }

    public String getNameofcustomer() {
        return nameofcustomer;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setPosition(String position) {
        Position = position;
    }

    public void setRealPrice(int realPrice) {
        this.realPrice = realPrice;
    }

    public void setNumbrofstock(int numbrofstock) {
        this.numbrofstock = numbrofstock;
    }

    public void setDateofsell(LocalDate dateofsell) {
        this.dateofsell = dateofsell;
    }

    public void setPriceofsell(int priceofsell) {
        this.priceofsell = priceofsell;
    }

    public void setNameofcustomer(String nameofcustomer) {
        this.nameofcustomer = nameofcustomer;
    }

}
