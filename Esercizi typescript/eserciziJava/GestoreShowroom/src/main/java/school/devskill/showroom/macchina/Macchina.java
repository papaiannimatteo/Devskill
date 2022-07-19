package school.devskill.showroom.macchina;

import school.devskill.showroom.veicoli.Veicoli;

public class Macchina extends Veicoli {
    protected Integer cc;


    public Macchina(String nome, String brand, Double prezzo, Integer anno, Integer cc) {
        super(nome, brand, prezzo, anno);
        this.cc = cc;
    }

    public Integer getCc() {
        return cc;
    }

    public void setCc(Integer cc) {
        this.cc = cc;
    }
}
