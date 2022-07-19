package school.devskill.GiocoDellOca.ElementiDiGioco.componenti.caselle;

import school.devskill.GiocoDellOca.exceptions.AzioneNonPermessaException;

public class StopBox implements ISpecialBox{


    @Override
    public int calcolaPosizione(int posizioneGiocatore) {
        throw new AzioneNonPermessaException();
    }
}
