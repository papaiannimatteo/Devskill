package school.devskill.GiocoDellOca.ElementiDiGioco.componenti.caselle;

import school.devskill.GiocoDellOca.exceptions.AzioneNonPermessaException;

public interface ISpecialBox {


     int calcolaPosizione(int posizioneGiocatore) throws AzioneNonPermessaException;


}
