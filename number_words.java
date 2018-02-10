
import java.util.*;


public class PrintWords {

  public static void main(String[] args) {

    System.out.println(-312 + ":" + toWord(-312));
    System.out.println(18 + ":" + toWord(18));
    System.out.println(983034009 + ":" + toWord(983034009));
    System.out.println(16000 + ":" + toWord(16000));
    System.out.println(1000500040 + ":" + toWord(1000500040));

    return;
  }

  public static ArrayList<String> digits =
    new ArrayList<String>(Arrays.asList(""," one"," two"," three"," four"," five"," six"," seven"," eight"," nine"," ten"," eleven",
                                        " twelve"," thirteen"," fourteen"," fifteen"," sixteen"," seventeen"," eighteen"," nineteen"));
  public static ArrayList<String> tens =
    new ArrayList<String>(Arrays.asList(""," ten"," twenty"," thirty"," forty"," fifty"," sixty"," seventy"," eighty"," ninety"));
  public static ArrayList<String> beyond =
    new ArrayList<String>(Arrays.asList(""," hundred"," thousand"," million"," billion"," trillion"," quadrillion"));


  public static String toWord(int input) {

    String output = "";
    boolean negative = false;
    int iter = 0;

    if (input < 0) {
      negative = true;
      input *= -1;
    }
    else if (input == 0) {
      output = " zero";
    }

    while (input > 0) {

      if ((input % 1000) > 0) {

        if ((input % 100) < 20) {
          output = digits.get(input % 100) + beyond.get(iter) + output;
        }
        else {
          output = tens.get((input % 100) / 10) + digits.get(input % 10) + beyond.get(iter) + output;
        }
        if ((input % 1000) < 100) {
          output = digits.get((input % 1000) / 100) + output;
        }
        else {
          output = digits.get((input % 1000) / 100) + beyond.get(1) + output;
        }
      }

      if ((iter == 0) && (input > 100)) { iter++; }
      iter++;
      input /= 1000;

    }
    
    if (negative) {
      output = " negative" + output;
    }

    return output;
  }

}