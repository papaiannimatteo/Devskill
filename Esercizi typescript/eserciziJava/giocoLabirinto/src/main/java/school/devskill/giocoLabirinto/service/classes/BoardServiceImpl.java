package school.devskill.giocoLabirinto.service.classes;

import org.springframework.stereotype.Service;
import school.devskill.giocoLabirinto.components.Player;
import school.devskill.giocoLabirinto.components.PosizioneGiocatore;
import school.devskill.giocoLabirinto.service.interfaces.IBoardService;

@Service ("LabirintoService")
public class BoardServiceImpl implements IBoardService {

    private final Integer righe = 8;
    private final Integer colonne = 12;
    Character[][] matrice = new Character[righe][colonne];

    Player giocatore1 = new Player("Matteo");

    public BoardServiceImpl() {
        creaBoard();
    }

    public void creaBoard() {
        for (int i = 0; i < righe; i++){
            for (int j = 0; j < colonne; j++){
                matrice[i][j] = 'x';
            }
        }
        creaLabirinto();
    }

    public void creaLabirinto() {
        matrice[0][0] = 's';
        matrice[0][1] = 's';
        matrice[0][2] = 's';
        matrice[0][3] = 's';
        matrice[0][4] = 's';
        matrice[0][5] = 's';
        matrice[1][5] = 's';
        matrice[2][5] = 's';
        matrice[3][5] = 's';
        matrice[3][6] = 's';
        matrice[3][7] = 's';
        matrice[3][8] = 's';
        matrice[3][9] = 's';
        matrice[3][10] = 's';
        matrice[4][2] = 's';
        matrice[4][3] = 's';
        matrice[4][4] = 's';
        matrice[4][5] = 's';
        matrice[5][5] = 's';
        matrice[6][5] = 's';
        matrice[7][5] = 'u';

    }

    public String showBoard(){
        StringBuilder stringa = new StringBuilder();
        for (int i = 0; i < righe; i++){
            for (int j = 0; j < colonne; j++){
                if ( i == giocatore1.posizioneGiocatore.riga && j == giocatore1.posizioneGiocatore.colonna){
                    stringa.append("p \t");
                }
                else{
                    stringa.append(matrice[i][j]).append("\t");
                }
            }
            stringa.append("\n\n");

        }
        return stringa.toString();
    }



    public boolean canMoves(Integer newR, Integer newC) throws Exception{
        if (newR < 0 || newR >= righe){
            throw new Exception("Limite dimensione labirinto superato!");
        }
        if (newC < 0 || newC >= colonne){
            throw new Exception("Limite dimensione labirinto superato!");
        }
        return !matrice[newR][newC].equals('x');
    }

    public String muoviGiocatore(String movimento) throws Exception{
        PosizioneGiocatore spostamentoProva = giocatore1.spostamento(movimento);
        if (canMoves(spostamentoProva.riga, spostamentoProva.colonna)){
            giocatore1.spostati(spostamentoProva);
        }
        else{
            throw new Exception("Sei fuori dal sentiero!");
        }
        if (matrice[giocatore1.posizioneGiocatore.colonna][giocatore1.posizioneGiocatore.riga] == 'u'){
            this.reset();
            return "Sei fuori dal sentiero!";
        }
        return "La tua posizione attuale è in riga " +giocatore1.posizioneGiocatore.riga + " e in colonna " + giocatore1.posizioneGiocatore.colonna;
    }

    public void reset(){

        giocatore1.posizioneGiocatore.riga = 0;
        giocatore1.posizioneGiocatore.colonna = 0;
    }

    public String statusGame(){
        return showBoard();
    }




}
