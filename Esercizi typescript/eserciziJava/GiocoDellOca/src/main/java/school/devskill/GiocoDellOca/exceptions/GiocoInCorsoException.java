package school.devskill.GiocoDellOca.exceptions;

public class GiocoInCorsoException extends Exception {
    public GiocoInCorsoException() {
        super("Azione non permessa durante l'esecuzione del gioco!");
    }
}
