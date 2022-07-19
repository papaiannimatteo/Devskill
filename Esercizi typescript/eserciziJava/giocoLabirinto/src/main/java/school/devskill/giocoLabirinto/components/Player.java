package school.devskill.giocoLabirinto.components;

public class Player {
    public String nome;
    public PosizioneGiocatore posizioneGiocatore = new PosizioneGiocatore(0,0);

    public Player(String nome) {
        this.nome = nome;
    }
    public PosizioneGiocatore spostamento(String movimento){
        switch (movimento){
            case "sopra" : return new PosizioneGiocatore(+1, 0);
            case "sotto" : return new PosizioneGiocatore(-1, 0);
            case "destra" : return new PosizioneGiocatore(0, +1);
            case "sinistra" : return new PosizioneGiocatore(0, -1);

        }
        return posizioneGiocatore;
    }

    public void spostati(PosizioneGiocatore newPosition){
        this.posizioneGiocatore = newPosition;
    }


}
