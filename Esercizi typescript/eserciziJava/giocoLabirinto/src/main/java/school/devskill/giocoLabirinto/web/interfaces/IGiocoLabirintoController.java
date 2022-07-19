package school.devskill.giocoLabirinto.web.interfaces;

import school.devskill.giocoLabirinto.command.MovimentoCommand;

public interface IGiocoLabirintoController {

    String reset();

    String movimento(MovimentoCommand movimentoCommand) throws Exception;

    String statusGame();

}
