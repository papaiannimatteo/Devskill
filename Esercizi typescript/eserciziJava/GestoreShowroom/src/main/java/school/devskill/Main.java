package school.devskill;


import school.devskill.showroom.macchina.Macchina;
import school.devskill.showroom.moto.Moto;
import school.devskill.showroom.veicoli.Veicoli;

import java.util.ArrayList;
import java.util.List;

import static school.devskill.showroom.manager.Manager.*;

public class Main {
    public static void main(String[] args) {
        //I create mock objects.
        Moto Honda = new Moto("Honda CB750", "Honda",10000.0, 1969, true, false);
        Moto Vespa = new Moto("Vespa", "Vespa",2000.0, 1909, true, false);
        Macchina Tesla = new Macchina("Tesla", "Tesla",3030.0, 2020, 2);
        Macchina Ferrari = new Macchina("Ferrari", "Ferrari",4030.0, 2022, 1);

        //I create 3 lists, whole catalogue, and  divided by type.
        List<Veicoli> carList = new ArrayList<>();
        List<Veicoli> motocycleList = new ArrayList<>();
        motocycleList.add(Honda);
        motocycleList.add(Vespa);
        carList.add(Tesla);
        carList.add(Ferrari);

        List<Veicoli> list = new ArrayList<>();
        list.addAll(motocycleList);
        list.addAll(carList);

        //I solved the problem by using generics and just 3 methods.
        System.out.println("Prezzo medio motociclette è " + SortPrice(motocycleList));
        System.out.println("Motocicletta piu' vecchia è " + SortOldest(motocycleList).getNome());
        System.out.println("Motocicletta piu' nuova è " + SortNewest(motocycleList).getNome() +'\n');

        System.out.println("Prezzo medio macchine è " + SortPrice(carList));
        System.out.println("Macchina piu' vecchia è " + SortOldest(carList).getNome());
        System.out.println("Macchina piu' nuova è " + SortNewest(carList).getNome()+'\n');

        System.out.println("Prezzo medio totale è " + SortPrice(list));
        System.out.println("Veicolo piu' vecchio è " + SortOldest(list).getNome());
        System.out.println("Veicolo piu' nuovo è " + SortNewest(list).getNome()+'\n');

    }

}

