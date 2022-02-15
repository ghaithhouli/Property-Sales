package io.NetWorkApp.model;



import javax.persistence.*;

@Entity
public class Parameters {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String parameter;
    private int val;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getParameter() {
        return parameter;
    }

    public int getValue() {
        return val;
    }

    public void setParameter(String parameter) {
        this.parameter = parameter;
    }

    public void setValue(int value) {
        this.val = value;
    }
}
