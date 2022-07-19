package school.devskill.GiocoDellOca.ElementiDiGioco.componenti.caselle;


public class NumericBox implements ISpecialBox {

    private int imprevisto;

    public NumericBox(int imprevisto) {

        this.imprevisto = imprevisto;
    }



    @Override
    public int calcolaPosizione(int posizioneGiocatore) {
        return imprevisto == 0 ? 0 : posizioneGiocatore + imprevisto;
    }


}
