package school.devskill.GiocoDellOca.exceptions;

public class AzioneNonPermessaException extends RuntimeException{
    public AzioneNonPermessaException() {
        super("Azione non permessa!");
    }
}
