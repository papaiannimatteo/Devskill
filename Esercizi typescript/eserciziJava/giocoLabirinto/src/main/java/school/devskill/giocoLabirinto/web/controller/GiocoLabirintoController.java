package school.devskill.giocoLabirinto.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import school.devskill.giocoLabirinto.command.MovimentoCommand;
import school.devskill.giocoLabirinto.service.classes.BoardServiceImpl;
import school.devskill.giocoLabirinto.web.interfaces.IGiocoLabirintoController;

@RestController
@RequestMapping("/Labirinto")

public class GiocoLabirintoController implements IGiocoLabirintoController {

    @Autowired
    BoardServiceImpl board;

    @Override
    @PostMapping ("/reset")
    public String reset() {
        board.reset();
        return "Gioco resettato correttamente!";
    }


    @PostMapping ("/movimento")
    public String movimento( @RequestBody MovimentoCommand movimentoCommand) throws Exception {
        return board.muoviGiocatore(movimentoCommand.tasto);
    }

    @Override
    @GetMapping ("/stato")
    public String statusGame() {
        return board.statusGame();
    }
}
