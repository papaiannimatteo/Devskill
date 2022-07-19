package school.devskill.GiocoDellOca.web.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import school.devskill.GiocoDellOca.ElementiDiGioco.componenti.player.Player;
import school.devskill.GiocoDellOca.exceptions.GiocoInCorsoException;
import school.devskill.GiocoDellOca.exceptions.NoPlayerException;
import school.devskill.GiocoDellOca.service.interfaces.IBoardManager;
import school.devskill.GiocoDellOca.web.command.InfoGiocatoreCommand;
import school.devskill.GiocoDellOca.web.interfaces.IControllerGame;

@RestController
@RequestMapping("/oca/")
public class ControllerGameImpl implements IControllerGame {

    private final IBoardManager boardManager;
    private final ObjectMapper michael;

    @Autowired
    public ControllerGameImpl(IBoardManager boardManager, ObjectMapper michael) {
        this.boardManager = boardManager;
        this.michael = michael;
    }


    @PostMapping("aggiungiGiocatore")
    @Override
    public String aggiungiGiocatore(@RequestBody InfoGiocatoreCommand i) {

        String message = "";
        try {
            boardManager.aggiungiGiocatore(michael.convertValue(i, Player.class));
            message = "Giocatore aggiunto con successo!";
        } catch (GiocoInCorsoException e) {
            e.printStackTrace();
            message = e.getMessage();
        }


        return message;
    }

    @PostMapping("reset")
    @Override
    public String reset() throws NoPlayerException {
        String message = "";
        try{
            boardManager.Reset();
            message = "Partita resettata con successo!";
        }catch (NoPlayerException e){
            e.printStackTrace();
            message = e.getMessage();
        }
        return message;
    }

    @GetMapping("statoPartita")
    @Override
    public String statoPartita() {
        return boardManager.statoPartita();
    }

    @PostMapping("giocaTurno")
    @Override
    public String giocaTurno() {
        String message = "";
        try {
           message = boardManager.giocaTurno();
        } catch (NoPlayerException e) {
            e.printStackTrace();
            message = e.getMessage();
        }
        return message;
    }
}
