package school.devskill.giocoLabirinto.components;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PosizioneGiocatore {
    public Integer riga = 0;
    public Integer colonna = 0;

    public PosizioneGiocatore(int r, int c) {
        this.riga = r;
        this.colonna = c;
    }


}

