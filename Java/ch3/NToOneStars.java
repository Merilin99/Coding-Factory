package gr.aueb.cf.ch3;

import java.util.Scanner;

public class NToOneStars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Εισαγωγή πλήθους αστεριών: ");
        int n = scanner.nextInt();

        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        scanner.close();
    }
}
