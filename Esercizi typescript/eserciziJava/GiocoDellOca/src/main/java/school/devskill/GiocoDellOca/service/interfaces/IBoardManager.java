package school.devskill.GiocoDellOca.service.interfaces;
import school.devskill.GiocoDellOca.ElementiDiGioco.componenti.player.Player;
import school.devskill.GiocoDellOca.exceptions.GiocoInCorsoException;
import school.devskill.GiocoDellOca.exceptions.NoPlayerException;


public interface IBoardManager {

     void aggiungiGiocatore(Player p) throws GiocoInCorsoException;

     void Reset() throws NoPlayerException;

     String giocaTurno() throws NoPlayerException;


     String statoPartita();
}
