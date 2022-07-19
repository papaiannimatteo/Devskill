package school.devskill.GiocoDellOca.web.interfaces;

import school.devskill.GiocoDellOca.exceptions.NoPlayerException;
import school.devskill.GiocoDellOca.web.command.InfoGiocatoreCommand;

public interface IControllerGame {
    String aggiungiGiocatore(InfoGiocatoreCommand i);
    String reset() throws NoPlayerException;
    String statoPartita();
    String giocaTurno();

}
