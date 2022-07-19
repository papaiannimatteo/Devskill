package school.devskill.GiocoDellOca.exceptions;

public class NoPlayerException extends Exception {

    public NoPlayerException() {
        super("Non ci sono players nella partita!");
    }
}
