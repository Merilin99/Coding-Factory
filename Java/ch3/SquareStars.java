package gr.aueb.cf.ch3;

import java.util.Scanner;

/*
Εμφανίζει πίνακα αστεριών
 */

public class SquareStars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Εισαγωγή πλήθους αστεριών: ");
        int n = scanner.nextInt();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        scanner.close();
    }
}

