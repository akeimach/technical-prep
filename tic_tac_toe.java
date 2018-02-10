import java.lang.Math;
import java.util.Random;

public class PlayGame {
  
  public static void main(String[] args) {

    Game playGame = new Game();
    int currentPlayer = 1;

    while (playGame.gameInProgress()) {
      currentPlayer = playGame.nextPlayer(currentPlayer);
      playGame.addMove(currentPlayer);
      playGame.printBoard();      
    }
  }
}


public class Game {
  private int[][] Board = new int[3][3];
  
  public int nextPlayer(int currentPlayer) {
    if (currentPlayer == 1) { currentPlayer = -1; }
    else { currentPlayer = 1; }
    return currentPlayer;
  }

  public void printBoard() {
    for (int row = 0; row < 3; row++) {
      System.out.println("  " + determineChar(Board[row][0]) + " | " + determineChar(Board[row][1]) +" | " + determineChar(Board[row][2]) + "  ");
      if (row < 2) { System.out.println("____|___|____"); }
    }
    System.out.println();
  }
  
  private char determineChar(int boardInt) {
    if (boardInt == 1) { return 'x'; }
    else if (boardInt == -1) { return 'o'; }
    else { return ' '; }
  }

  public boolean gameInProgress() {
    for (int i = 0; i < 3; i++) {
      if (((Board[i][0] + Board[i][1] + Board[i][2]) == 3) || ((Board[i][0] + Board[i][1] + Board[i][2]) == -3)) {
        System.out.println("winner in row " + (i+1));
        return false;
      }
      if (((Board[0][i] + Board[1][i] + Board[2][i]) == 3) || ((Board[0][i] + Board[1][i] + Board[2][i]) == -3)) {
        System.out.println("winner in col " + (i+1));
        return false;
      }
    }
    if (((Board[0][0] + Board[1][1] + Board[2][2]) == 3) || ((Board[0][0] + Board[1][1] + Board[2][2]) == -3)) {
      System.out.println("winner in diagonal a");
      return false;
    }
    if (((Board[2][0] + Board[1][1] + Board[0][2]) == 3) || ((Board[2][0] + Board[1][1] + Board[0][2]) == -3)) {
      System.out.println("winner in diagonal b");
      return false;
    }
    for (int row = 0; row < 3; row++) {
      for (int col = 0; col < 3; col++) {
        if (Board[row][col] == 0) {
          return true;
        }
      }
    }
    System.out.println("tie game");
    return false;
  }

  public void addMove(int player) {
    boolean choosingEmptySpace = true;
    Random rn = new Random();
    while (choosingEmptySpace == true) {
      int row = rn.nextInt(3);
      int col = rn.nextInt(3);
      if (Board[row][col] == 0) {
        Board[row][col] = player;
        choosingEmptySpace = false;
      }
    }
  }

}
