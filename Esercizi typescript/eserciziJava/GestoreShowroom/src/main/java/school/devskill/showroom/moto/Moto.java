package school.devskill.showroom.moto;

import school.devskill.showroom.veicoli.Veicoli;

public class Moto extends Veicoli {
    private Boolean isLimitedEdition;
    private Boolean isForRacing;



    public Moto(String nome, String brand, Double prezzo, Integer anno, Boolean isLimitedEdition, Boolean isForRacing) {
        super(nome, brand, prezzo, anno);
        this.isLimitedEdition = isLimitedEdition;
        this.isForRacing = isForRacing;
    }

    public Boolean getLimitedEdition() {
        return isLimitedEdition;
    }

    public void setLimitedEdition(Boolean limitedEdition) {
        isLimitedEdition = limitedEdition;
    }

    public Boolean getForRacing() {
        return isForRacing;
    }

    public void setForRacing(Boolean forRacing) {
        isForRacing = forRacing;
    }
}
