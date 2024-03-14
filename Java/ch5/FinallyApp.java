package gr.aueb.cf.ch5;

import java.util.InputMismatchException;
import java.util.Scanner;

/**
 * Finally is always executed
 */
public class FinallyApp {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = 0;

        try {
            System.out.println("Please insert an int");
            num = scanner.nextInt();

            System.out.println(num);
        }catch (InputMismatchException e) {
            //e.printStackTrace();
            System.out.println("Error invalid input token");
            //return
        }finally {              //gia na ginei apodesmeusi poron
            try {
                if (scanner != null)  scanner.close();
            }catch (Exception e) {
                e.printStackTrace();
            }

        }

        System.out.println("It's not always executed");
    }
}

