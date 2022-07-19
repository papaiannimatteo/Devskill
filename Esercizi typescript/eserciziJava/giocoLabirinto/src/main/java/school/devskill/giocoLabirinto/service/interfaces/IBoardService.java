package school.devskill.giocoLabirinto.service.interfaces;

import school.devskill.giocoLabirinto.components.PosizioneGiocatore;

public interface IBoardService {
    void creaBoard();

    void creaLabirinto();

    String showBoard();

    boolean canMoves(Integer newR, Integer newC) throws Exception;

    String muoviGiocatore(String movimento) throws Exception;

    void reset();

    String statusGame();

}
