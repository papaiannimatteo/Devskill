package school.devskill.GiocoDellOca.service.classes;

import org.springframework.stereotype.Service;
import school.devskill.GiocoDellOca.ElementiDiGioco.componenti.caselle.ISpecialBox;
import school.devskill.GiocoDellOca.ElementiDiGioco.componenti.caselle.NumericBox;
import school.devskill.GiocoDellOca.ElementiDiGioco.componenti.caselle.StopBox;
import school.devskill.GiocoDellOca.ElementiDiGioco.componenti.player.Player;
import school.devskill.GiocoDellOca.exceptions.GiocoInCorsoException;
import school.devskill.GiocoDellOca.exceptions.AzioneNonPermessaException;
import school.devskill.GiocoDellOca.exceptions.NoPlayerException;
import school.devskill.GiocoDellOca.service.interfaces.IBoardManager;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@Service("BoardManager")
public class BoardManagerImpl implements IBoardManager {
    private List<Player> players;
    private List<ISpecialBox> caselle;
    private final int dimensioneBoard = 14;
    private boolean isOver = false;
    protected boolean inCorso;


    public BoardManagerImpl() {
        this.players = new ArrayList<>();
        caselle = new ArrayList<>();
        creaBoard();
        inCorso = false;
    }

    public void aggiungiGiocatore(Player p) throws GiocoInCorsoException {

        if(inCorso)
            throw new GiocoInCorsoException();
        players.add(p);
    }

    private int lancioDadi(){
        Random random = new Random();
        int value = 0;
        try {
            Thread.sleep(500);
            value = random.nextInt(7-1) + 1;
        } catch (InterruptedException e) {
            e.printStackTrace();
            value = random.nextInt(7-1) + 1;
        }
        return value;

    }

    public void Reset() throws NoPlayerException {
        if(players.size() == 0){
            throw new NoPlayerException();
        }
        isOver = false;
        for (int i =0; i < players.size(); i++){

            Player playerCorrente = players.get(i);
            playerCorrente.setPosizione(0);
            playerCorrente.setNLanci(0);
            playerCorrente.setStop(false);
        }
    }

    private int aggiornaPosizione(int nuovoValore){
        if(nuovoValore >= dimensioneBoard){
            isOver = true;
        }
        return nuovoValore;
    }



    public String giocaTurno() throws NoPlayerException {

        int giocatoreVincente = 0;

        if(players.size() == 0){
            throw new NoPlayerException();
        }

        if (!inCorso)
        inCorso = true;

        //TURNO
        for (int i=0; i<players.size(); i++){
            Player corrente = players.get(i);
            if(!corrente.isStop()){
                giocatoreVincente = i;

                int risultatoDado = lancioDadi();
                int casellaDiArrivoTmp = aggiornaPosizione(corrente.getPosizione() + risultatoDado);
                corrente.setUltimoTiro(risultatoDado);



                ISpecialBox casellaArrivo = caselle.get(casellaDiArrivoTmp);


                if(casellaArrivo != null) {

                    try {
                        casellaDiArrivoTmp = aggiornaPosizione(casellaArrivo.calcolaPosizione(casellaDiArrivoTmp));
                    } catch (AzioneNonPermessaException e){
                        e.printStackTrace();
                        corrente.setStop(true);
                    }

                }
                corrente.aggiungiLancio();
                corrente.setPosizione(casellaDiArrivoTmp);

            }else{
                corrente.setStop(false);
            }
        }

        if(isOver){
            inCorso = !inCorso;
            return "Game Over" + players.get(giocatoreVincente);
        }


        return "Turno concluso!" + players;
    }

    @Override
    public String statoPartita(){
        return "Partita in corso: "+ inCorso + " " + players.toString();
    }

    private void creaBoard() {

        for ( int i=0; i<dimensioneBoard; i++){

            switch (i) {
                case 1 -> caselle.add(new NumericBox(2));
                case 5 -> caselle.add(new NumericBox(-1));
                case 7 -> caselle.add(new NumericBox(3));
                case 8 -> caselle.add(new NumericBox(0));
                case 9 -> caselle.add(new StopBox());
                case 12 -> caselle.add(new NumericBox(-3));
                default -> caselle.add(null);
            }


        }

    }


}
