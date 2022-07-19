package school.devskill.showroom.manager;

import school.devskill.showroom.veicoli.Veicoli;
import java.util.List;

public class Manager {

    public static Double SortPrice(List<Veicoli> x){
        Double total = 0.0;
        for(Veicoli y: x){
            total += y.getPrezzo();
        }
        return (total/x.size());
    };

    public static Veicoli SortOldest(List<Veicoli> x){
        Veicoli z = x.get(0);
        for(Veicoli y: x){
            if(y.getAnno() <= z.getAnno()){
                z = y;
            }
        }
        return z;
    };


    public static Veicoli SortNewest(List<Veicoli> x){
        Veicoli z = x.get(0);
        for(Veicoli y: x){
            if(y.getAnno() >= z.getAnno()){
                z = y;
            }
        }
        return z;
    };
}
